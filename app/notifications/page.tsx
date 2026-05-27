"use client"

import { useCallback, useEffect, useState } from "react"

import { supabase } from "@/lib/supabase"

type Notification = {
  id: string
  title: string
  message: string
  read: boolean
  created_at: string
}

export default function NotificationsPage() {
  const [notifications, setNotifications] =
    useState<Notification[]>([])

  const fetchNotifications =
    useCallback(async () => {
      const {
        data: { user },
      } =
        await supabase.auth.getUser()

      if (!user) return

      const { data } =
        await supabase
          .from("notifications")
          .select("*")
          .eq(
            "user_id",
            user.id
          )
          .order(
            "created_at",
            {
              ascending: false,
            }
          )

      if (data) {
        setNotifications(data)
      }
    }, [])

  useEffect(() => {
    const init = async () => {
      await fetchNotifications()
    }
    init()
  }, [fetchNotifications])

  const markAsRead =
    async (id: string) => {
      await supabase
        .from("notifications")
        .update({
          read: true,
        })
        .eq("id", id)

      fetchNotifications()
    }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          Notifications
        </h1>

        <p className="mt-2 text-zinc-400">
          CRM alerts and reminders.
        </p>
      </div>

      <div className="space-y-4">
        {notifications.length ===
        0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-zinc-400">
            No notifications yet.
          </div>
        ) : (
          notifications.map(
            (
              notification
            ) => (
              <div
                key={
                  notification.id
                }
                className={`rounded-2xl border p-6 ${
                  notification.read
                    ? "border-white/10 bg-white/5"
                    : "border-orange-500/30 bg-orange-500/10"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold">
                      {
                        notification.title
                      }
                    </h2>

                    <p className="mt-2 text-zinc-300">
                      {
                        notification.message
                      }
                    </p>

                    <p className="mt-4 text-sm text-zinc-500">
                      {new Date(
                        notification.created_at
                      ).toLocaleString()}
                    </p>
                  </div>

                  {!notification.read && (
                    <button
                      onClick={() =>
                        markAsRead(
                          notification.id
                        )
                      }
                      className="rounded-xl bg-gradient-to-r from-orange-500 to-blue-500 px-4 py-2 text-sm font-semibold"
                    >
                      Mark Read
                    </button>
                  )}
                </div>
              </div>
            )
          )
        )}
      </div>
    </div>
  )
}
