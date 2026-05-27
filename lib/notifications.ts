import { supabase } from "./supabase"

export async function createNotification(
  title: string,
  message: string,
  type?: string,
  referenceId?: string
) {
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return

  if (type && referenceId) {
    const { data: existing } =
      await supabase
        .from("notifications")
        .select("id")
        .eq("user_id", user.id)
        .eq("type", type)
        .eq(
          "reference_id",
          referenceId
        )
        .maybeSingle()

    if (existing) return
  }

  await supabase
    .from("notifications")
    .insert([
      {
        user_id: user.id,
        title,
        message,
        type,
        reference_id: referenceId,
      },
    ])
}
