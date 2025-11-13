import { DollarSign, Users, BookOpen, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: DollarSign,
    value: "$29/mo",
    label: "Starting Price",
    company: "No Hidden Fees",
  },
  {
    icon: Users,
    value: "50K+",
    label: "Active Learners",
    company: "Worldwide",
  },
  {
    icon: BookOpen,
    value: "10K+",
    label: "Custom Courses",
    company: "And Growing",
  },
  {
    icon: TrendingUp,
    value: "99%",
    label: "Cost Savings",
    company: "vs University",
  },
]

export function StatsSection() {
  return (
    <section className="border-y border-border bg-card/30">
      <div className="container px-4 py-16 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <div className="flex items-center gap-3">
                <stat.icon className="h-5 w-5 text-accent" />
                <span className="text-3xl md:text-4xl font-bold">{stat.value}</span>
              </div>
              <p className="text-base text-foreground">{stat.label}</p>
              <p className="text-sm text-muted-foreground">{stat.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
