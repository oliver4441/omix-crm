import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    title: "Total Leads",
    value: "1,248",
  },
  {
    title: "Active Clients",
    value: "324",
  },
  {
    title: "Conversion Rate",
    value: "18%",
  },
  {
    title: "Revenue",
    value: "KSh 248K",
  },
]

export default function DashboardCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <Card
          key={stat.title}
          className="bg-white/5 border-white/10 backdrop-blur-xl text-white"
        >
          <CardContent className="p-6">
            <p className="text-sm text-zinc-400">
              {stat.title}
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              {stat.value}
            </h2>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
