import Sidebar from "@/components/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Sidebar />

      <main className="min-h-screen p-4 pt-20 lg:ml-72 lg:p-8">
        {children}
      </main>
    </div>
  )
}
