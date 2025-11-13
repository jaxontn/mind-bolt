"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Zap,
  Home,
  BookOpen,
  MessageSquare,
  BarChart3,
  User,
  ChevronLeft,
  ChevronRight,
  Target,
  Award,
  Flame,
  Star,
  Trophy,
  Brain,
  Play,
  FileText,
  FlaskConical,
  ClipboardList,
  HelpCircle,
  BookMarked,
  ExternalLink,
  Clock,
  CheckCircle2,
  Circle,
  TrendingUp,
  Bell,
  Settings,
  Lock,
  LogOut,
  Send,
  Sparkles,
  Code,
  Lightbulb,
  Rocket,
  Palette,
  LineChart,
  DollarSign,
  Music,
} from "lucide-react"

// Mock data
const MOCK_DATA = {
  user: {
    name: "Alex Rivera",
    email: "alex.rivera@brainbolt.ai",
    avatar: "AR",
    currentSemester: "Semester 2, 2025",
    subscription: "Pro Plan",
  },
  semesters: [
    {
      id: 1,
      name: "Semester 1, 2025",
      status: "completed" as const,
      courses: 4,
      gpa: 3.8,
    },
    {
      id: 2,
      name: "Semester 2, 2025",
      status: "active" as const,
      courses: 5,
      gpa: 0,
    },
  ],
  courses: [
    {
      id: 1,
      title: "Advanced Machine Learning",
      code: "ML-401",
      semester: 2,
      instructor: "AI Professor: Dr. Neural",
      progress: 68,
      grade: "A-",
      color: "from-blue-500/20 to-blue-600/5",
      units: 12,
      completedUnits: 8,
      nextSession: "Tomorrow, 2:00 PM",
      description: "Deep dive into neural networks, CNNs, RNNs, and transformer architectures",
    },
    {
      id: 2,
      title: "Quantum Computing Fundamentals",
      code: "QC-301",
      semester: 2,
      instructor: "AI Professor: Dr. Quantum",
      progress: 45,
      grade: "B+",
      color: "from-purple-500/20 to-purple-600/5",
      units: 10,
      completedUnits: 5,
      nextSession: "Friday, 10:00 AM",
      description: "Explore qubits, quantum gates, and quantum algorithms for real-world applications",
    },
    {
      id: 3,
      title: "Advanced React & Next.js",
      code: "WEB-402",
      semester: 2,
      instructor: "AI Professor: CodeMentor",
      progress: 82,
      grade: "A",
      color: "from-cyan-500/20 to-cyan-600/5",
      units: 8,
      completedUnits: 7,
      nextSession: "Wednesday, 4:00 PM",
      description: "Master React patterns, hooks, server components, and Next.js 15 features",
    },
    {
      id: 4,
      title: "Blockchain & Web3 Development",
      code: "BC-350",
      semester: 2,
      instructor: "AI Professor: BlockchainGuru",
      progress: 30,
      grade: "B",
      color: "from-amber-500/20 to-amber-600/5",
      units: 15,
      completedUnits: 4,
      nextSession: "Thursday, 3:00 PM",
      description: "Build decentralized applications with Solidity, smart contracts, and DApps",
    },
    {
      id: 5,
      title: "AI-Driven Music Production",
      code: "MUS-280",
      semester: 2,
      instructor: "AI Professor: SoundMaster",
      progress: 55,
      grade: "A-",
      color: "from-pink-500/20 to-pink-600/5",
      units: 6,
      completedUnits: 3,
      nextSession: "Monday, 6:00 PM",
      description: "Create music using AI tools, generative models, and audio synthesis",
    },
  ],
  aiAgents: [
    {
      id: 1,
      name: "Dr. Neural",
      specialty: "Machine Learning & AI",
      avatar: Brain,
      color: "from-blue-500 to-blue-600",
      description: "Expert in neural networks, deep learning, and AI algorithms",
      availability: "online",
    },
    {
      id: 2,
      name: "Dr. Quantum",
      specialty: "Quantum Computing",
      avatar: Sparkles,
      color: "from-purple-500 to-purple-600",
      description: "Specialist in quantum mechanics and quantum computing",
      availability: "online",
    },
    {
      id: 3,
      name: "CodeMentor",
      specialty: "Web Development",
      avatar: Code,
      color: "from-cyan-500 to-cyan-600",
      description: "Full-stack development expert with focus on modern frameworks",
      availability: "online",
    },
    {
      id: 4,
      name: "DataWizard",
      specialty: "Data Science & Analytics",
      avatar: LineChart,
      color: "from-green-500 to-green-600",
      description: "Data analysis, statistics, and machine learning expert",
      availability: "online",
    },
    {
      id: 5,
      name: "DesignPro",
      specialty: "UI/UX Design",
      avatar: Palette,
      color: "from-pink-500 to-pink-600",
      description: "Creative design thinking and user experience specialist",
      availability: "busy",
    },
    {
      id: 6,
      name: "BizStrategist",
      specialty: "Business & Finance",
      avatar: DollarSign,
      color: "from-amber-500 to-amber-600",
      description: "Business strategy, finance, and entrepreneurship mentor",
      availability: "online",
    },
    {
      id: 7,
      name: "SoundMaster",
      specialty: "Music & Audio",
      avatar: Music,
      color: "from-rose-500 to-rose-600",
      description: "Music theory, production, and audio engineering expert",
      availability: "online",
    },
    {
      id: 8,
      name: "InnovateMentor",
      specialty: "Innovation & Startups",
      avatar: Lightbulb,
      color: "from-yellow-500 to-yellow-600",
      description: "Product innovation and startup strategy advisor",
      availability: "online",
    },
  ],
}

