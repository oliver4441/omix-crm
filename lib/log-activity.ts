import { supabase } from "./supabase"

export async function logActivity(
  leadId: string,
  action: string
) {
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return

  await supabase
    .from("lead_activities")
    .insert([
      {
        lead_id: leadId,
        user_id: user.id,
        action,
      },
    ])
}
