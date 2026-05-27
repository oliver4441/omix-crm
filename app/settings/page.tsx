export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          Settings
        </h1>

        <p className="mt-2 text-zinc-400">
          Manage your CRM preferences.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h2 className="text-2xl font-semibold mb-4">
          Account Settings
        </h2>

        <div className="space-y-4">
          <input
            placeholder="Business Name"
            className="w-full rounded-xl border border-white/10 bg-black/30 p-4 outline-none"
          />

          <input
            placeholder="Support Email"
            className="w-full rounded-xl border border-white/10 bg-black/30 p-4 outline-none"
          />

          <button className="rounded-xl bg-gradient-to-r from-orange-500 to-blue-500 px-6 py-3 font-semibold">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}