export default function MobileAppPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && password) {
      setIsLoggedIn(true)
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-border/50 shadow-2xl">
          <CardHeader className="space-y-4 text-center pb-8">
            <div className="mx-auto w-20 h-20 rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
              <Zap className="w-10 h-10 text-accent" />
            </div>
            <div>
              <CardTitle className="text-3xl font-bold">BrainBolt</CardTitle>
              <CardDescription className="text-base mt-2">Your AI-Powered Learning Platform</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 bg-secondary/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-12 bg-secondary/50"
                />
              </div>
              <Button type="submit" className="w-full h-12 text-base font-semibold bg-accent hover:bg-accent/90">
                <Zap className="w-4 h-4 mr-2" />
                Sign In
              </Button>
              <div className="text-center">
                <p className="text-xs text-muted-foreground bg-secondary/50 p-3 rounded-lg">
                  Demo Mode: Enter any email and password to explore the platform
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return <MobileApp />
}

function MobileApp() {
  const [currentView, setCurrentView] = useState<"dashboard" | "courses" | "chat" | "progress" | "profile">("dashboard")

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="h-full">
        {currentView === "dashboard" && <Dashboard setCurrentView={setCurrentView} />}
        {currentView === "courses" && <Courses />}
        {currentView === "chat" && <AIChat />}
        {currentView === "progress" && <ProgressView />}
        {currentView === "profile" && <Profile />}
      </div>
      <BottomNav currentView={currentView} setCurrentView={setCurrentView} />
    </div>
  )
}

