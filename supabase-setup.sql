-- ============================================================
-- Omix CRM — Supabase Table Setup
-- Run this in your Supabase SQL Editor
-- ============================================================

-- LEADS
create table if not exists leads (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid references auth.users(id) on delete cascade not null,
  name       text not null,
  company    text,
  email      text,
  phone      text,
  status     text default 'New',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- NOTES
create table if not exists notes (
  id         uuid primary key default gen_random_uuid(),
  lead_id    uuid references leads(id) on delete cascade not null,
  content    text not null,
  created_at timestamptz default now()
);

-- TASKS
create table if not exists tasks (
  id         uuid primary key default gen_random_uuid(),
  lead_id    uuid references leads(id) on delete cascade not null,
  title      text not null,
  due_date   timestamptz,
  completed  boolean default false,
  created_at timestamptz default now()
);

-- FILES
create table if not exists files (
  id         uuid primary key default gen_random_uuid(),
  lead_id    uuid references leads(id) on delete cascade not null,
  file_name  text not null,
  file_url   text not null,
  created_at timestamptz default now()
);

-- LEAD ACTIVITIES
create table if not exists lead_activities (
  id         uuid primary key default gen_random_uuid(),
  lead_id    uuid references leads(id) on delete cascade not null,
  user_id    uuid references auth.users(id) on delete cascade not null,
  action     text not null,
  created_at timestamptz default now()
);

-- NOTIFICATIONS
create table if not exists notifications (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid references auth.users(id) on delete cascade not null,
  title        text not null,
  message      text not null,
  type         text,
  reference_id text,
  read         boolean default false,
  created_at   timestamptz default now()
);

-- ============================================================
-- ROW LEVEL SECURITY (RLS) — Users only see their own data
-- ============================================================

alter table leads enable row level security;
alter table notes enable row level security;
alter table tasks enable row level security;
alter table files enable row level security;
alter table lead_activities enable row level security;
alter table notifications enable row level security;

-- Leads
create policy "Users manage own leads" on leads
  for all using (auth.uid() = user_id);

-- Notes (via lead ownership)
create policy "Users manage own notes" on notes
  for all using (
    lead_id in (select id from leads where user_id = auth.uid())
  );

-- Tasks
create policy "Users manage own tasks" on tasks
  for all using (
    lead_id in (select id from leads where user_id = auth.uid())
  );

-- Files
create policy "Users manage own files" on files
  for all using (
    lead_id in (select id from leads where user_id = auth.uid())
  );

-- Activities
create policy "Users manage own activities" on lead_activities
  for all using (auth.uid() = user_id);

-- Notifications
create policy "Users manage own notifications" on notifications
  for all using (auth.uid() = user_id);

-- ============================================================
-- STORAGE BUCKET for file uploads
-- ============================================================
insert into storage.buckets (id, name, public)
values ('crm-files', 'crm-files', true)
on conflict do nothing;

create policy "Authenticated users can upload files" on storage.objects
  for insert with check (auth.role() = 'authenticated');

create policy "Public can read files" on storage.objects
  for select using (bucket_id = 'crm-files');

-- ============================================================
-- UPDATED_AT trigger for leads
-- ============================================================
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger leads_updated_at
  before update on leads
  for each row execute function update_updated_at();
