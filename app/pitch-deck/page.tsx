import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  GraduationCap,
  DollarSign,
  Users,
  TrendingUp,
  Target,
  Rocket,
  Calendar,
  Sparkles,
  Brain,
  MessageSquare,
  BookOpen,
  Award,
  ArrowRight,
  CheckCircle2,
  Globe,
  Zap,
  Code,
  MapPin,
  Clock,
} from "lucide-react"

export default function PitchDeckPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-background to-muted/20 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-background/50 px-4 py-2 text-sm backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-blue-500" />
              <span className="font-medium">DiVA Cohort 5 Application</span>
            </div>
            <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight md:text-7xl">BrainBolt Pitch Deck</h1>
            <p className="mx-auto mb-8 max-w-2xl text-balance text-xl text-muted-foreground md:text-2xl">
              Democratizing Education Through AI-Powered Personalized Learning
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="gap-2">
                <Users className="h-5 w-5" />
                Contact Us
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                Download PDF
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="border-b px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">Our Mission</h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-blue-500" />
          </div>
          <Card className="border-2 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 md:p-12">
            <div className="flex flex-col items-center gap-6 md:flex-row">
              <div className="flex-shrink-0">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/20">
                  <GraduationCap className="h-10 w-10 text-blue-500" />
                </div>
              </div>
              <div>
                <p className="text-pretty text-lg leading-relaxed md:text-xl">
                  BrainBolt is revolutionizing education by making world-class, personalized learning accessible to
                  everyone at a fraction of traditional costs. We leverage AI to create custom curricula tailored to
                  each student's goals, learning style, and pace—offering courses and specializations that traditional
                  universities can't or won't provide. Our mission is to democratize education, empowering individuals
                  to master lucrative, unconventional skills and achieve their career dreams without the burden of
                  student debt.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="border-b px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">The Problem</h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-red-500" />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-2 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20">
                <DollarSign className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Unaffordable Education</h3>
              <p className="text-muted-foreground leading-relaxed">
                The average cost of a 4-year degree in the US is <strong>$120,000+</strong>, leaving students with
                crippling debt. Many can't afford quality education.
              </p>
            </Card>
            <Card className="border-2 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20">
                <BookOpen className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="mb-3 text-xl font-bold">One-Size-Fits-All</h3>
              <p className="text-muted-foreground leading-relaxed">
                Traditional universities offer rigid curricula that don't adapt to individual learning styles, career
                goals, or the rapidly changing job market.
              </p>
            </Card>
            <Card className="border-2 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20">
                <Target className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Limited Course Options</h3>
              <p className="text-muted-foreground leading-relaxed">
                Universities can't offer niche, specialized, or emerging field courses due to low demand—blocking access
                to lucrative career paths.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="border-b px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">Our Solution</h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-green-500" />
          </div>
          <div className="mb-12">
            <Card className="border-2 bg-gradient-to-br from-green-500/10 to-blue-500/10 p-8">
              <p className="text-center text-lg leading-relaxed md:text-xl">
                BrainBolt is an AI-powered learning platform that creates <strong>fully customized syllabi</strong>{" "}
                based on each student's requirements, career goals, and learning preferences. We offer unlimited access
                to specialized courses, AI tutors, clinic sessions, and comprehensive learning materials—all for an
                affordable monthly subscription starting at just <strong>$29/month</strong>.
              </p>
            </Card>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                <Brain className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="mb-3 text-lg font-bold">Custom Curricula</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI generates personalized syllabi with lectures, tutorials, labs, assignments, and exams tailored to
                your goals.
              </p>
            </Card>
            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                <MessageSquare className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="mb-3 text-lg font-bold">AI Tutors & Agents</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                24/7 access to specialized AI tutors across domains—coding, business, design, science, and more.
              </p>
            </Card>
            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                <Award className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="mb-3 text-lg font-bold">Unconventional Courses</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Access niche, emerging, and specialized courses not offered by traditional universities.
              </p>
            </Card>
            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                <Zap className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="mb-3 text-lg font-bold">Clinic Sessions</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Live problem-solving sessions and personalized guidance to accelerate learning.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-b px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">How It Works</h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-blue-500" />
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="relative">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20 text-2xl font-bold text-blue-500">
                1
              </div>
              <h3 className="mb-2 text-xl font-bold">Define Your Goals</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tell us what you want to learn, your career objectives, and your learning preferences.
              </p>
            </div>
            <div className="relative">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20 text-2xl font-bold text-blue-500">
                2
              </div>
              <h3 className="mb-2 text-xl font-bold">AI Creates Syllabus</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our AI analyzes thousands of sources to build a custom curriculum perfectly suited to you.
              </p>
            </div>
            <div className="relative">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20 text-2xl font-bold text-blue-500">
                3
              </div>
              <h3 className="mb-2 text-xl font-bold">Learn & Practice</h3>
              <p className="text-muted-foreground leading-relaxed">
                Access lectures, tutorials, labs, and work with AI tutors for personalized guidance.
              </p>
            </div>
            <div className="relative">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20 text-2xl font-bold text-blue-500">
                4
              </div>
              <h3 className="mb-2 text-xl font-bold">Master & Achieve</h3>
              <p className="text-muted-foreground leading-relaxed">
                Complete assessments, earn certifications, and achieve your career goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Demonstration */}
      <section className="border-b bg-gradient-to-b from-background to-blue-500/5 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">Solution Demonstration</h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-blue-500" />
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              See how BrainBolt transforms traditional learning into a personalized, AI-powered experience
            </p>
          </div>

          <div className="space-y-12">
            {/* Step 1: Onboarding & Goal Setting */}
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-xl font-bold text-white">
                  1
                </div>
                <h3 className="mb-4 text-3xl font-bold">Smart Onboarding</h3>
                <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
                  Students answer a few simple questions about their learning goals, career aspirations, preferred
                  learning style, and time commitment.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>"I want to become a full-stack web developer"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>"I prefer hands-on projects over theory"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>"I can dedicate 2 hours daily"</span>
                  </li>
                </ul>
              </div>
              <Card className="overflow-hidden border-2">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8">
                  <div className="rounded-lg border bg-background p-6 shadow-xl">
                    <div className="mb-4 text-sm font-medium text-muted-foreground">Step 1 of 4</div>
                    <h4 className="mb-4 text-xl font-bold">What do you want to learn?</h4>
                    <div className="mb-4 rounded-lg border bg-muted/50 p-3 text-sm">
                      Full-stack web development with React and Node.js
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-lg border bg-background p-3 text-center text-sm">Beginner</div>
                      <div className="rounded-lg border-2 border-blue-500 bg-blue-500/10 p-3 text-center text-sm font-medium">
                        Intermediate
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Step 2: AI Syllabus Generation */}
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="order-2 overflow-hidden border-2 md:order-1">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8">
                  <div className="rounded-lg border bg-background p-6 shadow-xl">
                    <div className="mb-4 flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-purple-500" />
                      <span className="text-sm font-medium text-purple-500">AI Generating Your Syllabus...</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                          <div className="h-full w-full animate-pulse bg-gradient-to-r from-blue-500 to-purple-500" />
                        </div>
                        <span className="text-xs text-muted-foreground">95%</span>
                      </div>
                      <div className="space-y-2 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span>Analyzed 1,247 online resources</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span>Customized 32 learning modules</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Sparkles className="h-4 w-4 text-purple-500" />
                          <span>Creating personalized curriculum...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              <div className="order-1 flex flex-col justify-center md:order-2">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-500 text-xl font-bold text-white">
                  2
                </div>
                <h3 className="mb-4 text-3xl font-bold">AI-Powered Curriculum</h3>
                <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
                  Our AI analyzes thousands of proven sources—documentation, courses, tutorials, and industry best
                  practices—to create a fully customized syllabus tailored to your goals.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border bg-muted/50 p-4">
                    <div className="mb-1 text-2xl font-bold text-blue-500">1,200+</div>
                    <div className="text-sm text-muted-foreground">Resources Analyzed</div>
                  </div>
                  <div className="rounded-lg border bg-muted/50 p-4">
                    <div className="mb-1 text-2xl font-bold text-green-500">{"<"}30s</div>
                    <div className="text-sm text-muted-foreground">Generation Time</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Learning Experience */}
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-xl font-bold text-white">
                  3
                </div>
                <h3 className="mb-4 text-3xl font-bold">Comprehensive Learning</h3>
                <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
                  Access your personalized curriculum with lectures, tutorials, hands-on labs, assignments, and
                  assessments—all in one platform.
                </p>
                <div className="grid gap-3">
                  <Card className="flex items-center gap-3 border p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20">
                      <BookOpen className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <div className="font-semibold">Video Lectures</div>
                      <div className="text-sm text-muted-foreground">12 modules • 18 hours</div>
                    </div>
                  </Card>
                  <Card className="flex items-center gap-3 border p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/20">
                      <Code className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <div className="font-semibold">Hands-on Labs</div>
                      <div className="text-sm text-muted-foreground">24 projects • 36 hours</div>
                    </div>
                  </Card>
                </div>
              </div>
              <Card className="overflow-hidden border-2">
                <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 p-8">
                  <div className="rounded-lg border bg-background p-6 shadow-xl">
                    <div className="mb-4 flex items-center justify-between">
                      <h4 className="font-bold">Module 3: React Fundamentals</h4>
                      <div className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-500">
                        In Progress
                      </div>
                    </div>
                    <div className="mb-4 space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-muted-foreground line-through">Components & Props</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="h-4 w-4 rounded-full border-2 border-blue-500" />
                        <span className="font-medium">State & Lifecycle</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="h-4 w-4 rounded-full border-2 border-muted" />
                        <span className="text-muted-foreground">Hooks Deep Dive</span>
                      </div>
                    </div>
                    <div className="rounded-lg bg-blue-500/10 p-3 text-sm">
                      <div className="mb-1 flex items-center gap-2 font-medium text-blue-500">
                        <Zap className="h-4 w-4" />
                        Current Task
                      </div>
                      <div className="text-muted-foreground">Build a counter app using useState hook</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Step 4: AI Tutor Support */}
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="order-2 overflow-hidden border-2 md:order-1">
                <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 p-8">
                  <div className="rounded-lg border bg-background shadow-xl">
                    <div className="border-b p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white">
                          <Brain className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-semibold">CodeMentor AI</div>
                          <div className="text-xs text-green-500">● Online</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3 p-4">
                      <div className="rounded-lg bg-muted p-3 text-sm">
                        How do I pass data between sibling components in React?
                      </div>
                      <div className="rounded-lg border bg-blue-500/10 p-3 text-sm">
                        <p className="mb-2">Great question! Here are 3 common approaches:</p>
                        <ol className="list-decimal space-y-1 pl-4 text-xs text-muted-foreground">
                          <li>Lift state up to common parent</li>
                          <li>Use Context API for global state</li>
                          <li>Try a state management library like Redux</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              <div className="order-1 flex flex-col justify-center md:order-2">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-xl font-bold text-white">
                  4
                </div>
                <h3 className="mb-4 text-3xl font-bold">24/7 AI Tutor Support</h3>
                <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
                  Get instant help from specialized AI tutors whenever you're stuck. Ask questions, get code reviews,
                  and receive personalized guidance throughout your learning journey.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="rounded-full border bg-background px-4 py-2 text-sm">CodeMentor AI</div>
                  <div className="rounded-full border bg-background px-4 py-2 text-sm">DesignGuru AI</div>
                  <div className="rounded-full border bg-background px-4 py-2 text-sm">DataScience AI</div>
                  <div className="rounded-full border bg-background px-4 py-2 text-sm">+5 more</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="border-b px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">Business Model</h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-green-500" />
          </div>
          <div className="mb-8 grid gap-6 md:grid-cols-3">
            <Card className="border-2 p-6">
              <div className="mb-4">
                <div className="mb-2 text-sm font-medium text-muted-foreground">Starter</div>
                <div className="mb-4 text-4xl font-bold">$29</div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">5 custom courses/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">AI tutor access</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">Basic materials</span>
                </li>
              </ul>
            </Card>
            <Card className="border-2 border-blue-500 p-6 shadow-lg shadow-blue-500/20">
              <div className="mb-4">
                <div className="mb-2 text-sm font-medium text-blue-500">Pro (Most Popular)</div>
                <div className="mb-4 text-4xl font-bold">$79</div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">Unlimited courses</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">Priority AI support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">4 clinic sessions/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">Advanced materials</span>
                </li>
              </ul>
            </Card>
            <Card className="border-2 p-6">
              <div className="mb-4">
                <div className="mb-2 text-sm font-medium text-muted-foreground">Enterprise</div>
                <div className="mb-4 text-4xl font-bold">$149</div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">Everything in Pro</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">Unlimited clinic sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">Career coaching</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">Team collaboration</span>
                </li>
              </ul>
            </Card>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-2 p-6">
              <h3 className="mb-4 text-xl font-bold">Revenue Streams</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-blue-500" />
                  <span>Subscription tiers (B2C)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-blue-500" />
                  <span>Enterprise plans (B2B)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-blue-500" />
                  <span>Lifetime deals & promotions</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-blue-500" />
                  <span>Certification programs</span>
                </li>
              </ul>
            </Card>
            <Card className="border-2 p-6">
              <h3 className="mb-4 text-xl font-bold">Unit Economics</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Avg. Revenue per User</span>
                  <span className="font-bold">$948/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Customer Acquisition Cost</span>
                  <span className="font-bold">$85</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">LTV:CAC Ratio</span>
                  <span className="font-bold text-green-500">11:1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Gross Margin</span>
                  <span className="font-bold text-green-500">87%</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Go-to-Market Strategy */}
      <section className="border-b px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">Go-to-Market Strategy</h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-purple-500" />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                <Globe className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="mb-3 text-lg font-bold">Content Marketing</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                SEO-optimized blog posts, YouTube tutorials, and social media showcasing success stories and free
                educational content.
              </p>
            </Card>
            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                <Users className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="mb-3 text-lg font-bold">Community Building</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Discord, Reddit, and online communities where learners share experiences and support each other's
                journeys.
              </p>
            </Card>
            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                <TrendingUp className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="mb-3 text-lg font-bold">Paid Acquisition</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Targeted Facebook, Instagram, and TikTok ads focused on career changers, students, and lifelong
                learners.
              </p>
            </Card>
            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                <Award className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="mb-3 text-lg font-bold">Partnerships</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Collaborate with bootcamps, influencers, and career coaches to reach motivated learners.
              </p>
            </Card>
            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                <Rocket className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="mb-3 text-lg font-bold">Product Hunt Launch</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Launch on Product Hunt and HackerNews to generate buzz and attract early adopters from tech communities.
              </p>
            </Card>
            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                <DollarSign className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="mb-3 text-lg font-bold">Freemium Model</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Offer 1 free custom course to showcase value, converting free users to paid with upgrade prompts.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* MVP/Prototype Status */}
      <section className="border-b px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">MVP & Prototype Status</h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-green-500" />
          </div>
          <Card className="border-2 bg-gradient-to-br from-green-500/10 to-blue-500/10 p-8">
            <div className="mb-8 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-500/20 px-6 py-3">
                <CheckCircle2 className="h-6 w-6 text-green-500" />
                <span className="text-lg font-semibold text-green-500">Working Prototype Ready</span>
              </div>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
                BrainBolt has a fully functional MVP with core features implemented and tested. Our platform is
                currently in beta testing with early users providing valuable feedback for continuous improvement.
              </p>
            </div>
          </Card>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                <Code className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="mb-3 text-lg font-bold">Core Platform</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                  <span>AI-powered syllabus generation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                  <span>User onboarding & goal setting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                  <span>Course content delivery system</span>
                </li>
              </ul>
            </Card>
            <Card className="border-2 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                <Brain className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="mb-3 text-lg font-bold">AI Features</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                  <span>8 specialized AI tutor agents</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                  <span>Real-time chat assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                  <span>Personalized learning paths</span>
                </li>
              </ul>
            </Card>
            <Card className="border-2 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                <Zap className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="mb-3 text-lg font-bold">Beta Testing</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                  <span>Active beta user group</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                  <span>Continuous feedback collection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                  <span>Iterative improvements</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Sarawak Market Opportunity */}
      <section className="border-b bg-gradient-to-b from-background to-muted/20 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">Sarawak Market Opportunity</h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-orange-500" />
          </div>
          <div className="mb-8">
            <Card className="border-2 bg-gradient-to-br from-orange-500/10 to-purple-500/10 p-8">
              <div className="flex flex-col items-center gap-6 md:flex-row">
                <div className="flex-shrink-0">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-500/20">
                    <MapPin className="h-10 w-10 text-orange-500" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-3 text-2xl font-bold">Why Sarawak?</h3>
                  <p className="text-pretty text-lg leading-relaxed">
                    Sarawak presents a unique opportunity for BrainBolt to establish a strong foothold in Southeast
                    Asia. With growing digital infrastructure, government support for tech innovation, and an increasing
                    demand for affordable quality education, Sarawak is the ideal launchpad for our regional expansion
                    strategy.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                <Users className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="mb-3 text-lg font-bold">Target Demographics</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                University students, young professionals, and career changers in Sarawak seeking affordable, flexible
                learning options beyond traditional institutions.
              </p>
            </Card>
            <Card className="border-2 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                <Globe className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="mb-3 text-lg font-bold">Regional Hub</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Establish Sarawak office as Southeast Asia headquarters, enabling expansion into Brunei, Sabah, and
                broader ASEAN markets within 12 months.
              </p>
            </Card>
            <Card className="border-2 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                <Award className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="mb-3 text-lg font-bold">Local Partnerships</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Partner with Sarawak universities, tech communities, and training centers to build brand awareness and
                credibility in the local market.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="border-b px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">12-24 Month Roadmap</h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-blue-500" />
          </div>
          <div className="space-y-6">
            <Card className="border-2 border-blue-500 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                  <Calendar className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-bold">Q4 2025 - Platform Enhancement</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-blue-500" />
                      <span>Launch mobile apps (iOS & Android)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-blue-500" />
                      <span>Add video lecture generation with AI voices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-blue-500" />
                      <span>Introduce peer-to-peer learning communities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
            <Card className="border-2 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-purple-500/20">
                  <Calendar className="h-6 w-6 text-purple-500" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-bold">Q1 2026 - Market Expansion</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                      <span>Launch B2B enterprise plans for companies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                      <span>Expand to 10 additional languages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                      <span>Partner with 50+ career bootcamps</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
            <Card className="border-2 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-500/20">
                  <Calendar className="h-6 w-6 text-green-500" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-bold">Q2 2026 - Advanced Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-green-500" />
                      <span>Launch VR/AR learning experiences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-green-500" />
                      <span>Add AI-powered career matching & job board</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-green-500" />
                      <span>Introduce gamification & achievement system</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
            <Card className="border-2 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-500/20">
                  <Calendar className="h-6 w-6 text-orange-500" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-bold">Q3-Q4 2026 - Scale & Growth</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-orange-500" />
                      <span>Reach 100K active users</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-orange-500" />
                      <span>Launch accredited certification programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-orange-500" />
                      <span>Establish presence in 5 ASEAN countries</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-b px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">Our Team</h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-blue-500" />
          </div>
          <div className="mb-8 grid gap-6 md:grid-cols-3">
            <Card className="border-2 p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-3xl font-bold text-white">
                  JD
                </div>
              </div>
              <h3 className="mb-1 text-xl font-bold">John Doe</h3>
              <div className="mb-3 text-sm text-blue-500">CEO & Co-Founder</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Former Head of Product at EdTech unicorn. Stanford MBA. 10+ years in education technology.
              </p>
            </Card>
            <Card className="border-2 p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-3xl font-bold text-white">
                  JS
                </div>
              </div>
              <h3 className="mb-1 text-xl font-bold">Jane Smith</h3>
              <div className="mb-3 text-sm text-purple-500">CTO & Co-Founder</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ex-Google AI Research. MIT Computer Science PhD. Expert in ML and personalized learning systems.
              </p>
            </Card>
            <Card className="border-2 p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-teal-500 text-3xl font-bold text-white">
                  MJ
                </div>
              </div>
              <h3 className="mb-1 text-xl font-bold">Mike Johnson</h3>
              <div className="mb-3 text-sm text-green-500">Head of Growth</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Scaled 2 startups to $10M ARR. Harvard Business School. Data-driven growth marketing expert.
              </p>
            </Card>
          </div>
          <Card className="border-2 bg-muted/30 p-6">
            <h3 className="mb-4 text-center text-xl font-bold">Advisors & Supporters</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="rounded-lg bg-background px-4 py-2 text-sm">Prof. Sarah Williams - MIT Education</div>
              <div className="rounded-lg bg-background px-4 py-2 text-sm">David Chen - EdTech Consultant</div>
              <div className="rounded-lg bg-background px-4 py-2 text-sm">Dr. Lisa Park - AI Research</div>
            </div>
          </Card>
        </div>
      </section>

      {/* Why DiVA & Programme Commitment */}
      <section className="border-b bg-gradient-to-b from-background to-muted/20 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">Why DiVA Cohort 5?</h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-blue-500" />
          </div>
          <div className="mb-8">
            <Card className="border-2 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8">
              <p className="text-center text-lg leading-relaxed md:text-xl">
                DiVA represents a unique opportunity to refine our product with expert guidance, tap into Sarawak's
                growing tech ecosystem, and establish a strong foundation for Southeast Asian expansion. We're seeking
                mentorship, network access, and strategic insights to accelerate our growth trajectory.
              </p>
            </Card>
          </div>
          <div className="mb-12 grid gap-6 md:grid-cols-2">
            <Card className="border-2 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                <Target className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="mb-4 text-xl font-bold">What We Hope to Gain</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">Mentorship from experienced EdTech and AI industry leaders</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">Access to local and regional network of partners and investors</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">Product refinement feedback to optimize user experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">Market validation insights for Sarawak and ASEAN markets</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">Strategic guidance on scaling and business development</span>
                </li>
              </ul>
            </Card>
            <Card className="border-2 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                <Rocket className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="mb-4 text-xl font-bold">Accelerator Goals</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">Establish physical presence in Sarawak within 6 months</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">Onboard 500+ Sarawak users during the programme</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">Build 3-5 strategic partnerships with local institutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">Refine product-market fit for Southeast Asian learners</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm">Prepare for Series A fundraising by end of programme</span>
                </li>
              </ul>
            </Card>
          </div>
          <Card className="border-2 border-green-500 bg-gradient-to-br from-green-500/10 to-blue-500/10 p-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
                  <Clock className="h-8 w-8 text-green-500" />
                </div>
              </div>
              <div>
                <h3 className="mb-3 text-2xl font-bold">Programme Commitment</h3>
                <p className="mb-4 text-lg leading-relaxed">
                  Our founding team is fully committed to the 6-month DiVA programme with weekly session attendance. We
                  have allocated dedicated time and resources to ensure maximum engagement, rapid iteration, and
                  successful programme completion.
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border bg-background/50 p-4">
                    <div className="mb-1 text-2xl font-bold text-blue-500">100%</div>
                    <div className="text-sm text-muted-foreground">Team Availability</div>
                  </div>
                  <div className="rounded-lg border bg-background/50 p-4">
                    <div className="mb-1 text-2xl font-bold text-green-500">Weekly</div>
                    <div className="text-sm text-muted-foreground">Session Attendance</div>
                  </div>
                  <div className="rounded-lg border bg-background/50 p-4">
                    <div className="mb-1 text-2xl font-bold text-purple-500">6 Months</div>
                    <div className="text-sm text-muted-foreground">Full Commitment</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t bg-muted/30 px-6 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Ready to Transform Education Together?</h2>
          <p className="mb-6 text-lg text-muted-foreground">
            Join us in making quality education accessible and affordable for everyone in Southeast Asia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="gap-2">
              Contact Us
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent">
              <Zap className="h-5 w-5" />
              Try BrainBolt Platform
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
