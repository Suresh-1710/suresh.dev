# Suresh Narasimhan | Portfolio

My personal portfolio website, built with React and Vite.

**Live site:** [suresh.dev](https://sureshnarasimhan.vercel.app/) <!-- update with actual URL -->

## Features

- Hero, About, Skills, Experience, and Contact sections
- Dedicated Projects page with detailed write-ups
- Blog page for sharing updates and milestones
- Dark/light theme toggle
- Contact form (EmailJS-backed, with a `mailto:` fallback)
- Fully responsive, SEO-ready (Open Graph, sitemap, robots.txt)

## Tech Stack

- [React](https://react.dev/) + [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) for client-side routing
- [EmailJS](https://www.emailjs.com/) for the contact form
- Plain CSS with CSS variables for theming

## Getting Started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

### Other scripts

```bash
npm run build    # production build to dist/
npm run preview  # preview the production build locally
npm run lint     # run the linter
```

### Environment variables

To enable real email delivery on the contact form, copy `.env.example` to `.env` and fill in your [EmailJS](https://www.emailjs.com/) credentials:

```bash
cp .env.example .env
```

Without these set, the contact form falls back to opening a `mailto:` link.

## Project Structure

```
src/
  components/   # Reusable UI sections (Navbar, Hero, Skills, etc.)
  pages/        # Route-level pages (Projects, Blog, 404)
  data/         # Project content data
  hooks/        # Custom hooks (theme toggle)
  index.css     # Global styles and theme variables
public/         # Static assets (images, resume, robots.txt, sitemap.xml)
```

## Contact

- Email: suresh171005@gmail.com
- LinkedIn: [suresh-narasimhan](https://www.linkedin.com/in/suresh-narasimhan-1203aa369)
- GitHub: [Suresh-1710](https://github.com/Suresh-1710)