function BottomNav({
  currentView,
  setCurrentView,
}: {
  currentView: string
  setCurrentView: (view: "dashboard" | "courses" | "chat" | "progress" | "profile") => void
}) {
  const navItems = [
    { id: "dashboard", icon: Home, label: "Home" },
    { id: "courses", icon: BookOpen, label: "Courses" },
    { id: "chat", icon: MessageSquare, label: "AI Tutors" },
    { id: "progress", icon: BarChart3, label: "Progress" },
    { id: "profile", icon: User, label: "Profile" },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-lg border-t border-border/50 px-2 py-3 z-50">
      <div className="flex items-center justify-around max-w-2xl mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id as any)}
              className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl transition-all ${
                currentView === item.id
                  ? "bg-accent/10 text-accent scale-105"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function Dashboard({ setCurrentView }: { setCurrentView: (view: any) => void }) {
  const activeCourses = MOCK_DATA.courses.slice(0, 3)

  return (
    <div className="p-4 space-y-6 pb-6">
      {/* Header */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Hello, {MOCK_DATA.user.name.split(" ")[0]}</h1>
            <p className="text-sm text-muted-foreground mt-1">{MOCK_DATA.user.currentSemester}</p>
          </div>
          <button className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors">
            <Bell className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3">
        <Card className="border-border/50 bg-gradient-to-br from-card to-secondary/20">
          <CardContent className="pt-5 pb-4 text-center">
            <div className="text-2xl font-bold text-accent">{MOCK_DATA.courses.length}</div>
            <div className="text-xs text-muted-foreground mt-1">Active Courses</div>
          </CardContent>
        </Card>
        <Card className="border-border/50 bg-gradient-to-br from-card to-secondary/20">
          <CardContent className="pt-5 pb-4 text-center">
            <div className="text-2xl font-bold text-accent">156</div>
            <div className="text-xs text-muted-foreground mt-1">Study Hours</div>
          </CardContent>
        </Card>
        <Card className="border-border/50 bg-gradient-to-br from-card to-secondary/20">
          <CardContent className="pt-5 pb-4 text-center">
            <div className="text-2xl font-bold text-accent">3.7</div>
            <div className="text-xs text-muted-foreground mt-1">GPA</div>
          </CardContent>
        </Card>
      </div>

      {/* Continue Learning */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Continue Learning</h2>
          <button onClick={() => setCurrentView("courses")} className="text-sm text-accent hover:underline font-medium">
            View All
          </button>
        </div>

        {activeCourses.map((course) => (
          <Card key={course.id} className="border-border/50 overflow-hidden hover:border-accent/30 transition-all">
            <div className={`h-24 bg-gradient-to-br ${course.color} flex items-center justify-center relative`}>
              <Zap className="w-10 h-10 text-accent/60" />
              <Badge className="absolute top-2 right-2 bg-black/40 text-white border-0">{course.code}</Badge>
            </div>
            <CardContent className="pt-4 space-y-3">
              <div>
                <h3 className="font-semibold text-sm">{course.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{course.instructor}</p>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-1.5" />
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>Next: {course.nextSession}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Tutors Quick Access */}
      <Card className="border-accent/30 bg-gradient-to-br from-accent/5 to-transparent">
        <CardContent className="pt-5 pb-5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
              <MessageSquare className="w-7 h-7 text-accent" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-sm">Need Help?</h3>
              <p className="text-xs text-muted-foreground mt-1">Chat with 8 specialized AI tutors</p>
            </div>
            <Button
              size="sm"
              className="bg-accent hover:bg-accent/90 h-9 px-4 font-medium"
              onClick={() => setCurrentView("chat")}
            >
              Chat Now
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Deadlines */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Upcoming Deadlines</h2>
        <Card className="border-border/50">
          <CardContent className="pt-4 pb-4 space-y-3">
            {[
              {
                title: "ML Assignment 3: Neural Network Implementation",
                course: "ML-401",
                due: "In 2 days",
                icon: ClipboardList,
              },
              {
                title: "Quantum Computing Quiz 4",
                course: "QC-301",
                due: "In 5 days",
                icon: HelpCircle,
              },
              {
                title: "React Project: E-commerce App",
                course: "WEB-402",
                due: "In 1 week",
                icon: Code,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary/30 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-xs leading-tight">{item.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline" className="text-[10px] px-1.5 py-0 h-4">
                      {item.course}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{item.due}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null)
  const [viewMode, setViewMode] = useState<"list" | "semester">("list")

  if (selectedCourse !== null) {
    return <CourseDetail course={MOCK_DATA.courses[selectedCourse]} onBack={() => setSelectedCourse(null)} />
  }

  return (
    <div className="pb-6">
      {/* Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-lg border-b border-border/50 z-10 p-4 space-y-4">
        <div>
          <h1 className="text-2xl font-bold">My Courses</h1>
          <p className="text-sm text-muted-foreground mt-1">Personalized learning paths</p>
        </div>

        <Tabs value={viewMode} onValueChange={(v) => setViewMode(v as any)} className="w-full">
          <TabsList className="grid w-full grid-cols-2 h-10">
            <TabsTrigger value="list" className="text-xs">
              All Courses
            </TabsTrigger>
            <TabsTrigger value="semester" className="text-xs">
              By Semester
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="p-4 space-y-4">
        {viewMode === "list" && (
          <>
            {MOCK_DATA.courses.map((course, index) => (
              <Card
                key={course.id}
                className="border-border/50 overflow-hidden hover:border-accent/30 transition-all cursor-pointer"
                onClick={() => setSelectedCourse(index)}
              >
                <div className={`h-28 bg-gradient-to-br ${course.color} flex items-center justify-center relative`}>
                  <Zap className="w-12 h-12 text-accent/40" />
                  <Badge className="absolute top-3 left-3 bg-black/50 text-white border-0 font-mono text-xs">
                    {course.code}
                  </Badge>
                  <Badge className="absolute top-3 right-3 bg-accent/90 text-accent-foreground border-0">
                    {course.grade}
                  </Badge>
                </div>
                <CardContent className="pt-4 space-y-3">
                  <div>
                    <h3 className="font-semibold">{course.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1.5">{course.description}</p>
                    <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {course.instructor}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      {course.units} units
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      {course.completedUnits} completed
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Course Progress</span>
                      <span className="font-semibold">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}

            <Button className="w-full h-12 bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 font-semibold">
              <Sparkles className="w-4 h-4 mr-2" />
              Generate New Course
            </Button>
          </>
        )}

        {viewMode === "semester" && (
          <>
            {MOCK_DATA.semesters.map((semester) => (
              <Card key={semester.id} className="border-border/50">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{semester.name}</CardTitle>
                    <Badge variant={semester.status === "active" ? "default" : "secondary"} className="text-xs">
                      {semester.status === "active" ? "Current" : "Completed"}
                    </Badge>
                  </div>
                  <CardDescription className="text-xs">
                    {semester.courses} courses •{" "}
                    {semester.status === "completed" ? `GPA: ${semester.gpa}` : "In Progress"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  {MOCK_DATA.courses
                    .filter((c) => c.semester === semester.id)
                    .map((course, index) => (
                      <div
                        key={course.id}
                        onClick={() => setSelectedCourse(MOCK_DATA.courses.findIndex((c) => c.id === course.id))}
                        className="p-3 rounded-lg border border-border/50 hover:border-accent/30 hover:bg-secondary/30 transition-all cursor-pointer"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm">{course.title}</h4>
                            <p className="text-xs text-muted-foreground mt-0.5">{course.code}</p>
                          </div>
                          <Badge variant="outline" className="ml-2">
                            {course.grade}
                          </Badge>
                        </div>
                      </div>
                    ))}
                </CardContent>
              </Card>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

function CourseDetail({ course, onBack }: { course: any; onBack: () => void }) {
  const [selectedUnit, setSelectedUnit] = useState<number | null>(null)

  const units = [
    {
      id: 1,
      title: "Introduction to Neural Networks",
      completed: true,
      materials: {
        lectures: [{ title: "What are Neural Networks?", duration: "25 min", type: "video" }],
        tutorials: [{ title: "Setting up Your Environment", duration: "30 min", type: "interactive" }],
        labs: [{ title: "Lab 1: First Neural Network", duration: "45 min", status: "completed" }],
        assignments: [{ title: "Assignment 1: Basic NN", due: "Completed", status: "graded", grade: "95%" }],
        materials: [
          { title: "Neural Networks Primer.pdf", type: "pdf" },
          { title: "Python Setup Guide", type: "link" },
        ],
        books: [{ title: "Deep Learning by Goodfellow", chapter: "Chapter 6", link: "library.brainbolt.ai" }],
      },
    },
    {
      id: 2,
      title: "Activation Functions & Backpropagation",
      completed: true,
      materials: {
        lectures: [
          { title: "Activation Functions Explained", duration: "30 min", type: "video" },
          { title: "The Math Behind Backpropagation", duration: "40 min", type: "video" },
        ],
        tutorials: [{ title: "Implementing Activation Functions", duration: "35 min", type: "interactive" }],
        labs: [{ title: "Lab 2: Backprop from Scratch", duration: "60 min", status: "completed" }],
        assignments: [{ title: "Assignment 2: Gradient Descent", due: "Completed", status: "graded", grade: "92%" }],
        quizzes: [{ title: "Quiz 1: Activation Functions", questions: 10, status: "passed", score: "90%" }],
        materials: [
          { title: "Backpropagation Deep Dive.pdf", type: "pdf" },
          { title: "Gradient Calculator Tool", type: "tool" },
        ],
        books: [
          {
            title: "Neural Networks and Deep Learning",
            chapter: "Chapter 2",
            link: "neuralnetworksanddeeplearning.com",
          },
        ],
      },
    },
    {
      id: 3,
      title: "Convolutional Neural Networks (CNNs)",
      completed: true,
      materials: {
        lectures: [
          { title: "CNN Architecture Overview", duration: "35 min", type: "video" },
          { title: "Convolution Operations", duration: "28 min", type: "video" },
        ],
        tutorials: [{ title: "Building CNNs in PyTorch", duration: "45 min", type: "interactive" }],
        labs: [{ title: "Lab 3: Image Classification with CNN", duration: "90 min", status: "completed" }],
        assignments: [
          { title: "Assignment 3: Custom CNN Architecture", due: "Completed", status: "graded", grade: "88%" },
        ],
        quizzes: [{ title: "Quiz 2: CNN Fundamentals", questions: 12, status: "passed", score: "85%" }],
        materials: [
          { title: "CNN Visualization Guide.pdf", type: "pdf" },
          { title: "ImageNet Dataset Access", type: "dataset" },
        ],
        books: [{ title: "Deep Learning for Computer Vision", chapter: "Chapters 3-4", link: "library.brainbolt.ai" }],
      },
    },
    {
      id: 4,
      title: "Recurrent Neural Networks (RNNs)",
      completed: false,
      materials: {
        lectures: [
          { title: "Understanding RNN Architecture", duration: "32 min", type: "video" },
          { title: "LSTM and GRU Networks", duration: "38 min", type: "video" },
        ],
        tutorials: [{ title: "Time Series with RNNs", duration: "40 min", type: "interactive" }],
        labs: [{ title: "Lab 4: Sentiment Analysis with RNN", duration: "75 min", status: "available" }],
        assignments: [{ title: "Assignment 4: Text Generation", due: "Nov 20, 2025", status: "available" }],
        quizzes: [{ title: "Quiz 3: RNN Concepts", questions: 15, status: "available" }],
        materials: [
          { title: "RNN & LSTM Guide.pdf", type: "pdf" },
          { title: "Text Preprocessing Toolkit", type: "tool" },
        ],
        books: [{ title: "Sequence Models", chapter: "Chapter 5", link: "library.brainbolt.ai" }],
      },
    },
    {
      id: 5,
      title: "Transformer Architecture & Attention",
      completed: false,
      materials: {
        lectures: [
          { title: "Attention Mechanism Explained", duration: "35 min", type: "video" },
          { title: "Transformer Architecture Deep Dive", duration: "45 min", type: "video" },
        ],
        tutorials: [{ title: "Building Transformers", duration: "50 min", type: "interactive" }],
        labs: [{ title: "Lab 5: Machine Translation with Transformers", duration: "90 min", status: "locked" }],
        assignments: [{ title: "Assignment 5: Custom Transformer", due: "Dec 1, 2025", status: "locked" }],
        materials: [
          { title: "Attention is All You Need (Paper)", type: "pdf" },
          { title: "Transformer Visualization", type: "tool" },
        ],
        books: [{ title: "Modern NLP with Transformers", chapter: "Chapters 2-3", link: "library.brainbolt.ai" }],
      },
    },
  ]

  if (selectedUnit !== null) {
    return <UnitDetail unit={units[selectedUnit]} courseTitle={course.title} onBack={() => setSelectedUnit(null)} />
  }

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Course Header */}
      <div className={`relative h-52 bg-gradient-to-br ${course.color} overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20" />
        <button
          onClick={onBack}
          className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/40 transition-colors z-10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="absolute inset-0 flex items-center justify-center">
          <Zap className="w-20 h-20 text-accent/30" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
          <Badge className="bg-black/50 text-white border-0 mb-2 font-mono">{course.code}</Badge>
          <h1 className="text-xl font-bold text-white">{course.title}</h1>
          <p className="text-white/90 text-xs mt-1">{course.description}</p>
        </div>
      </div>

      {/* Course Stats */}
      <div className="p-4 space-y-4">
        <div className="grid grid-cols-4 gap-2">
          <Card className="border-border/50 bg-gradient-to-br from-card to-secondary/10">
            <CardContent className="pt-4 pb-3 text-center">
              <div className="text-xl font-bold text-accent">{course.progress}%</div>
              <div className="text-[10px] text-muted-foreground mt-1">Complete</div>
            </CardContent>
          </Card>
          <Card className="border-border/50 bg-gradient-to-br from-card to-secondary/10">
            <CardContent className="pt-4 pb-3 text-center">
              <div className="text-xl font-bold text-accent">
                {course.completedUnits}/{course.units}
              </div>
              <div className="text-[10px] text-muted-foreground mt-1">Units</div>
            </CardContent>
          </Card>
          <Card className="border-border/50 bg-gradient-to-br from-card to-secondary/10">
            <CardContent className="pt-4 pb-3 text-center">
              <div className="text-xl font-bold text-accent">{course.grade}</div>
              <div className="text-[10px] text-muted-foreground mt-1">Grade</div>
            </CardContent>
          </Card>
          <Card className="border-border/50 bg-gradient-to-br from-card to-secondary/10">
            <CardContent className="pt-4 pb-3 text-center">
              <div className="text-xl font-bold text-accent">12</div>
              <div className="text-[10px] text-muted-foreground mt-1">Hours</div>
            </CardContent>
          </Card>
        </div>

        {/* Instructor */}
        <Card className="border-accent/30 bg-gradient-to-br from-accent/5 to-transparent border-accent/20">
          <CardContent className="pt-4 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                <Brain className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm">{course.instructor}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">AI Teaching Assistant</p>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="border-accent/50 text-accent hover:bg-accent/10 bg-transparent"
              >
                Chat
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Course Units */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Course Units</h2>
          {units.map((unit, index) => (
            <Card
              key={unit.id}
              className={`border-border/50 ${
                unit.completed ? "opacity-90" : ""
              } hover:border-accent/30 transition-all cursor-pointer`}
              onClick={() => setSelectedUnit(index)}
            >
              <CardContent className="pt-4 pb-4">
                <div className="flex items-start gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      unit.completed ? "bg-accent/10" : "bg-secondary/50"
                    }`}
                  >
                    {unit.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                    ) : (
                      <Circle className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-medium text-sm leading-tight">
                        Unit {unit.id}: {unit.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground flex-wrap">
                      {unit.materials.lectures && (
                        <span className="flex items-center gap-1">
                          <Play className="w-3 h-3" />
                          {unit.materials.lectures.length} lectures
                        </span>
                      )}
                      {unit.materials.labs && (
                        <span className="flex items-center gap-1">
                          <FlaskConical className="w-3 h-3" />
                          {unit.materials.labs.length} labs
                        </span>
                      )}
                      {unit.materials.assignments && (
                        <span className="flex items-center gap-1">
                          <ClipboardList className="w-3 h-3" />
                          {unit.materials.assignments.length} assignments
                        </span>
                      )}
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

function UnitDetail({ unit, courseTitle, onBack }: { unit: any; courseTitle: string; onBack: () => void }) {
  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Unit Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-lg border-b border-border/50 z-10 p-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-3"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="text-sm">Back to {courseTitle}</span>
        </button>
        <div>
          <h1 className="text-xl font-bold">{unit.title}</h1>
          {unit.completed && (
            <Badge className="mt-2 bg-accent/10 text-accent border-accent/20">
              <CheckCircle2 className="w-3 h-3 mr-1" />
              Completed
            </Badge>
          )}
        </div>
      </div>

      <div className="p-4 space-y-4">
        <Tabs defaultValue="lectures" className="w-full">
          <TabsList className="grid w-full grid-cols-4 h-10 mb-4">
            <TabsTrigger value="lectures" className="text-xs">
              Lectures
            </TabsTrigger>
            <TabsTrigger value="practice" className="text-xs">
              Practice
            </TabsTrigger>
            <TabsTrigger value="assessments" className="text-xs">
              Assessments
            </TabsTrigger>
            <TabsTrigger value="resources" className="text-xs">
              Resources
            </TabsTrigger>
          </TabsList>

          <TabsContent value="lectures" className="space-y-3 mt-0">
            {unit.materials.lectures?.map((lecture: any, index: number) => (
              <Card key={index} className="border-border/50 hover:border-accent/30 transition-all">
                <CardContent className="pt-4 pb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Play className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{lecture.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-[10px] px-1.5 py-0 h-4">
                          {lecture.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{lecture.duration}</span>
                      </div>
                    </div>
                    <Button size="sm" className="bg-accent hover:bg-accent/90 h-8 px-3">
                      Watch
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="practice" className="space-y-3 mt-0">
            {unit.materials.tutorials?.map((tutorial: any, index: number) => (
              <Card key={`tutorial-${index}`} className="border-border/50 hover:border-accent/30 transition-all">
                <CardContent className="pt-4 pb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <Code className="w-5 h-5 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{tutorial.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-[10px] px-1.5 py-0 h-4">
                          {tutorial.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{tutorial.duration}</span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="h-8 px-3 bg-transparent">
                      Start
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {unit.materials.labs?.map((lab: any, index: number) => (
              <Card key={`lab-${index}`} className="border-border/50 hover:border-accent/30 transition-all">
                <CardContent className="pt-4 pb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                      <FlaskConical className="w-5 h-5 text-purple-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{lab.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge
                          variant={lab.status === "completed" ? "default" : "outline"}
                          className="text-[10px] px-1.5 py-0 h-4"
                        >
                          {lab.status}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{lab.duration}</span>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant={lab.status === "completed" ? "outline" : "default"}
                      className="h-8 px-3"
                      disabled={lab.status === "locked"}
                    >
                      {lab.status === "completed" ? "Review" : lab.status === "locked" ? "Locked" : "Start"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="assessments" className="space-y-3 mt-0">
            {unit.materials.assignments?.map((assignment: any, index: number) => (
              <Card key={`assignment-${index}`} className="border-border/50 hover:border-accent/30 transition-all">
                <CardContent className="pt-4 pb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <ClipboardList className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{assignment.title}</h3>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <Badge
                          variant={assignment.status === "graded" ? "default" : "outline"}
                          className="text-[10px] px-1.5 py-0 h-4"
                        >
                          {assignment.status}
                        </Badge>
                        {assignment.grade && (
                          <Badge className="text-[10px] px-1.5 py-0 h-4 bg-accent/10 text-accent">
                            {assignment.grade}
                          </Badge>
                        )}
                        <span className="text-xs text-muted-foreground">{assignment.due}</span>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant={assignment.status === "graded" ? "outline" : "default"}
                      className="h-8 px-3"
                      disabled={assignment.status === "locked"}
                    >
                      {assignment.status === "graded" ? "Review" : assignment.status === "locked" ? "Locked" : "Start"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {unit.materials.quizzes?.map((quiz: any, index: number) => (
              <Card key={`quiz-${index}`} className="border-border/50 hover:border-accent/30 transition-all">
                <CardContent className="pt-4 pb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-5 h-5 text-amber-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{quiz.title}</h3>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <Badge
                          variant={quiz.status === "passed" ? "default" : "outline"}
                          className="text-[10px] px-1.5 py-0 h-4"
                        >
                          {quiz.status}
                        </Badge>
                        {quiz.score && (
                          <Badge className="text-[10px] px-1.5 py-0 h-4 bg-accent/10 text-accent">{quiz.score}</Badge>
                        )}
                        <span className="text-xs text-muted-foreground">{quiz.questions} questions</span>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant={quiz.status === "passed" ? "outline" : "default"}
                      className="h-8 px-3"
                      disabled={quiz.status === "locked"}
                    >
                      {quiz.status === "passed" ? "Retake" : quiz.status === "locked" ? "Locked" : "Start"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="resources" className="space-y-3 mt-0">
            <Card className="border-border/50 bg-gradient-to-br from-card to-secondary/10">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                  <BookMarked className="w-4 h-4 text-accent" />
                  Study Materials
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {unit.materials.materials?.map((material: any, index: number) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                        <FileText className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{material.title}</p>
                        <p className="text-xs text-muted-foreground capitalize">{material.type}</p>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-gradient-to-br from-card to-secondary/10">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-accent" />
                  Recommended Books
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {unit.materials.books?.map((book: any, index: number) => (
                  <div
                    key={index}
                    className="flex items-start justify-between p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-medium leading-tight">{book.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{book.chapter}</p>
                        <p className="text-xs text-accent mt-1">{book.link}</p>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0 flex-shrink-0">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function AIChat() {
  const [selectedAgent, setSelectedAgent] = useState<number | null>(null)
  const [messages, setMessages] = useState<Array<{ role: string; content: string; agent?: string }>>([])
  const [input, setInput] = useState("")

  if (selectedAgent !== null) {
    return (
      <ChatInterface
        agent={MOCK_DATA.aiAgents[selectedAgent]}
        messages={messages}
        setMessages={setMessages}
        input={input}
        setInput={setInput}
        onBack={() => setSelectedAgent(null)}
      />
    )
  }

  return (
    <div className="pb-6">
      <div className="sticky top-0 bg-background/95 backdrop-blur-lg border-b border-border/50 z-10 p-4">
        <div>
          <h1 className="text-2xl font-bold">AI Tutors</h1>
          <p className="text-sm text-muted-foreground mt-1">Choose your specialized tutor</p>
        </div>
      </div>

      <div className="p-4 space-y-3">
        {MOCK_DATA.aiAgents.map((agent, index) => {
          const Icon = agent.avatar
          return (
            <Card
              key={agent.id}
              className="border-border/50 hover:border-accent/30 transition-all cursor-pointer overflow-hidden"
              onClick={() => {
                setSelectedAgent(index)
                setMessages([
                  {
                    role: "assistant",
                    content: `Hi! I'm ${agent.name}, your ${agent.specialty} specialist. How can I help you today?`,
                    agent: agent.name,
                  },
                ])
              }}
            >
              <CardContent className="pt-4 pb-4">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${agent.color} flex items-center justify-center flex-shrink-0 relative`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                    {agent.availability === "online" && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-sm">{agent.name}</h3>
                        <p className="text-xs text-muted-foreground mt-0.5">{agent.specialty}</p>
                      </div>
                      <Badge
                        variant={agent.availability === "online" ? "default" : "secondary"}
                        className="text-[10px] px-2 py-0 h-5"
                      >
                        {agent.availability}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{agent.description}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0 self-center" />
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

function ChatInterface({
  agent,
  messages,
  setMessages,
  input,
  setInput,
  onBack,
}: {
  agent: any
  messages: any[]
  setMessages: any
  input: string
  setInput: any
  onBack: () => void
}) {
  const Icon = agent.avatar

  const handleSend = () => {
    if (!input.trim()) return
    setMessages([...messages, { role: "user", content: input }])
    setInput("")

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        `Great question! Let me explain that in detail...`,
        `That's an interesting topic in ${agent.specialty}. Here's what you need to know...`,
        `I can definitely help you with that! Based on my expertise in ${agent.specialty}...`,
        `Excellent! Let me break this down for you step by step...`,
      ]
      setMessages((prev: any) => [
        ...prev,
        {
          role: "assistant",
          content: responses[Math.floor(Math.random() * responses.length)],
          agent: agent.name,
        },
      ])
    }, 1000)
  }

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Chat Header */}
      <div className="p-4 border-b border-border/50 bg-card/95 backdrop-blur-lg">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-3"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="text-sm">Back to tutors</span>
        </button>
        <div className="flex items-center gap-3">
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${agent.color} flex items-center justify-center relative`}
          >
            <Icon className="w-6 h-6 text-white" />
            {agent.availability === "online" && (
              <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-card" />
            )}
          </div>
          <div>
            <h2 className="font-semibold">{agent.name}</h2>
            <p className="text-xs text-muted-foreground">{agent.specialty}</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            {message.role === "assistant" && (
              <div
                className={`w-8 h-8 rounded-lg bg-gradient-to-br ${agent.color} flex items-center justify-center mr-2 flex-shrink-0`}
              >
                <Icon className="w-4 h-4 text-white" />
              </div>
            )}
            <div
              className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                message.role === "user" ? "bg-accent text-accent-foreground" : "bg-card border border-border/50"
              }`}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border/50 bg-card/95 backdrop-blur-lg">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask a question..."
            className="flex-1 h-11 bg-secondary/50"
          />
          <Button onClick={handleSend} className="h-11 px-5 bg-accent hover:bg-accent/90">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

function ProgressView() {
  const weeklyActivity = [
    { day: "Mon", hours: 3.2 },
    { day: "Tue", hours: 4.5 },
    { day: "Wed", hours: 2.8 },
    { day: "Thu", hours: 5.1 },
    { day: "Fri", hours: 3.9 },
    { day: "Sat", hours: 6.2 },
    { day: "Sun", hours: 4.3 },
  ]

  const maxHours = Math.max(...weeklyActivity.map((d) => d.hours))

  const achievements = [
    { icon: Flame, title: "15 Day Streak", description: "Consistent learner", color: "from-orange-500 to-red-500" },
    { icon: Star, title: "Top Performer", description: "95% avg score", color: "from-yellow-500 to-amber-500" },
    { icon: Trophy, title: "5 Courses Done", description: "Semester champion", color: "from-blue-500 to-cyan-500" },
    { icon: Target, title: "156 Hours", description: "Dedicated student", color: "from-purple-500 to-pink-500" },
  ]

  return (
    <div className="pb-6">
      <div className="sticky top-0 bg-background/95 backdrop-blur-lg border-b border-border/50 z-10 p-4">
        <div>
          <h1 className="text-2xl font-bold">Progress</h1>
          <p className="text-sm text-muted-foreground mt-1">Track your learning journey</p>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Weekly Summary */}
        <div className="grid grid-cols-2 gap-3">
          <Card className="border-border/50 bg-gradient-to-br from-card to-accent/5">
            <CardContent className="pt-6 pb-5 text-center">
              <div className="text-3xl font-bold text-accent">30.0</div>
              <div className="text-sm text-muted-foreground mt-1">Hours This Week</div>
            </CardContent>
          </Card>
          <Card className="border-border/50 bg-gradient-to-br from-card to-accent/5">
            <CardContent className="pt-6 pb-5 text-center">
              <div className="text-3xl font-bold text-accent">15</div>
              <div className="text-sm text-muted-foreground mt-1">Day Streak</div>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Activity Chart */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-lg">Weekly Activity</CardTitle>
            <CardDescription className="text-xs">Study hours per day</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between gap-2 h-48">
              {weeklyActivity.map((day, index) => {
                const height = (day.hours / maxHours) * 100
                return (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="flex-1 w-full flex items-end">
                      <div className="w-full relative group">
                        <div
                          className="w-full bg-gradient-to-t from-accent to-accent/60 rounded-t-lg transition-all hover:from-accent/90 hover:to-accent/50"
                          style={{ height: `${height}%` }}
                        />
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {day.hours}h
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground font-medium">{day.day}</div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Achievements</h2>
          <div className="grid grid-cols-2 gap-3">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <Card key={index} className="border-border/50 overflow-hidden">
                  <CardContent className="pt-5 pb-4 text-center space-y-3">
                    <div className="flex justify-center">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{achievement.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{achievement.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Course Progress */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-lg">Course Completion</CardTitle>
            <CardDescription className="text-xs">Current semester progress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {MOCK_DATA.courses.slice(0, 4).map((course) => (
              <div key={course.id} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium truncate flex-1">{course.title}</span>
                  <span className="font-semibold text-accent ml-2">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Learning Insights */}
        <Card className="border-border/50 bg-gradient-to-br from-card to-accent/5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-accent" />
              Learning Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <p className="text-sm font-medium">You're on track!</p>
                <p className="text-xs text-muted-foreground mt-1">Your study pace is 23% above average</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                <Brain className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="text-sm font-medium">Peak performance time</p>
                <p className="text-xs text-muted-foreground mt-1">You learn best between 2-6 PM</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-purple-500" />
              </div>
              <div>
                <p className="text-sm font-medium">Strong in ML & Web Dev</p>
                <p className="text-xs text-muted-foreground mt-1">Consider advanced courses in these areas</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function Profile() {
  return (
    <div className="pb-6">
      <div className="sticky top-0 bg-background/95 backdrop-blur-lg border-b border-border/50 z-10 p-4">
        <div>
          <h1 className="text-2xl font-bold">Profile</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage your account</p>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* User Profile */}
        <Card className="border-border/50">
          <CardContent className="pt-6 pb-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-2xl font-bold text-accent">
                {MOCK_DATA.user.avatar}
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold">{MOCK_DATA.user.name}</h2>
                <p className="text-sm text-muted-foreground mt-1">{MOCK_DATA.user.email}</p>
                <Badge className="mt-2 bg-accent/10 text-accent border-accent/20">{MOCK_DATA.user.subscription}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Subscription */}
        <Card className="border-border/50 border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Rocket className="w-4 h-4 text-accent" />
              Subscription
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-semibold">{MOCK_DATA.user.subscription}</div>
                <div className="text-sm text-muted-foreground mt-1">Unlimited courses & AI tutors</div>
              </div>
              <Badge className="bg-accent text-accent-foreground">Active</Badge>
            </div>
            <Button variant="outline" className="w-full bg-transparent border-accent/50 text-accent hover:bg-accent/10">
              Upgrade Plan
            </Button>
          </CardContent>
        </Card>

        {/* Settings Menu */}
        <div className="space-y-2">
          {[
            { icon: User, title: "Edit Profile", subtitle: "Update your information" },
            { icon: Bell, title: "Notifications", subtitle: "Manage alerts & reminders" },
            { icon: Settings, title: "Preferences", subtitle: "App settings & customization" },
            { icon: Lock, title: "Privacy & Security", subtitle: "Data & account security" },
            { icon: HelpCircle, title: "Help & Support", subtitle: "FAQs and contact support" },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <Card key={index} className="border-border/50 hover:border-accent/30 transition-all cursor-pointer">
                <CardContent className="pt-4 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{item.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{item.subtitle}</div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Sign Out */}
        <Button
          variant="outline"
          className="w-full h-12 text-destructive border-destructive/50 hover:bg-destructive/10 bg-transparent font-medium"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>

        <div className="text-center pt-4">
          <p className="text-xs text-muted-foreground">BrainBolt v1.0.0</p>
          <p className="text-xs text-muted-foreground mt-1">© 2025 BrainBolt. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
