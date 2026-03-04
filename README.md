# Maroua — Portfolio

A professional portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Color Palette
- **Cream**: `#fbffe3` — background, light text
- **Forest Green**: `#344c2a` — primary, dark sections
- **Green Light**: `#4a6b3c` — hover states
- **Green Faint**: `#e8f0e0` — subtle backgrounds

## Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lucide React** (icons)
- **react-intersection-observer** (scroll animations)

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles + Tailwind directives
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page (composes all sections)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Sticky nav with scroll effect
│   │   └── Footer.tsx       # Footer with back-to-top
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── CustomCursor.tsx  # Animated custom cursor
│       ├── FadeUp.tsx        # Scroll-triggered fade animation
│       └── SectionLabel.tsx  # Reusable section label
├── lib/
│   ├── data.ts              # All portfolio content (edit this!)
│   └── utils.ts             # cn() utility
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customizing Content

All portfolio content lives in **`lib/data.ts`**. Edit:

- `siteConfig` — your name, role, email, location, social links
- `skills` — your skill tags
- `services` — your service offerings
- `projects` — your work (add real screenshots in `public/`)
- `experiences` — your work history
- `education` — your education & certifications
- `testimonials` — client quotes

## Adding Your Photo

In `components/sections/HeroSection.tsx`, replace the placeholder div with:

```tsx
import Image from "next/image";
// ...
<Image src="/your-photo.jpg" alt="Maroua" fill className="object-cover" />
```

Place your photo in the `public/` folder.
