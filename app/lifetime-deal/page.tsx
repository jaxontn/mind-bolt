import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import {
  Zap,
  Clock,
  CheckCircle2,
  XCircle,
  Star,
  TrendingUp,
  Users,
  Sparkles,
  ArrowRight,
  AlertCircle,
  Gift,
  Crown,
} from "lucide-react"

export default function LifetimeDealPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b bg-gradient-to-b from-background to-muted/20 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            {/* Urgency Banner */}
            <div className="mb-8 flex items-center justify-center gap-2 rounded-lg border border-orange-500/20 bg-orange-500/10 p-4 text-center">
              <AlertCircle className="h-5 w-5 text-orange-500" />
              <p className="text-sm font-semibold text-orange-500">
                Limited Time Offer: Only 47 Lifetime Deals Remaining
              </p>
            </div>

            <div className="mb-6 flex items-center justify-center gap-2">
              <Badge variant="outline" className="border-primary/50 bg-primary/10 text-primary">
                <Gift className="mr-1 h-3 w-3" />
                Lifetime Deal
              </Badge>
              <Badge variant="outline" className="border-orange-500/50 bg-orange-500/10 text-orange-500">
                <Clock className="mr-1 h-3 w-3" />
                Expires in 48 Hours
              </Badge>
            </div>

            <h1 className="mb-6 text-balance text-center text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Get Lifetime Access to{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                BrainBolt
              </span>{" "}
              for a One-Time Payment
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-balance text-center text-lg text-muted-foreground sm:text-xl">
              Pay once. Learn forever. No monthly fees. No recurring charges. Just unlimited access to world-class
              AI-powered education for life.
            </p>

            {/* Price Comparison */}
            <div className="mb-12 grid gap-6 md:grid-cols-2">
              {/* Regular Price */}
              <Card className="relative overflow-hidden border-2 border-muted p-6 opacity-60">
                <div className="absolute right-4 top-4">
                  <XCircle className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="mb-4">
                  <p className="text-sm font-medium text-muted-foreground">Regular Monthly Plan</p>
                </div>
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">$29</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Pay $348/year</p>
                  <p>Pay $3,480 over 10 years</p>
                  <p className="font-semibold">Ongoing commitment required</p>
                </div>
              </Card>

              {/* Lifetime Deal */}
              <Card className="relative overflow-hidden border-2 border-primary bg-gradient-to-br from-primary/5 to-cyan-500/5 p-6 shadow-lg">
                <div className="absolute right-4 top-4">
                  <Crown className="h-6 w-6 text-primary" />
                </div>
                <div className="mb-4 flex items-center gap-2">
                  <p className="text-sm font-bold text-primary">LIFETIME DEAL</p>
                  <Badge className="bg-primary text-primary-foreground">Save 96%</Badge>
                </div>
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-muted-foreground line-through">$3,480</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-primary">$147</span>
                    <span className="text-muted-foreground">one-time</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2 font-semibold">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Pay once, access forever
                  </p>
                  <p className="flex items-center gap-2 font-semibold">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    All future updates included
                  </p>
                  <p className="flex items-center gap-2 font-semibold">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    No recurring charges ever
                  </p>
                </div>
              </Card>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="group h-14 gap-2 px-8 text-lg">
                Claim Lifetime Deal Now
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <p className="text-sm text-muted-foreground">30-Day Money-Back Guarantee</p>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                <Users className="mr-2 inline h-4 w-4" />
                143 people claimed this deal in the last 24 hours
              </p>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="border-b px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Traditional Education is Broken...</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Universities trap you in a cycle of debt, outdated curricula, and rigid schedules. There has to be a
                better way.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-2 border-red-500/20 bg-red-500/5 p-6">
                <XCircle className="mb-4 h-8 w-8 text-red-500" />
                <h3 className="mb-3 text-xl font-bold">$100K+ in Student Debt</h3>
                <p className="text-muted-foreground">
                  The average college degree costs over $100,000 and takes 4-6 years to complete. You're paying for
                  buildings, sports teams, and administrative overhead—not education.
                </p>
              </Card>

              <Card className="border-2 border-red-500/20 bg-red-500/5 p-6">
                <XCircle className="mb-4 h-8 w-8 text-red-500" />
                <h3 className="mb-3 text-xl font-bold">Outdated Curriculum</h3>
                <p className="text-muted-foreground">
                  Universities teach from textbooks written years ago. By the time you graduate, the skills you learned
                  are already obsolete. The job market moves faster than academia can keep up.
                </p>
              </Card>

              <Card className="border-2 border-red-500/20 bg-red-500/5 p-6">
                <XCircle className="mb-4 h-8 w-8 text-red-500" />
                <h3 className="mb-3 text-xl font-bold">Rigid, One-Size-Fits-All</h3>
                <p className="text-muted-foreground">
                  You're forced to take classes you don't need, follow a fixed schedule, and learn at someone else's
                  pace. Want to study something unconventional? Too bad—it's not offered.
                </p>
              </Card>

              <Card className="border-2 border-red-500/20 bg-red-500/5 p-6">
                <XCircle className="mb-4 h-8 w-8 text-red-500" />
                <h3 className="mb-3 text-xl font-bold">Limited Access to Instructors</h3>
                <p className="text-muted-foreground">
                  Office hours are packed, professors are unavailable, and TAs don't have the answers. You're left
                  struggling alone, wasting precious time trying to figure things out.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="border-b bg-muted/20 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <Badge variant="outline" className="mb-4 border-primary/50 bg-primary/10 text-primary">
                <Sparkles className="mr-1 h-3 w-3" />
                The Solution
              </Badge>
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">BrainBolt Changes Everything</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                World-class AI-powered education, personalized to your goals, available 24/7, for a fraction of the
                cost.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-2 border-primary/20 bg-primary/5 p-6">
                <CheckCircle2 className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-3 text-xl font-bold">96% More Affordable</h3>
                <p className="text-muted-foreground">
                  Get lifetime access for less than a single college course. Save over $100,000 compared to traditional
                  universities.
                </p>
              </Card>

              <Card className="border-2 border-primary/20 bg-primary/5 p-6">
                <CheckCircle2 className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-3 text-xl font-bold">100% Personalized Curriculum</h3>
                <p className="text-muted-foreground">
                  AI creates custom syllabi based on YOUR goals, interests, and learning style. Study what matters to
                  you, not what a committee decided 10 years ago.
                </p>
              </Card>

              <Card className="border-2 border-primary/20 bg-primary/5 p-6">
                <CheckCircle2 className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-3 text-xl font-bold">24/7 AI Tutors</h3>
                <p className="text-muted-foreground">
                  Never wait for office hours again. Get instant help from specialized AI agents any time, any topic.
                  It's like having a world-class tutor on call 24/7.
                </p>
              </Card>

              <Card className="border-2 border-primary/20 bg-primary/5 p-6">
                <CheckCircle2 className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-3 text-xl font-bold">Learn Unconventional Skills</h3>
                <p className="text-muted-foreground">
                  Master niche, high-value skills that universities won't teach. From AI prompt engineering to Web3
                  development—if it's lucrative, we'll create a course for it.
                </p>
              </Card>

              <Card className="border-2 border-primary/20 bg-primary/5 p-6">
                <CheckCircle2 className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-3 text-xl font-bold">Complete Learning System</h3>
                <p className="text-muted-foreground">
                  Lectures, tutorials, labs, assignments, exams, notes, and book references—all generated and curated by
                  AI from proven sources.
                </p>
              </Card>

              <Card className="border-2 border-primary/20 bg-primary/5 p-6">
                <CheckCircle2 className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-3 text-xl font-bold">Learn at Your Own Pace</h3>
                <p className="text-muted-foreground">
                  No fixed schedules. No semesters. Start and finish when you want. Spend more time on difficult topics,
                  breeze through what you already know.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="border-b px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Here's Everything You Get with Lifetime Access</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Normally worth $3,480+ over 10 years. Today, yours for life at $147.
              </p>
            </div>

            <Card className="border-2 border-primary p-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold">Unlimited Custom Syllabi</p>
                      <p className="text-sm text-muted-foreground">Create as many personalized courses as you want</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold">24/7 Access to 20+ Specialized AI Tutors</p>
                      <p className="text-sm text-muted-foreground">Math, science, coding, business, and more</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold">Unlimited AI Tutoring Sessions</p>
                      <p className="text-sm text-muted-foreground">
                        Ask questions anytime, get instant detailed answers
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold">Complete Learning Materials</p>
                      <p className="text-sm text-muted-foreground">
                        Video lectures, notes, assignments, practice exams
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold">Project-Based Learning</p>
                      <p className="text-sm text-muted-foreground">Hands-on labs and real-world projects</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold">Virtual Clinic Sessions</p>
                      <p className="text-sm text-muted-foreground">Deep-dive problem-solving workshops</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold">Access to Unconventional Courses</p>
                      <p className="text-sm text-muted-foreground">Skills not taught in traditional universities</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold">Curated Resource Library</p>
                      <p className="text-sm text-muted-foreground">Books, articles, videos from proven sources</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold">Progress Tracking</p>
                      <p className="text-sm text-muted-foreground">Monitor your learning journey and achievements</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold">All Future Features & Updates</p>
                      <p className="text-sm text-muted-foreground">
                        Free access to all new courses and features forever
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold">Priority Support</p>
                      <p className="text-sm text-muted-foreground">Fast response times from our team</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold">Community Access</p>
                      <p className="text-sm text-muted-foreground">Connect with other learners worldwide</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-lg border-2 border-primary bg-primary/5 p-6 text-center">
                <p className="mb-2 text-2xl font-bold">Total Value: $3,480+</p>
                <p className="mb-4 text-lg text-muted-foreground">Your Lifetime Price Today:</p>
                <p className="mb-6 text-5xl font-bold text-primary">$147</p>
                <Button size="lg" className="h-14 gap-2 px-8 text-lg">
                  Get Lifetime Access Now
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Social Proof */}
        <section className="border-b bg-muted/20 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                Join 10,000+ Students Already Learning with BrainBolt
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="p-6">
                <div className="mb-4 flex items-center gap-1">
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                </div>
                <p className="mb-4 text-muted-foreground">
                  "I saved $80,000 by skipping college and learning with BrainBolt. The AI tutors are better than any
                  professor I've had, and I learned blockchain development—something no university near me offers."
                </p>
                <div>
                  <p className="font-semibold">Sarah Chen</p>
                  <p className="text-sm text-muted-foreground">Web3 Developer</p>
                </div>
              </Card>

              <Card className="p-6">
                <div className="mb-4 flex items-center gap-1">
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                </div>
                <p className="mb-4 text-muted-foreground">
                  "The lifetime deal is insane value. I've already created 15 custom courses for my career transition.
                  The clinic sessions with specialized AI agents helped me land a $120K job in 6 months."
                </p>
                <div>
                  <p className="font-semibold">Marcus Rodriguez</p>
                  <p className="text-sm text-muted-foreground">Data Scientist</p>
                </div>
              </Card>

              <Card className="p-6">
                <div className="mb-4 flex items-center gap-1">
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                </div>
                <p className="mb-4 text-muted-foreground">
                  "Best investment I've ever made. The 24/7 AI tutors are like having a genius friend who never sleeps.
                  I'm learning AI prompt engineering and copywriting—skills that are making me $10K/month freelancing."
                </p>
                <div>
                  <p className="font-semibold">Emma Thompson</p>
                  <p className="text-sm text-muted-foreground">Freelance AI Specialist</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="border-b px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">BrainBolt vs. Traditional University</h2>
            </div>

            <div className="overflow-hidden rounded-lg border">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="p-4 text-left font-semibold">Feature</th>
                    <th className="p-4 text-center font-semibold">Traditional University</th>
                    <th className="p-4 text-center font-semibold text-primary">BrainBolt</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-4 font-medium">Total Cost</td>
                    <td className="p-4 text-center">$100,000+</td>
                    <td className="p-4 text-center font-bold text-primary">$147 (lifetime)</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="p-4 font-medium">Duration</td>
                    <td className="p-4 text-center">4-6 years</td>
                    <td className="p-4 text-center font-bold text-primary">At your own pace</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Curriculum</td>
                    <td className="p-4 text-center">Fixed, outdated</td>
                    <td className="p-4 text-center font-bold text-primary">100% personalized</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="p-4 font-medium">Tutor Availability</td>
                    <td className="p-4 text-center">Limited office hours</td>
                    <td className="p-4 text-center font-bold text-primary">24/7 instant access</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Course Selection</td>
                    <td className="p-4 text-center">Limited catalog</td>
                    <td className="p-4 text-center font-bold text-primary">Unlimited topics</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="p-4 font-medium">Unconventional Skills</td>
                    <td className="p-4 text-center">
                      <XCircle className="mx-auto h-5 w-5 text-red-500" />
                    </td>
                    <td className="p-4 text-center">
                      <CheckCircle2 className="mx-auto h-5 w-5 text-primary" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Learn Anywhere</td>
                    <td className="p-4 text-center">
                      <XCircle className="mx-auto h-5 w-5 text-red-500" />
                    </td>
                    <td className="p-4 text-center">
                      <CheckCircle2 className="mx-auto h-5 w-5 text-primary" />
                    </td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="p-4 font-medium">Instant Feedback</td>
                    <td className="p-4 text-center">
                      <XCircle className="mx-auto h-5 w-5 text-red-500" />
                    </td>
                    <td className="p-4 text-center">
                      <CheckCircle2 className="mx-auto h-5 w-5 text-primary" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b bg-muted/20 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="mb-2 text-lg font-bold">What exactly does "lifetime access" mean?</h3>
                <p className="text-muted-foreground">
                  Pay once, access forever. No monthly fees, no renewals, no hidden costs. You'll have unlimited access
                  to all current and future features for as long as BrainBolt exists.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-2 text-lg font-bold">Is this really better than a university degree?</h3>
                <p className="text-muted-foreground">
                  For most people, yes. You'll learn practical, up-to-date skills tailored to your goals without the
                  debt, time commitment, or rigid structure. While we can't provide an accredited degree, we provide
                  something more valuable: real-world skills that employers actually want.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-2 text-lg font-bold">How good are the AI tutors really?</h3>
                <p className="text-muted-foreground">
                  Our AI tutors are trained on millions of educational resources and specialized for different subjects.
                  They provide instant, detailed explanations, never get tired, and adapt to your learning style. Many
                  users say they're better than their college professors.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-2 text-lg font-bold">What if I'm not satisfied?</h3>
                <p className="text-muted-foreground">
                  We offer a 30-day money-back guarantee. If you're not completely satisfied, just email us for a full
                  refund. No questions asked.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-2 text-lg font-bold">Why is this so cheap compared to university?</h3>
                <p className="text-muted-foreground">
                  We don't have massive campuses, sports teams, or bloated administration. Our AI-powered approach
                  scales infinitely without increasing costs. We're passing those savings directly to you.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-2 text-lg font-bold">Will the lifetime deal go away?</h3>
                <p className="text-muted-foreground">
                  Yes. This is a limited-time offer to reward early adopters. Once we hit our cap or the timer expires,
                  the lifetime deal will be gone forever and we'll return to monthly pricing.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="mb-6 border-orange-500/50 bg-orange-500/10 text-orange-500">
              <Clock className="mr-1 h-3 w-3" />
              Limited Time Only
            </Badge>

            <h2 className="mb-6 text-4xl font-bold sm:text-5xl">Don't Let This Opportunity Slip Away</h2>

            <p className="mb-8 text-xl text-muted-foreground">
              The lifetime deal won't last forever. Make the smart choice today and invest in your future for less than
              the cost of a single college course.
            </p>

            <div className="mb-8 rounded-lg border-2 border-primary bg-gradient-to-br from-primary/10 to-cyan-500/10 p-8">
              <div className="mb-4 flex items-center justify-center gap-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Regular Price</p>
                  <p className="text-2xl font-bold line-through">$3,480</p>
                </div>
                <ArrowRight className="h-8 w-8 text-muted-foreground" />
                <div className="text-center">
                  <p className="text-sm text-primary">Lifetime Price</p>
                  <p className="text-5xl font-bold text-primary">$147</p>
                </div>
              </div>

              <div className="mb-6">
                <Badge className="bg-primary text-primary-foreground">Save $3,333 (96% OFF)</Badge>
              </div>

              <Button size="lg" className="h-16 gap-2 px-12 text-xl">
                <Zap className="h-6 w-6" />
                Claim Your Lifetime Deal Now
              </Button>

              <p className="mt-4 text-sm text-muted-foreground">
                30-Day Money-Back Guarantee • Secure Payment • Instant Access
              </p>
            </div>

            <div className="space-y-3 text-center text-sm text-muted-foreground">
              <p className="flex items-center justify-center gap-2">
                <TrendingUp className="h-4 w-4 text-orange-500" />
                47 lifetime deals remaining at this price
              </p>
              <p className="flex items-center justify-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                143 people claimed this deal in the last 24 hours
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
