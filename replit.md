# The Energy Factory - Long Khanh

A professional bilingual (English/Vietnamese) Astro website for a healthy lifestyle coaching business located in Long Khanh City, Dong Nai Province, Vietnam.

## Overview

This is a modern, fast, and responsive website built with Astro 5.x featuring:
- **Bilingual Support**: Full English and Vietnamese translations
- **5 Pages**: Homepage, Services, Locations, About, and Contact
- **SEO Optimized**: Static site generation for best performance
- **Responsive Design**: Beautiful on all devices

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
│       ├── services.astro
│       ├── locations.astro
│       ├── about.astro
│       ├── contact.astro
│       └── vi/          # Vietnamese pages
│           ├── index.astro
│           ├── services.astro
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
- **2025-10-18**: Created all 5 pages in both languages
- **2025-10-18**: Added responsive navigation and footer components
- **2025-10-18**: Configured for deployment on Replit
- **2025-10-18**: Added comprehensive Schema.org markup (JSON-LD) for SEO
  - HealthAndBeautyBusiness schema with business details
  - Complete service catalog (Nutrition, Fitness, Lifestyle coaching)
  - OpeningHours, GeoCoordinates, and local business information
  - WebSite schema with language alternatives
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
- `/` - Homepage
- `/services` - Services page
- `/locations` - Locations page  
- `/about` - About page
- `/contact` - Contact page

### Vietnamese Version
- `/vi` - Homepage (Trang Chủ)
- `/vi/services` - Services page (Dịch Vụ)
- `/vi/locations` - Locations page (Địa Điểm)
- `/vi/about` - About page (Về Chúng Tôi)
- `/vi/contact` - Contact page (Liên Hệ)

## Business Information

**The Energy Factory** is a healthy lifestyle coaching business serving Long Khanh City and surrounding areas in Dong Nai Province, Vietnam.

### Services Offered
1. **Nutrition Coaching** - Personalized meal plans and nutrition guidance
2. **Fitness Training** - Customized workout programs
3. **Lifestyle Coaching** - Holistic wellness including stress management

### Location
Long Khanh City, Dong Nai Province, Vietnam

### Operating Hours
- Monday-Friday: 6:00 AM - 9:00 PM
- Saturday: 7:00 AM - 8:00 PM
- Sunday: 8:00 AM - 6:00 PM

## User Preferences

- Business focus: Healthy lifestyle coaching
- Target audience: Residents of Long Khanh and Dong Nai Province
- Languages: English and Vietnamese (equal importance)
- Design style: Modern, clean, and professional
- Color scheme: Purple gradient (primary), white (accent)

## Deployment Configuration

- **Target**: Autoscale (static site)
- **Build**: `npm run build`
- **Serve**: `npx serve dist -l 5000`
- **Port**: 5000
