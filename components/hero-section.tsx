import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="container px-4 py-24 md:py-32 md:px-6 mx-auto max-w-7xl">
      <div className="mx-auto max-w-5xl text-center space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
          <Sparkles className="h-4 w-4 text-accent" />
          <span>University-Level Education at 1/10th the Cost</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-tight">
          World-class education
          <br />
          <span className="text-foreground/80">for everyone</span>
        </h1>

        <p className="mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed text-pretty">
          Break free from expensive universities. Get personalized learning paths, AI tutors, live clinic sessions, and
          specialized AI agents—all for the price of a streaming subscription.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 h-12">
            Start from $29/month
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base px-8 h-12 border-border text-foreground hover:bg-secondary bg-transparent"
          >
            Watch Demo
          </Button>
        </div>

        <div className="pt-4">
          <p className="text-sm text-muted-foreground">
            <span className="line-through">$50,000/year</span> for traditional university →{" "}
            <span className="text-accent font-semibold">$348/year</span> with MindBolt
          </p>
        </div>

        <div className="pt-8">
          <div className="relative mx-auto max-w-4xl rounded-xl border border-border bg-card/50 p-2 backdrop-blur">
            <div className="aspect-video rounded-lg bg-secondary/50 flex items-center justify-center overflow-hidden">
              <video
                src="/demo/1114.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
