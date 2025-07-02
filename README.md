# MyParentsBenefit

A modern, comprehensive platform supporting families with resources, guidance, and community connections. Built with cutting-edge web technologies and following the Master Design Guide principles.

## 🚀 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.2.0 | UI Framework |
| **Next.js** | 14.1.0 | Full-stack Framework with App Router |
| **TypeScript** | 5.4.4 | Type Safety |
| **Tailwind CSS** | 3.4.1 | Styling & Design System |
| **Framer Motion** | Latest | Animations & Micro-interactions |
| **next-themes** | Latest | Dark/Light Mode Support |

## ✨ Features

### 🎨 Design System
- **Modern UI Components**: Button, Card, Typography, Container, Grid
- **Responsive Design**: Mobile-first approach with breakpoint system
- **Dark Mode**: Seamless theme switching with system preference detection
- **Advanced Animations**: Smooth transitions and micro-interactions
- **Accessibility**: WCAG compliant components with proper ARIA labels

### 🚀 Performance
- **Next.js 14**: Latest App Router with enhanced performance
- **Image Optimization**: Automatic WebP/AVIF conversion and responsive images
- **Font Optimization**: Google Fonts with display:swap
- **Core Web Vitals**: Optimized for LCP, CLS, and FID metrics

### 🎯 SEO Ready
- **Metadata API**: Comprehensive SEO configuration
- **Open Graph**: Social media optimization
- **Structured Data**: Schema.org implementation ready
- **Sitemap**: Automatic generation support

## 🛠️ Getting Started

### Prerequisites
- Node.js 18.0 or later
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── Button.tsx     # Button component with variants
│   │   ├── Card.tsx       # Card components with elevation
│   │   ├── Typography.tsx # Typography system
│   │   └── ThemeToggle.tsx # Dark/light mode toggle
│   └── layout/            # Layout components
│       ├── Container.tsx  # Responsive container
│       └── Grid.tsx       # Responsive grid system
├── providers/             # React context providers
│   └── ThemeProvider.tsx  # Theme context provider
└── lib/
    └── utils.ts           # Utility functions
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue-based palette for branding
- **Semantic**: Success, warning, error colors
- **Neutral**: Comprehensive gray scale for text and backgrounds

### Typography
- **Primary Font**: Inter (system fallback)
- **Display Font**: Playfair Display for headings
- **Responsive Scaling**: Fluid typography across breakpoints

### Components
All components follow these principles:
- **TypeScript**: Full type safety
- **Variants**: Multiple style variants
- **Responsive**: Mobile-first design
- **Accessible**: ARIA labels and keyboard navigation
- **Dark Mode**: Automatic theme support

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Deploy to Vercel
npm run build
vercel --prod
```

### Other Platforms
The app can be deployed to any platform supporting Next.js:
- Netlify
- Railway
- Digital Ocean App Platform
- AWS Amplify

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built following the Master Design Guide principles
- Inspired by modern web design patterns
- Optimized for 2025 web standards
