# **App Name**: Yadu Krishnan Portfolio

## Core Features:

- Bento Landing: Landing page with Bento grid layout for key sections (Portfolio, Blog, Services, Contact) and floating navigation.
- CV Data Parsing: Parse bio, skills (hard, soft, tools), and certifications from the provided CV PDF file (Yadu Krishnan - Multimedia Specialist -01_12_2025-3.pdf).
- Portfolio Grid: Display portfolio items in a Bento Grid Gallery with filter tabs based on categories.
- Media Lightbox: Enable preview of portfolio items through an integrated light box using embedded media from Google Drive URLs, ensure appropriate access is enabled to read the file at the url.
- Services Display: Services page offering Photography, Videography and AI Consulting displayed using bento cards, connected to formspree (https://formspree.io/f/myzjjpny) for inquries.
- Social Media Links: Social Media Auto-Scroll section with clickable logos linking to X, Instagram, YouTube, LinkedIn, 500px, Pinterest, GitHub, Spotify, Threads, TikTok, and Facebook.
- CV Download Page: Show a preview of the CV in a glassmorphic card and include a “Download CV” button to enable downloads from Firebase Storage.

## Style Guidelines:

- Primary color: Saturated Purple (#A020F0) for a futuristic, bold feel.
- Background color: Very dark purple (#0A030F) for a dark mode first approach.
- Accent color: Vibrant Pink (#F020A0) for neon highlights to create visual interest.
- Body and headline font: 'Space Grotesk' (sans-serif) for a computerized, techy feel.
- Code font: 'Source Code Pro' (monospace) for displaying any code snippets.
- Use a Bento Grid layout for the portfolio & services pages.
- Implement a floating Apple Liquid Glass-style bottom navigation bar with icon-only menu (Home, Portfolio, Blog, Services, Contact).
- Use GSAP-powered loading animation on the landing page (logo morph + smooth text reveal).
- Employ GSAP scroll-triggered text & image animations for added visual interest.