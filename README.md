# Vishwaa's Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. This portfolio showcases projects, skills, and provides a way for potential clients and employers to get in touch.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Fast Performance**: Optimized for speed and SEO
- **Interactive Contact Form**: Functional contact form with validation
- **Project Showcase**: Featured projects with detailed descriptions
- **SEO Optimized**: Meta tags, sitemap, and robots.txt included
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## 📁 Project Structure

```
├── app/
│   ├── about/           # About page
│   ├── contact/         # Contact page with form
│   ├── projects/        # Projects showcase
│   ├── globals.css      # Global styles and animations
│   ├── layout.tsx       # Root layout with navigation
│   ├── page.tsx         # Home page
│   ├── robots.ts        # SEO robots configuration
│   └── sitemap.ts       # SEO sitemap
├── components/
│   └── Navigation.tsx   # Navigation component
├── public/              # Static assets
└── package.json
```

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React 19** - Latest React features
- **Geist Fonts** - Modern typography

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd personal-site
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Personal Information

1. **Contact Information**: Update contact details in `app/contact/page.tsx`
2. **About Content**: Modify the about section in `app/about/page.tsx`
3. **Projects**: Add your projects in `app/projects/page.tsx`
4. **SEO**: Update metadata in `app/layout.tsx`

### Styling

- Colors and themes can be customized in `app/globals.css`
- Tailwind configuration can be modified in `tailwind.config.js`
- Custom animations are defined in `app/globals.css`

### Adding Projects

Edit the `projects` array in `app/projects/page.tsx`:

```typescript
const projects = [
  {
    title: "Your Project Title",
    description: "Project description...",
    technologies: ["React", "Next.js", "TypeScript"],
    image: "/path/to/image.jpg",
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/yourusername/project",
    featured: true
  }
];
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📊 Performance

- **Lighthouse Score**: Optimized for 90+ scores
- **Core Web Vitals**: Excellent performance metrics
- **SEO**: Fully optimized for search engines
- **Accessibility**: WCAG compliant

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any issues or have suggestions, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have any questions or need help customizing your portfolio, feel free to reach out!

---

Built with ❤️ by Vishwaa
