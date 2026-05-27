export default function ClientsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          Clients
        </h1>

        <p className="mt-2 text-zinc-400">
          Manage your active clients.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <p className="text-zinc-400">
          No clients yet.
        </p>
      </div>
    </div>
  )
}
