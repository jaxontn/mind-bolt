import { Card } from "@/components/ui/card"
import { MessageSquare, Sparkles, BookOpen, Rocket } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Share Your Goals",
    description:
      "Tell us what you want to learn, your current level, and your career aspirations. The more specific, the better.",
  },
  {
    icon: Sparkles,
    step: "02",
    title: "AI Creates Your Path",
    description:
      "Our AI analyzes thousands of resources to build a custom syllabus perfectly tailored to your unique needs and learning style.",
  },
  {
    icon: BookOpen,
    step: "03",
    title: "Start Learning",
    description:
      "Access lectures, tutorials, labs, assignments, and comprehensive materials. Learn at your own pace with full flexibility.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Master & Advance",
    description:
      "Complete assessments, earn certifications, and track your progress as you build valuable skills for your career.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-card/30 border-y border-border">
      <div className="container px-4 py-24 md:py-32 md:px-6 mx-auto max-w-7xl">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Start learning in minutes</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
              Getting started with MindBolt is simple. Our AI handles the complexity so you can focus on what
              matters—learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-border relative overflow-hidden group hover:border-accent/50 transition-colors"
              >
                <div className="absolute top-4 right-4 text-7xl font-bold text-muted/5 group-hover:text-accent/5 transition-colors">
                  {step.step}
                </div>
                <div className="relative space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                    <step.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold text-balance">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
