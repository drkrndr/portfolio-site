# Richard Nyjai Walls - Portfolio Website

A modern, responsive portfolio website showcasing freelance development projects and services. Built with Svelte, TypeScript, and Tailwind CSS.

## 🚀 Live Site

**Production:** [https://drkrndr.github.io/portfolio-site/](https://drkrndr.github.io/portfolio-site/)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)

## ✨ Features

- **Responsive Design** - Optimized for all device sizes
- **Dark/Light Mode** - Theme toggle with system preference detection
- **Modern UI** - Clean, professional design using Tailwind CSS
- **Performance Optimized** - Built with Vite for fast loading
- **SEO Friendly** - Proper meta tags and semantic HTML
- **Portfolio Showcase** - Interactive project gallery
- **Contact Form** - Direct client communication
- **Type Safe** - Built with TypeScript for reliability

## 🛠 Tech Stack

- **Framework:** [Svelte](https://svelte.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Icons:** [Lucide Svelte](https://lucide.dev/)
- **Deployment:** [GitHub Pages](https://pages.github.com/)

## 📁 Project Structure

```
freelance-portfolio/
├── src/                    # Source files
│   ├── components/         # Reusable Svelte components
│   ├── lib/               # Utility functions and stores
│   ├── App.svelte         # Main app component
│   ├── main.ts            # Application entry point
│   └── app.css            # Global styles
├── public/                 # Static assets (images, icons)
├── dist/                   # Production build output
├── index.html             # HTML template (development)
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── svelte.config.js       # Svelte configuration
├── postcss.config.js      # PostCSS configuration
└── package.json           # Dependencies and scripts
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/drkrndr/portfolio-site.git
   cd portfolio-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Development Workflow

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Make your changes** in the `src/` directory

3. **The site will auto-reload** with your changes

4. **Build for production** when ready:
   ```bash
   npm run build
   ```

### Adding New Projects

1. Add project images to `public/` directory
2. Update the projects data in your Svelte components
3. Follow the existing project structure for consistency

### Customizing Styles

- **Global styles:** Edit `src/app.css`
- **Component styles:** Use Tailwind classes in Svelte components
- **Theme customization:** Modify `tailwind.config.js`

## 🚀 Deployment

### Automatic Deployment (Recommended)

This project is set up for automatic deployment to GitHub Pages:

1. **Push changes to main branch:**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **GitHub Pages will automatically build and deploy** your site

### Manual Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy the `dist/` folder** to your hosting provider

### GitHub Pages Setup

1. Go to repository **Settings → Pages**
2. Set **Source** to "Deploy from a branch"
3. Select **Branch:** `main`
4. Select **Folder:** `/ (root)`
5. Save and wait for deployment

## 📝 Configuration

### Environment Variables

Create a `.env.local` file for local environment variables:

```env
# Add any environment variables here
```

### Tailwind CSS

Customize the design system in `tailwind.config.js`:

```js
module.exports = {
  // Your customizations
  theme: {
    extend: {
      colors: {
        // Custom colors
      }
    }
  }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Richard Nyjai Walls**
- Website: [https://drkrndr.github.io/portfolio-site/](https://drkrndr.github.io/portfolio-site/)
- GitHub: [@drkrndr](https://github.com/drkrndr)

---

⭐ **Star this repo** if you find it helpful!