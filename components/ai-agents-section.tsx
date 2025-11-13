import { Card } from "@/components/ui/card"
import { Bot, Code, FileText, Calculator, Briefcase, Palette, Languages, TrendingUp } from "lucide-react"

const agents = [
  {
    icon: Code,
    name: "CodeMentor AI",
    description: "Debug code, learn programming concepts, and get instant code reviews across 20+ languages.",
    specialty: "Software Development",
  },
  {
    icon: FileText,
    name: "WritingPro AI",
    description: "Improve your writing with grammar checks, style suggestions, and structured feedback.",
    specialty: "Writing & Communication",
  },
  {
    icon: Calculator,
    name: "MathGenius AI",
    description: "Solve complex problems, understand proofs, and master mathematical concepts step-by-step.",
    specialty: "Mathematics & Logic",
  },
  {
    icon: Briefcase,
    name: "CareerCoach AI",
    description: "Get personalized career advice, resume reviews, interview prep, and job search strategies.",
    specialty: "Career Development",
  },
  {
    icon: Palette,
    name: "DesignGuru AI",
    description: "Learn design principles, get feedback on projects, and master UI/UX and visual design.",
    specialty: "Design & Creativity",
  },
  {
    icon: Languages,
    name: "PolyGlot AI",
    description: "Practice conversations, learn grammar, and achieve fluency in 50+ languages.",
    specialty: "Language Learning",
  },
  {
    icon: TrendingUp,
    name: "DataWizard AI",
    description: "Analyze data, understand statistics, and master data science and analytics tools.",
    specialty: "Data & Analytics",
  },
  {
    icon: Bot,
    name: "StudyBuddy AI",
    description: "Get general tutoring help, study tips, time management advice, and learning strategies.",
    specialty: "General Learning",
  },
]

export function AIAgentsSection() {
  return (
    <section className="container px-4 py-24 md:py-32 md:px-6 mx-auto max-w-7xl">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Meet your specialized AI tutors</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Chat with expert AI agents trained in specific domains. Get instant help, personalized feedback, and
            guidance whenever you need it—24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <agent.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{agent.name}</h3>
                  <p className="text-xs text-accent font-medium">{agent.specialty}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{agent.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center pt-8">
          <p className="text-muted-foreground">
            All AI agents available 24/7 with Pro and Lifetime plans. No wait times, no scheduling needed.
          </p>
        </div>
      </div>
    </section>
  )
}
