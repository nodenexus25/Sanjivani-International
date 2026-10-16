# Horizon Global School — Multi-Page School Website

A production-ready, multi-page school website built with **React 18 + Vite + React Router v6**. Placeholder branding ("Horizon Global School") with realistic filler content and royalty-free placeholder images only.

---

## Tech Stack

- **React 18** + **Vite 5**
- **React Router v6** with code-split lazy routes (`React.lazy` + `Suspense`)
- **CSS Modules** for component scoping
- **CSS custom properties** (`:root` tokens) for theming — primary `#7A1F2B` / accent `#C8A14B`
- No UI kit; dependency-light
- Google Fonts: Playfair Display (headings) + Inter (body)

---

## Setup & Run

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build → ./dist
npm run build

# Preview production build
npm run preview
```

---

## Full Route List

### Home
- `/` — Home (hero slider, facilities, principal's message, key facts, news, birthdays, circulars, events, awards, testimonials)

### About
- `/about` — About Us
- `/mission-vision` — Mission & Vision
- `/founder-message` — Founder's Message
- `/chairperson-message` — Chairperson's Message
- `/principal-message` — Principal's Message

### Academics
- `/pre-primary` — Pre-Primary
- `/primary` — Primary (Grades I–V)
- `/middle` — Middle School (VI–VIII)
- `/learning-environment` — Learning Environment
- `/faculty` — Faculty directory
- `/beyond-academics` — Co-curricular activities
- `/skill-lab` — Skill / Robotics Lab
- `/alumni` — Alumni

### Admissions
- `/admission-process` — 6-step admission process + documents
- `/online-registration` — Full enquiry/registration form
- `/fee-structure` — Fee table (grade-wise)
- `/admission-form` — Downloadable forms (PDF links)

### Infrastructure
- `/robotics` — Robotics Lab
- `/music-dance` — Music & Dance
- `/library` — Library
- `/art-room` — Art Room
- `/sports` — Sports & Athletics
- `/computer-lab` — Computer Lab
- `/smart-classroom` — Smart Classrooms

### Gallery
- `/photo-gallery` — Filterable photo grid + lightbox
- `/video-gallery` — Video embeds
- `/virtual-tour` — Full-screen iframe placeholder

### Media / Info
- `/downloads` — Download center (forms & docs)
- `/newsletter` — Newsletter signup + archives
- `/disclosure` — Public disclosures
- `/career` — Job list + application form
- `/contact` — Map + contact form

### Events / News
- `/recent-events` — Past events
- `/upcoming-events` — Upcoming events
- `/blog` — Blog list
- `/blog/:slug` — Blog detail
- `/news` — News
- `/circulars` — Circulars

### Other
- `*` — 404 Not Found

---

## Shared Layout (every page)

- **Utility bar** (top): phone, email, social icons (FB, X, YouTube, Instagram), "Enquire Now" + "Online Registration" buttons
- **Sticky header**: logo + horizontal mega-menu (About / Academics / Admissions / Infrastructure / Gallery / Media / Events & News) — shrinks on scroll
- **Mobile**: hamburger → slide-in drawer with accordion submenus
- **Breadcrumb** on every inner page
- **Footer**: quick links, contact block, newsletter signup, social icons, copyright
- **Floating enquiry tab** (right edge) that slides open an enquiry panel
- **On-load enquiry popup modal** — shown once per visitor (`localStorage`)

---

## Reusable Components

`Layout, Header, UtilityBar, MegaMenu, MobileDrawer, Breadcrumb, Footer, HeroSlider, Carousel, StatCounter, Card, SectionHeading, NewsCard, EventCard, CircularItem, GalleryGrid, Lightbox, VideoEmbed, FeeTable, EnquiryForm, ContactForm, CareerForm, Modal, FloatingEnquiryTab, Button, PageHero, PageLoader, Icon`

---

## Key Interactions

- **Sliders / Carousels**: auto-advance + manual arrows + dots (pause on hover)
- **Gallery**: category filter + click-to-open lightbox (prev/next + keyboard)
- **Stat counters**: animate on scroll into view (`IntersectionObserver`)
- **Sticky-shrink header**, mobile drawer toggle, popup-once modal
- **Forms**: client-side validation with inline errors; submit `console.log`s the payload (marked `TODO` where a real endpoint connects)
- Full keyboard navigation, visible focus states, ARIA roles, semantic HTML5, `prefers-reduced-motion` support

---

## Project Structure

```
src/
├── components/        # Reusable UI components (+ .module.css)
├── pages/             # Route page components (+ .module.css)
├── data/              # Editable content modules (JS)
│   ├── navigation.js, heroSlides.js, facilities.js, keyFacts.js
│   ├── faculty.js, news.js, events.js, circulars.js
│   ├── testimonials.js, blog.js, fees.js, gallery.js, downloads.js
│   └── siteInfo.js
├── hooks/             # useInView, useScrollPosition, useForm
├── styles/
│   ├── tokens.css     # Theme tokens (colors, spacing, radius, shadows, fonts)
│   └── global.css     # Reset + base + utilities
├── App.jsx            # Router (lazy-loaded routes)
└── main.jsx           # Entry point
public/
└── favicon.svg
index.html
vite.config.js
package.json
```

---

## Content Replacement Checklist

All editable content lives in `/src/data` as plain JS modules — swap values in one place:

1. **Branding & contact** → `src/data/siteInfo.js` (school name, address, phone, email, social, map embed)
2. **Navigation** → `src/data/navigation.js` (mega-menu groups & links)
3. **Hero slides** → `src/data/heroSlides.js` (images, titles, CTAs)
4. **Facilities cards** → `src/data/facilities.js` (icons, titles, blurbs, links)
5. **Key facts / counters** → `src/data/keyFacts.js`
6. **Faculty** → `src/data/faculty.js` (names, roles, bios, images)
7. **News** → `src/data/news.js`
8. **Events** → `src/data/events.js` (use `type: 'recent' | 'upcoming'`)
9. **Circulars** → `src/data/circulars.js`
10. **Testimonials** → `src/data/testimonials.js`
11. **Blog posts** → `src/data/blog.js` (slug determines `/blog/:slug` URL)
12. **Fee structure** → `src/data/fees.js`
13. **Gallery photos** → `src/data/gallery.js` (categories filter)
14. **Downloads** → `src/data/downloads.js`
15. **Theme colors / fonts / spacing** → `src/styles/tokens.css`
16. **Images**: replace Unsplash URLs in data files with your own `/public/images/...` paths
17. **Logo**: edit `LogoMark` SVG in `src/components/Header.jsx`

### Connecting a real backend

- Enquiry form → `src/components/EnquiryForm.jsx` (replace `console.log` with `fetch('/api/enquiry', …)`)
- Contact form → `src/components/ContactForm.jsx`
- Career form → `src/components/CareerForm.jsx` (add file upload handling for resume)

---

## Performance & Accessibility

- Route-level code splitting (lazy routes)
- `loading="lazy"` on below-the-fold images
- Explicit image dimensions / aspect ratios to prevent layout shift
- Semantic HTML5, ARIA roles, `:focus-visible` states
- `prefers-reduced-motion` respected
- Lighthouse-friendly structure
