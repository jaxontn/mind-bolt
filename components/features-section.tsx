import { Card } from "@/components/ui/card"
import { Bot, MessageSquare, Video, Sparkles, BookText, DollarSign } from "lucide-react"

const features = [
  {
    icon: DollarSign,
    title: "Affordable Subscriptions",
    description:
      "Access world-class education for less than your coffee budget. Choose from flexible monthly or annual plans that fit your lifestyle.",
  },
  {
    icon: Bot,
    title: "24/7 AI Tutors",
    description:
      "Get instant help from specialized AI tutors trained in every subject. Never wait for office hours—your personal tutor is always available.",
  },
  {
    icon: Video,
    title: "Live Clinic Sessions",
    description:
      "Join interactive group sessions to deep-dive into complex topics, ask questions, and collaborate with fellow learners in real-time.",
  },
  {
    icon: MessageSquare,
    title: "Specialized AI Agents",
    description:
      "Chat with expert AI agents for coding help, writing feedback, math tutoring, career advice, and more. Each agent specializes in different domains.",
  },
  {
    icon: BookText,
    title: "Complete Learning Ecosystem",
    description:
      "Lectures, tutorials, labs, assignments, exams, notes, and book references—everything you need in one place, without extra costs.",
  },
  {
    icon: Sparkles,
    title: "Unconventional Courses",
    description:
      "Master niche skills not offered by universities. From emerging technologies to specialized trades—learn what truly matters for your career.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="container px-4 py-24 md:py-32 md:px-6 mx-auto max-w-7xl">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Education reimagined for the modern learner</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            MindBolt combines cutting-edge AI with proven educational methods to deliver personalized learning
            experiences that actually work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:border-accent/50 transition-colors">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-balance">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
