# Tanzir Portfolio - Complete Project Overview

Last updated: May 1, 2026
Project root: g:/Portfolio/tanzir-portfolio

## 1. Executive Summary

This project is a React + Vite single-page portfolio website for Tanzir Mannan Turzo.
The current implementation already delivers a full, data-driven one-page portfolio with:
- Sticky navigation and active section highlighting
- Hero, About, Skills, Experience, Projects, Achievements, Education, and Contact sections
- Dark editorial visual theme aligned with the PRD direction
- Scroll-triggered reveal animations
- Responsive behavior for mobile screens
- Build-ready production output

Current status: functional MVP with strong visual baseline and clean architecture, with some planned PRD refinements still pending.

## 2. Tech Stack and Tooling

- Framework: React 19
- Build tool: Vite 8
- Language: JavaScript (ES modules)
- Styling: CSS Modules + global CSS
- Linting: ESLint
- Hosting target: Vercel (not configured in repo yet)

Package scripts:
- npm run dev
- npm run build
- npm run lint
- npm run preview

## 3. High-Level Architecture

Application entry flow:
1. index.html defines metadata, fonts, and root mount point
2. src/main.jsx mounts React app and imports global styles
3. src/App.jsx composes all sections and shared layout components
4. Content is loaded from src/data/portfolioData.js

Architecture style:
- Container composition in App
- Reusable layout wrappers
- Data-driven section rendering for most content
- IntersectionObserver hooks for navigation state and reveal animation

## 4. Current Folder Structure (Implemented)

- index.html
- package.json
- vite.config.js
- public/
  - favicon.svg
  - icons.svg
- src/
  - App.jsx
  - main.jsx
  - App.css (legacy, not used)
  - index.css (legacy, not used)
  - data/
    - portfolioData.js
  - hooks/
    - useActiveSection.js
    - useScrollAnimation.js
  - styles/
    - global.css
    - animations.css
  - components/
    - layout/
      - Navbar.jsx
      - Navbar.module.css
      - SectionWrapper.jsx
      - SectionWrapper.module.css
      - Footer.jsx
      - Footer.module.css
    - sections/
      - Hero.jsx
      - Hero.module.css
      - About.jsx
      - Skills.jsx
      - Experience.jsx
      - Projects.jsx
      - Achievements.jsx
      - Education.jsx
      - Contact.jsx
    - ui/
       - ProjectCard.jsx
       - ProjectsCarousel.jsx

## 5. Data Layer Overview

All portfolio content currently used in UI is centralized in src/data/portfolioData.js:
- personalInfo
- sectionNav
- aboutStats
- skillsData
- workData
- projectsData
- achievementsData
- educationData

This provides a clean content-source pattern and minimizes hardcoded copy inside section components.

## 6. Implemented UI and Behavior by Section

### Navbar
- Sticky top bar with backdrop blur and dark transparent background
- Brand name links to hero section
- Navigation links: About, Work, Projects, Contact
- Active section highlighting driven by viewport observer
- Mobile menu uses CSS-only checkbox toggle

### Hero
- Kicker text, large name, and tagline
- Badge row for location and availability
- CTA buttons to Projects and Contact
- Decorative grid/radial overlay for editorial feel
- Circular portrait image on the right (desktop) and centered at the top on mobile

### About
- Two-paragraph summary from data file
- Three stat pills rendered from aboutStats
- First stat pill animates count-up to 700+

### Skills
- Category-based grouped skills
- Monospace tags with hover glow
- Divider structure for readability

### Experience
- Timeline-style card with violet left accent
- Current badge support
- Bullet points rendered from data

### Projects
- Single-card carousel with left/right controls
- Fixed-size project card showing title, description, and tech stack capsules
- Subtle swipe-reveal animation on card change
- External GitHub links with noreferrer

### Achievements
- Dot-prefixed list rendered from data

### Education
- Timeline-style education card

### Contact
- Mailto link
- Copy-to-clipboard button with temporary Copied state
- External GitHub and LinkedIn links

### Footer
- Minimal copyright line

## 7. Styling System Overview

Global design system lives in src/styles/global.css and includes:
- Theme tokens for colors, typography, spacing, radii
- Base layout sizing and section spacing
- Shared utility classes used by section components
- Card, tag, list, and contact interaction styles
- Mobile breakpoint at 768px

Component-scoped styles use CSS Modules in:
- Navbar.module.css
- SectionWrapper.module.css
- Footer.module.css
- Hero.module.css

Animation system in src/styles/animations.css:
- prefers-reduced-motion support
- Generic reveal-on-scroll and visible states
- Project card swipe-reveal animation defined in global styles

## 8. Hooks and Interactivity

### useActiveSection
- Observes section elements by ID
- Computes currently visible section based on intersection ratio
- Feeds active state into Navbar

### useScrollAnimation
- Returns a ref
- Observes section entry into viewport
- Adds visible class once and unobserves target

## 9. SEO and Metadata

index.html currently includes:
- Description meta tag
- Open Graph title, description, image fields
- Google Fonts preconnect and stylesheet for Sora + DM Mono

Note:
- og:image points to /og-image.png, but that asset is not yet present in public/

## 10. Build and Validation Status

Latest build command result:
- npm run build: success

Build output generated under dist/.

## 11. PRD Alignment Status

Completed or mostly completed:
- React + Vite project setup
- Dark editorial visual baseline
- Centralized data file pattern
- Single-page section composition
- Sticky navigation with active highlighting
- Hero, About, Skills, Experience, Projects, Achievements, Education, Contact, Footer
- Scroll reveal animations with IntersectionObserver
- Basic responsive behavior and reduced-motion handling
- Core SEO metadata added

Partially completed or pending:
- Dedicated UI atom components in src/components/ui (Badge, SkillTag, StatPill, ExperienceCard, ProjectCard, CopyButton) are not yet split into separate files
- Some sections currently rely on global utility classes rather than per-section CSS modules
- Additional SEO assets (public/og-image.png, resume.pdf) not yet added
- README still default Vite template content
- Lighthouse validation report not yet documented
- Vercel deployment files and production checklist not yet completed in repository

## 12. Known Technical Notes

- Environment warning observed previously:
  - ESLint packages request Node 22.13.0+ while environment used 22.12.0
  - Build still succeeds, but upgrading Node to 22.13+ is recommended for warning-free tooling

- Legacy files present but not imported:
  - src/App.css
  - src/index.css

## 13. Recommended Next Development Steps

1. Extract reusable atoms into src/components/ui and refactor sections to use them
2. Add missing public assets: og-image.png and resume.pdf
3. Replace default README with project-specific setup and architecture guide
4. Run Lighthouse on mobile and desktop; fix any metric below target
5. Add Vercel deployment configuration and final QA checklist validation

## 14. Quick Start Commands

From project root:
- npm install
- npm run dev
- npm run build
- npm run preview
