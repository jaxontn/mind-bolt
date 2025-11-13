import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for exploring new skills",
    features: [
      "Access to 5,000+ courses",
      "1 AI tutor available 24/7",
      "Basic clinic sessions (2/month)",
      "Comprehensive learning materials",
      "Community forum access",
      "Progress tracking & certificates",
    ],
    cta: "Start Learning",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$79",
    period: "/month",
    description: "For serious learners and career changers",
    features: [
      "Access to 10,000+ courses",
      "5 specialized AI tutors & agents",
      "Unlimited clinic sessions",
      "Priority support & mentorship",
      "Custom syllabus generation",
      "Advanced analytics & insights",
      "Job placement assistance",
      "Portfolio & project reviews",
    ],
    cta: "Go Pro",
    highlighted: true,
  },
  {
    name: "Lifetime",
    price: "$999",
    period: "one-time",
    description: "Invest in yourself forever",
    features: [
      "Unlimited lifetime access",
      "All Pro features included",
      "Exclusive AI agent library",
      "Personal learning coach",
      "Early access to new features",
      "Lifetime curriculum updates",
      "VIP clinic sessions",
      "Legacy pricing guarantee",
    ],
    cta: "Get Lifetime Access",
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="container px-4 py-24 md:py-32 md:px-6 bg-secondary/20 mx-auto max-w-7xl">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Education that fits your budget</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Choose a plan that works for you. All plans include AI tutors, personalized learning paths, and
            comprehensive materials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 space-y-6 ${
                plan.highlighted ? "border-accent border-2 shadow-lg shadow-accent/20 bg-card" : "border-border bg-card"
              }`}
            >
              {plan.highlighted && (
                <div className="text-center">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-accent/10 text-accent rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="space-y-2">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              <Button
                size="lg"
                className={`w-full ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {plan.cta}
              </Button>

              <div className="space-y-3 pt-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center pt-8">
          <p className="text-sm text-muted-foreground">
            All plans come with a 14-day money-back guarantee. Cancel anytime, no questions asked.
          </p>
        </div>
      </div>
    </section>
  )
}
