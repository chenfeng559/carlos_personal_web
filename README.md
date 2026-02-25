# Carlos Personal Website

A personal blog and portfolio website built with Next.js, MDX, Tailwind CSS, and shadcn/ui.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **MDX** - Write blog posts with JSX and Markdown
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful UI components
- **KaTeX** - Math rendering support
- **TypeScript** - Type-safe development

## Features

- **About Page** - Personal introduction, projects, books, and timeline
- **Blog** - MDX-based blog with math formula support
- **Responsive Design** - Mobile-first design
- **Static Export** - Generates static HTML for easy deployment
- **Math Support** - KaTeX for rendering mathematical expressions

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

This generates a static site in the `dist` directory.

## Adding Blog Posts

Add new `.mdx` files to the `content/blog` directory with frontmatter:

```mdx
---
title: "Your Post Title"
date: "2026-02-26"
description: "Brief description of the post"
---

Your content here...
```

### Math in Blog Posts

Use LaTeX syntax for math:

```mdx
Inline math: $E = mc^2$

Block math:
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

## Deployment

The site is configured for static export and can be deployed to any static hosting service:

- Vercel
- GitHub Pages
- Netlify
- AWS S3 + CloudFront

## License

MIT License
