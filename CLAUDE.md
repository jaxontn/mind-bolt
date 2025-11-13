# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **MindBolt** - an AI-powered learning platform built with Next.js 16, React 19, and Tailwind CSS. The application features a modern dark-themed UI with custom learning paths, AI-curated courses, and comprehensive educational materials. It includes marketing pages (landing, lifetime deal, pitch deck) and uses shadcn/ui components.

## Development Commands

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint

# Common development workflow
pnpm dev          # Start development on http://localhost:3000
```

## Project Architecture

### Tech Stack
- **Framework**: Next.js 16 with App Router
- **UI**: React 19 with TypeScript
- **Styling**: Tailwind CSS v4.1.9 with shadcn/ui components
- **Package Manager**: pnpm
- **Icons**: Lucide React
- **Form Handling**: React Hook Form with Zod validation
- **Theme**: next-themes for dark mode support
- **Analytics**: Vercel Analytics

### Directory Structure

```
/app/                    # Next.js App Router pages
  ├── layout.tsx        # Root layout with dark theme and analytics
  ├── page.tsx          # Landing page (main marketing page)
  ├── globals.css       # Global styles with Tailwind and CSS variables
  ├── lifetime-deal/    # Lifetime deal offer page
  ├── mobile/           # Mobile app showcase page
  └── pitch-deck/       # Pitch deck presentation page

/components/            # Reusable React components
  ├── ui/              # shadcn/ui components (59+ components)
  ├── header.tsx       # Site navigation header
  ├── hero-section.tsx # Landing page hero
  ├── features-section.tsx # Feature showcases
  ├── ai-agents-section.tsx # AI capabilities section
  ├── pricing-section.tsx # Pricing plans
  ├── how-it-works-section.tsx # Process explanation
  ├── stats-section.tsx # Statistics display
  ├── cta-section.tsx # Call-to-action
  └── footer.tsx       # Site footer

/lib/                   # Utility functions
  └── utils.ts         # cn() helper for Tailwind class merging

/hooks/                 # Custom React hooks
  ├── use-mobile.ts    # Mobile detection hook
  └── use-toast.ts     # Toast notification hook

/styles/                # Additional styles (if needed)

/public/                # Static assets (icons, images, placeholders)
```

### Key Patterns

**Component Imports**: Use absolute imports with `@/` prefix
```tsx
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
```

**UI Components**: Extensive use of shadcn/ui components with consistent styling
- All UI components are in `components/ui/`
- Components use class-variance-authority (CVA) for variant management
- Dark mode support via CSS variables

**Styling System**:
- Tailwind CSS v4 with custom CSS variables defined in `app/globals.css`
- Dark theme applied by default in `app/layout.tsx`
- Consistent spacing and colors via design tokens
- Custom animations via `tw-animate-css`

**Form Handling**:
- React Hook Form with Zod schemas
- Resolvers for validation
- Components like `input-otp` for specialized inputs

### Page Architecture

**Landing Page** (`app/page.tsx`): Modular section-based layout
- Header with navigation
- Hero section with main value proposition
- Stats section for credibility
- Features showcase
- AI agents section explaining technology
- Pricing section
- How it works process explanation
- Call-to-action section
- Footer

**Special Pages**:
- Lifetime deal page with urgency messaging and pricing
- Mobile app showcase
- Pitch deck for investors/partners

### Development Notes

- **TypeScript**: Strict mode enabled with path aliases (`@/*` maps to root)
- **Build**: TypeScript build errors ignored in config (`ignoreBuildErrors: true`)
- **Images**: Unoptimized images enabled for static hosting
- **Icons**: Lucide React provides consistent iconography
- **Theme**: Dark mode by default using `next-themes`
- **Analytics**: Vercel Analytics integrated

### Component Patterns

**Section Components**: Follow consistent pattern for landing page sections:
```tsx
export default function SectionName() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Content */}
      </div>
    </section>
  )
}
```

**UI Components**: shadcn/ui provides comprehensive component library with:
- Consistent API design
- Full TypeScript support
- Accessibility features
- Dark mode support
- Responsive design