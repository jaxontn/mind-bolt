# How to Run BrainBolt

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The project will be available at `http://localhost:3000`.

## Available Commands

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## Requirements

- **Node.js** (v18+ recommended)
- **pnpm** package manager

If you don't have pnpm installed:
```bash
npm install -g pnpm
```

## Notes

- The project uses Next.js 16 with TypeScript
- Dark mode is enabled by default
- Images are unoptimized for static hosting
- The app includes marketing pages for the AI learning platform

## Available Pages

Once running, you can access:

- `/` - Main landing page with sections for features, pricing, AI agents, and more
- `/lifetime-deal` - Special offer page
- `/mobile` - Mobile app showcase
- `/pitch-deck` - Pitch deck presentation

## Development

The project structure uses:
- Next.js App Router
- shadcn/ui components
- Tailwind CSS with dark theme
- TypeScript with strict mode