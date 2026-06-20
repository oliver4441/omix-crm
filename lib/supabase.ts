import { createBrowserClient } from "@supabase/ssr"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co"
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key"

// IMPORTANT: We use createBrowserClient from @supabase/ssr (not the plain
// createClient from @supabase/supabase-js). The plain client stores the
// session in localStorage only, which is invisible to Next.js middleware
// (proxy.ts) since middleware runs on the server and only has access to
// request cookies. createBrowserClient writes/reads the session via cookies
// instead, so the same session is visible to both the browser AND the
// middleware on the very next request.
//
// Falls back to harmless placeholder values at build time (when no env vars
// are present, e.g. during static generation) so the client can be
// constructed without throwing. Real requests only happen in the browser
// once NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY are set in
// the deployment environment.
export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey)
