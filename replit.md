# The Energy Factory - Long Khanh

A professional bilingual (English/Vietnamese) Astro website for a hybrid fitness coaching business in Long Khanh City, Dong Nai Province, Vietnam.

## Overview

This is a modern, fast, and responsive website built with Astro 5.x featuring:
- **Bilingual Support**: Full English and Vietnamese translations
- **Hybrid Fitness Focus**: Combines calisthenics and weight training coaching
- **E-commerce Ready**: Product catalog with purchase CTAs (Stripe integration ready)
- **Booking System**: Dedicated booking page (Calendly integration ready)
- **SEO Optimized**: Structured data for local search visibility
- **Mobile-First**: Responsive design optimized for on-the-go users
- **Conversion-Focused**: Clear CTAs, testimonials, and trust-building content
- **Legal Pages**: Privacy Policy and Terms of Service included

## Project Structure

```
/
├── src/
│   ├── components/       # Reusable components
│   │   ├── Navigation.astro
│   │   ├── Footer.astro
│   │   ├── LanguageSwitcher.astro
│   │   ├── SchemaMarkup.astro    # SEO structured data
│   │   └── ServiceSchema.astro   # Service-specific schema
│   ├── i18n/            # Internationalization
│   │   ├── ui.ts        # Translations for EN/VI
│   │   └── utils.ts     # i18n helper functions
│   ├── layouts/
│   │   └── Layout.astro # Main page layout with SEO meta tags
│   └── pages/
│       ├── index.astro      # English homepage (with testimonials)
│       ├── services.astro   # Coaching programs
│       ├── products.astro   # Supplements catalog
│       ├── about.astro      # Coach expertise & philosophy
│       ├── contact.astro    # Lead generation form
│       ├── faq.astro        # Frequently asked questions
│       ├── booking.astro    # Booking page (Calendly ready)
│       ├── privacy.astro    # Privacy Policy
│       ├── terms.astro      # Terms of Service
│       └── vi/              # Vietnamese pages
│           ├── index.astro
│           ├── services.astro
│           ├── products.astro
│           ├── about.astro
│           ├── contact.astro
│           ├── faq.astro
│           └── booking.astro
├── public/
│   └── images/          # Static images
└── astro.config.mjs     # Astro configuration
```

## Recent Changes

- **2025-10-23**: Complete dark mode minimalist redesign across all pages
  - Implemented sleek black/white/cyan color scheme inspired by IronGrind and TRIBE Boxing Gym
  - Added Tailwind CSS v3 for modern styling utilities
  - Integrated Google Fonts: Montserrat (headings) and Roboto (body text)
  - Redesigned all 9 English pages with dark theme
  - Redesigned all 7 Vietnamese pages with matching dark mode styling
  - Updated Navigation and Footer components with neon cyan accents
  - Added dark cards with subtle borders and hover animations
  - Implemented colorful product badges (cyan, pink, green)
- **2025-10-18**: Initial project setup with Astro 5.x
- **2025-10-18**: Implemented bilingual i18n (English/Vietnamese)
- **2025-10-18**: Redesigned for hybrid fitness coaching business
- **2025-10-18**: Added Products/Supplements page with catalog
- **2025-10-18**: Updated all content for calisthenics & weight training focus
- **2025-10-18**: Added comprehensive Schema.org markup for SEO
- **2025-10-18**: Created FAQ page with coaching and supplement questions
- **2025-10-18**: Added Booking page (ready for Calendly integration)
- **2025-10-18**: Created Privacy Policy and Terms of Service pages
- **2025-10-18**: Added testimonials section to homepage
- **2025-10-18**: Updated navigation and footer with all new pages

## Technology Stack

- **Framework**: Astro 5.14.6
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v3 + Scoped CSS (component-level)
- **Fonts**: Google Fonts (Montserrat, Roboto)
- **i18n**: Custom implementation with Astro's built-in routing
- **SEO**: Schema.org JSON-LD markup, Open Graph, Twitter Cards
- **Deployment**: Replit Autoscale (static site)
- **Payment Ready**: Stripe integration blueprint available
- **Booking Ready**: Calendly embed placeholder included

