"use client"

import { useEffect, useState } from "react"

import { supabase } from "@/lib/supabase"

export default function NotificationsPage() {
  const [tasks, setTasks] =
    useState<any[]>([])

  const [recentLeads, setRecentLeads] =
    useState<any[]>([])

  const fetchNotifications =
    async () => {
      const { data: tasksData } =
        await supabase
          .from("tasks")
          .select(`
            *,
            leads (
              name,
              company
            )
          `)
          .order("due_date", {
            ascending: true,
          })

      const { data: leadsData } =
        await supabase
          .from("leads")
          .select("*")
          .order("created_at", {
            ascending: false,
          })
          .limit(5)

      setTasks(tasksData || [])
      setRecentLeads(
        leadsData || []
      )
    }

  useEffect(() => {
    fetchNotifications()
  }, [])

  const now = new Date()

  return (
    <div className="min-h-screen bg-black p-6 text-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Notifications
        </h1>

        <p className="mt-2 text-zinc-400">
          CRM activity and reminders
        </p>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h2 className="mb-6 text-xl font-semibold">
            Upcoming Tasks
          </h2>

          <div className="space-y-4">
            {tasks.map((task) => {
              const overdue =
                task.due_date &&
                new Date(
                  task.due_date
                ) < now

              return (
                <div
                  key={task.id}
                  className="rounded-xl border border-white/10 bg-zinc-900 p-4"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">
                      {task.title}
                    </h3>

                    <span
                      className={`rounded-full px-3 py-1 text-xs ${
                        overdue
                          ? "bg-red-500/20 text-red-400"
                          : "bg-orange-500/20 text-orange-400"
                      }`}
                    >
                      {overdue
                        ? "Overdue"
                        : "Pending"}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-zinc-400">
                    {
                      task.leads
                        ?.name
                    }
                  </p>

                  <p className="mt-1 text-xs text-zinc-500">
                    Due{" "}
                    {task.due_date
                      ? new Date(
                          task.due_date
                        ).toLocaleString()
                      : "No deadline"}
                  </p>
                </div>
              )
            })}

            {tasks.length === 0 && (
              <div className="text-zinc-500">
                No tasks available
              </div>
            )}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h2 className="mb-6 text-xl font-semibold">
            Recent Leads
          </h2>

          <div className="space-y-4">
            {recentLeads.map(
              (lead) => (
                <div
                  key={lead.id}
                  className="rounded-xl border border-white/10 bg-zinc-900 p-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">
                        {lead.name}
                      </h3>

                      <p className="mt-1 text-sm text-zinc-400">
                        {
                          lead.company
                        }
                      </p>
                    </div>

                    <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-400">
                      {
                        lead.status
                      }
                    </span>
                  </div>

                  <p className="mt-3 text-xs text-zinc-500">
                    Added{" "}
                    {new Date(
                      lead.created_at
                    ).toLocaleString()}
                  </p>
                </div>
              )
            )}

            {recentLeads.length ===
              0 && (
              <div className="text-zinc-500">
                No recent leads
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
