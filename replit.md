# The Energy Factory - Long Khanh

A professional bilingual (English/Vietnamese) Astro website for a hybrid fitness coaching business in Long Khanh City, Dong Nai Province, Vietnam.

## Overview

This is a modern, fast, and responsive website built with Astro 5.x featuring:
- **Bilingual Support**: Full English and Vietnamese translations
- **Hybrid Fitness Focus**: Combines calisthenics and weight training coaching
- **E-commerce Integration**: Premium supplements catalog
- **SEO Optimized**: Structured data for local search visibility
- **Mobile-First**: Responsive design optimized for on-the-go users
- **Conversion-Focused**: Clear CTAs for coaching and supplement sales

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
│       ├── index.astro  # English homepage
│       ├── services.astro  # Coaching programs
│       ├── products.astro  # Supplements catalog
│       ├── locations.astro # Long Khanh location
│       ├── about.astro     # Coach expertise & philosophy
│       ├── contact.astro   # Lead generation form
│       └── vi/          # Vietnamese pages
│           ├── index.astro
│           ├── services.astro
│           ├── products.astro
│           ├── locations.astro
│           ├── about.astro
│           └── contact.astro
├── public/
│   └── images/          # Static images
└── astro.config.mjs     # Astro configuration
```

## Recent Changes

- **2025-10-18**: Initial project setup with Astro 5.x
- **2025-10-18**: Implemented bilingual i18n (English/Vietnamese)
- **2025-10-18**: Redesigned for hybrid fitness coaching business
- **2025-10-18**: Added Products/Supplements page
- **2025-10-18**: Updated all content for calisthenics & weight training focus
- **2025-10-18**: Added comprehensive Schema.org markup for SportsActivityLocation
  - Hybrid fitness business schema
  - Service catalog (Calisthenics, Weight Training, Hybrid Coaching)
  - Product catalog (Supplements)
  - Target audience: 18-45 fitness enthusiasts
  - SEO meta tags (Open Graph, Twitter Cards, keywords)

## Technology Stack

- **Framework**: Astro 5.14.6
- **Language**: TypeScript (strict mode)
- **Styling**: Scoped CSS (component-level)
- **i18n**: Custom implementation with Astro's built-in routing
- **SEO**: Schema.org JSON-LD markup, Open Graph, Twitter Cards
- **Deployment**: Replit Autoscale

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
- `/` - Homepage (Hybrid Fitness Focus)
- `/services` - Coaching programs (Calisthenics, Weight Training, Hybrid, Nutrition)
- `/products` - Premium supplements catalog
- `/locations` - Long Khanh training location
- `/about` - Coach expertise and hybrid fitness philosophy
- `/contact` - Lead generation form with fitness goals

### Vietnamese Version
- `/vi` - Trang Chủ
- `/vi/services` - Dịch Vụ Huấn Luyện
- `/vi/products` - Thực Phẩm Bổ Sung
- `/vi/locations` - Địa Điểm
- `/vi/about` - Về Chúng Tôi
- `/vi/contact` - Liên Hệ

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
- Design style: Professional yet approachable, action-oriented
- Color scheme: Purple gradient (primary), white (accent)
- Conversion goals: Generate coaching clients and supplement buyers
- Mobile-first: Many users access on the go

## Deployment Configuration

- **Target**: Autoscale (static site)
- **Build**: `npm run build`
- **Serve**: `npx serve dist -l 5000`
- **Port**: 5000

## GitHub Repository

https://github.com/imnotkhoanguyen/energy-factory-longkhanh

To push updates:
```bash
bash git-push.sh
```