## Development

### Running Locally
```bash
npm run dev
```
Server runs on `http://0.0.0.0:5000`

### Building for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Pages

### English Version
- `/` - Homepage (Hybrid Fitness Focus + Testimonials)
- `/services` - Coaching programs (Calisthenics, Weight Training, Hybrid, Nutrition)
- `/products` - Premium supplements catalog
- `/about` - Coach expertise and hybrid fitness philosophy
- `/contact` - Lead generation form with fitness goals
- `/faq` - Frequently asked questions about coaching and products
- `/booking` - Book free consultation (Calendly integration ready)
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service

### Vietnamese Version
- `/vi` - Trang Chủ (với Đánh Giá Học Viên)
- `/vi/services` - Dịch Vụ Huấn Luyện
- `/vi/products` - Thực Phẩm Bổ Sung
- `/vi/about` - Về Chúng Tôi
- `/vi/contact` - Liên Hệ
- `/vi/faq` - Câu Hỏi Thường Gặp
- `/vi/booking` - Đặt Lịch Tư Vấn
- `/privacy` - Chính Sách Bảo Mật (English only)
- `/terms` - Điều Khoản Dịch Vụ (English only)

## Business Information

**The Energy Factory** is a hybrid fitness coaching business specializing in calisthenics and weight training in Long Khanh City, Dong Nai Province, Vietnam.

### Services Offered
1. **Calisthenics Mastery** - Bodyweight training (pull-ups, dips, planches, muscle-ups)
2. **Weight Training** - Progressive strength training with barbells, dumbbells, and machines
3. **Hybrid Coaching** - Personalized programs combining calisthenics and weights
4. **Nutrition Coaching** - Custom meal plans and eating strategies
5. **Premium Supplements** - Protein powders, pre-workouts, BCAAs, recovery aids

### Target Audience
- **Age Range**: 18-45 years old
- **Experience**: Beginners to advanced fitness enthusiasts
- **Goals**: Build strength, endurance, muscle mass, and healthy habits
- **Training Style**: Hybrid approach combining functional bodyweight movements with traditional weight training

### Location
Long Khanh City, Dong Nai Province, Vietnam

### Operating Hours
- Monday-Friday: 6:00 AM - 9:00 PM
- Saturday: 7:00 AM - 8:00 PM
- Sunday: 8:00 AM - 6:00 PM

## User Preferences

- Business focus: Hybrid fitness coaching (calisthenics + weight lifting) + supplement sales
- Target audience: Fitness enthusiasts aged 18-45 in Long Khanh and Dong Nai Province
- Languages: English and Vietnamese (equal importance)
- Design style: Dark mode minimalist, intense and powerful aesthetic
- Color scheme: Black background (#000000), white text (#FFFFFF), neon cyan accents (#00FFFF)
- Design inspiration: IronGrind, TRIBE Boxing Gym - intense fitness brands
- Typography: Montserrat (bold headings), Roboto (clean body text)
- Conversion goals: Generate coaching clients and supplement buyers
- Mobile-first: Many users access on the go

## Next Steps (Optional Enhancements)

### E-commerce Integration
- Add Stripe payment processing for supplement purchases
- Implement shopping cart functionality
- Set up order confirmation emails

### Booking System
- Integrate Calendly for automated booking
- Or implement custom booking with Google Calendar API

### Blog/Resources
- Set up Astro content collections for blog posts
- Create downloadable guides (workout PDFs, meal planners)
- Write articles about hybrid fitness training

### Advanced Features
- User authentication for member-only content
- Progress tracking dashboard for coaching clients
- Email marketing integration (Mailchimp/ConvertKit)
- Video content library

## Deployment Configuration

- **Target**: Autoscale (static site)
- **Build**: `npm run build`
- **Output**: `dist/` directory
- **Port**: 5000

## GitHub Repository

https://github.com/imnotkhoanguyen/energy-factory-longkhanh

To push updates:
```bash
bash git-push.sh
```
