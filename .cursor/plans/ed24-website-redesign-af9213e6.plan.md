<!-- af9213e6-f1e1-4e42-a91b-c2dac7b6b474 93d27f87-c66d-4a2e-ab2d-5435a16302a8 -->
# ED24 Website Redesign - Implementation Plan

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: EmailJS integration
- **Deployment**: GitHub Pages (static export)

## Project Structure

```
/app
  layout.js (global layout, fonts)
  page.js (main landing page)
  globals.css (Tailwind + custom styles)
/components
  Hero.jsx
  Navbar.jsx
  Courses.jsx
  About.jsx
  Advantages.jsx
  Partners.jsx
  Reviews.jsx
  Contact.jsx
  Footer.jsx
  WhatsAppButton.jsx (floating)
/public
  /images (placeholders)
  /icons
```

## Implementation Steps

### 1. Project Setup

- Initialize Next.js project with TypeScript and TailwindCSS
- Install dependencies: framer-motion, lucide-react, emailjs-com
- Configure next.config.js for static export and GitHub Pages
- Set up custom fonts (Poppins, Inter) via next/font/google
- Create color scheme in tailwind.config.js matching brand colors

### 2. Global Components

- **Navbar**: Sticky header with logo, smooth scroll links (Courses, About, Contact), "Call Now" and "Join ED24" CTAs
- **WhatsAppButton**: Fixed bottom-right floating button linking to WhatsApp (919377002424)
- **Layout**: Configure metadata for SEO, favicon, proper structure

### 3. Hero Section

- Full-width hero with gradient overlay
- Main headline: "SKILL – RESKILL – UPSKILL with ED24"
- Benjamin Franklin quote
- Two prominent CTAs (Join ED24, Call Now)
- Trust badges: ISO Certified, Govt. Approved, Since 2006
- Fade-in animations on load

### 4. Courses Section

- Grid layout: 3 columns on desktop, responsive to 1 on mobile
- 8 Course cards with icons:
  - Spoken English + Complete Grammar
  - Personality Development
  - IELTS/PTE/TOEFL/CELPIP Coaching
  - Tally Prime with TDS & GST
  - Computer Courses (CCC, BCC, etc.)
  - Career Counselling
  - College Soft Skills Training
  - Corporate Training
- Each card: Icon, title, description, bullet features, "Call ED24" CTA
- Hover animations with shadow depth
- Scroll reveal animations (fade up)

### 5. About Section

- Two-column layout: Text + Image gallery/placeholder
- Timeline: Founded in 2006
- Mission statement
- Key statistics: 4.8★ rating, 910+ reviews, 25+ years experience
- Feature icons: AC Classrooms, CCTV, Biometric Attendance, AV Training

### 6. Advantages Section

- Icon grid (5x2 or 3x4 responsive)
- 10 advantage points with icons
- Hover effects on each card
- Background: Light gradient or pattern

### 7. Partners Section

- Three partner logos in cards:
  - Tally Education
  - IDP Education
  - AICSM
- "Authorized Partner" badges
- Equal spacing, centered layout

### 8. Reviews Section

- Highlight: 4.8/5 stars (910+ Reviews)
- 2-3 testimonial cards with ratings
- Placeholder for student photos
- Optional: Link to JustDial reviews

### 9. Contact Section

- Split layout: Form + Info
- **Contact Form** (EmailJS):
  - Fields: Name, Email, Phone, Message
  - "Send Message" button
  - "Chat on WhatsApp" secondary button
- **Contact Info**:
  - Phone: 9377002424
  - Email: contacted24@gmail.com
  - Address with Google Maps embed
  - Hours: Mon-Sat 8 AM - 8 PM
- Form validation and success/error states

### 10. Footer

- Four columns: Logo + tagline, Quick Links, Contact, Social Media
- Social icons: Instagram, Facebook, YouTube, Twitter
- Copyright: © 2025 ED24 Education Institute
- Dark background with light text

### 11. Finishing Touches

- Smooth scroll behavior between sections
- Mobile responsive breakpoints tested
- Performance optimization: image lazy loading, code splitting
- Add proper meta tags for SEO
- Configure for static export and GitHub Pages deployment
- Create placeholder images with labels
- Add README with deployment instructions

## Key Files to Create

- `next.config.js` - static export configuration
- `tailwind.config.js` - custom colors, fonts
- `app/layout.js` - fonts, metadata, global structure
- `app/page.js` - main page importing all sections
- `app/globals.css` - Tailwind directives + smooth scroll
- `components/[AllSections].jsx` - 10 component files
- `public/images/` - placeholder images
- `.gitignore` - exclude node_modules, .next
- `package.json` - all dependencies
- `README.md` - setup and deployment guide

## Color Scheme (From Official ED24 Branding)

- **Primary Purple**: #60311F (Deep purple from logo "ED")
- **Accent Saffron/Orange**: #FABB38 (Graduation cap orange)
- **Secondary Khaki**: #F1DC8D (Light accent)
- **Secondary Brown**: #60311F (Irish Coffee - dark accents)
- **Text**: #333333
- **Background**: #FFFFFF
- **Secondary BG**: #F5F7FA

Note: Logo file provided by user will be saved to `/public/images/ed24-logo.png`

## Deployment

- Configure `next.config.js` with `output: 'export'` and proper basePath
- Build command: `npm run build`
- Deploy `/out` folder to GitHub Pages

### To-dos

- [ ] Initialize Next.js project with TailwindCSS, install dependencies (framer-motion, lucide-react, emailjs-com), configure for static export
- [ ] Configure tailwind.config.js with brand colors, set up fonts (Poppins/Inter), create globals.css, configure metadata in layout.js
- [ ] Build Navbar component with sticky positioning and smooth scroll, create floating WhatsApp button
- [ ] Create Hero section with gradient overlay, headlines, CTAs, trust badges, and fade-in animations
- [ ] Build Courses section with 8 course cards in responsive grid, icons, descriptions, and scroll reveal animations
- [ ] Create About section with stats and features, build Advantages section with icon grid
- [ ] Build Partners section with 3 partner cards, create Reviews section with testimonials
- [ ] Create Contact section with EmailJS form integration, contact info, and Google Maps embed
- [ ] Build Footer with links, social media icons, and copyright information
- [ ] Integrate all components into main page, add smooth scroll, optimize performance, test responsiveness
- [ ] Create placeholder images, write README with deployment instructions, verify GitHub Pages configuration