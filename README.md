# ProDev - Product Development Services

A modern, responsive Next.js application for a product development services company. This application showcases comprehensive product development capabilities with a clean, professional design.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Built with Tailwind CSS for a clean, professional look
- **Interactive Components**:
  - Project carousel with navigation
  - FAQ accordion sections
  - Animated scrolling logos
  - Video testimonials
- **Modular Architecture**: Well-organized component structure for easy maintenance
- **Performance Optimized**: Built with Next.js for optimal performance

## Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Font**: Montserrat from Google Fonts
- **Icons**: Custom SVG icons
- **Animations**: CSS animations for scrolling effects

## Project Structure

```
src/
├── app/                    # Next.js app directory
├── components/
│   ├── layout/            # Header, Footer components
│   ├── sections/          # Page sections (Hero, About, etc.)
│   └── ui/               # Reusable UI components
├── data/                 # Static data and constants
└── styles/              # Global styles and animations
```

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd productdevelopmentservices
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Key Sections

- **Hero Section**: Compelling introduction with product mockups
- **Video Testimonials**: Client testimonials in video format
- **Backed By**: Partner logos and credibility indicators
- **How It Works**: Service explanation with team flexibility
- **Projects Carousel**: Showcase of completed projects
- **Our Process**: Step-by-step development process
- **Tech Stack**: Technologies and services offered
- **Testimonials**: Client feedback and reviews
- **FAQ**: Frequently asked questions
- **Contact**: Contact form and company information

## Customization

The application is highly customizable:

- Update company information in `src/data/constants.ts`
- Modify styling in `src/app/globals.css` and component files
- Add or remove sections by editing `src/app/page.tsx`
- Update images and assets in the `public/` directory

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is open source and available under the [MIT License](LICENSE).
