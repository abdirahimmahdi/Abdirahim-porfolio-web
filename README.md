# Abdirahim Omar Mahdi - Portfolio Website

A modern, responsive portfolio website showcasing industrial engineering skills, experience, and projects. Built with vanilla HTML, CSS, and JavaScript for optimal performance and maintainability.

## 🚀 Features

- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Clean, professional design with smooth animations
- **SEO Optimized**: Proper meta tags, Open Graph, and Twitter Card support
- **Contact Form**: Integrated with Formspree for easy message handling
- **Data-Driven**: JSON-based content management for easy updates
- **GitHub Pages Ready**: Automated deployment via GitHub Actions
- **Performance Optimized**: Minimal dependencies, fast loading

## 📁 Project Structure

```
abdirahim-portfolio/
├── index.html              # Main portfolio page
├── resume.html             # Resume/CV page with PDF embed
├── assets/
│   ├── css/
│   │   ├── styles.css      # Main CSS (imports modular files)
│   │   ├── base.css        # Variables, reset, typography
│   │   ├── components.css  # Reusable components
│   │   ├── layout.css      # Layout and responsive styles
│   │   └── animations.css  # Animations and effects
│   ├── js/
│   │   ├── main.js         # Main application logic
│   │   └── data-loader.js  # Data loading utilities
│   ├── data/               # JSON data files
│   │   ├── personal.json   # Personal information
│   │   ├── skills.json     # Skills data
│   │   ├── experience.json # Work experience
│   │   └── education.json  # Education details
│   └── images/             # Assets (favicon, social media)
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Pages deployment
├── package.json            # Project configuration
└── README.md              # This file
```

## 🛠️ Development

### Prerequisites

- Node.js (for local development tools)
- Git
- A modern web browser

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/abdirahimmahdi/abdirahimmahdi.github.io.git
   cd abdirahimmahdi.github.io
   ```

2. **Install dependencies** (optional, for build tools)
   ```bash
   npm install
   ```

3. **Start local server**
   ```bash
   npm run serve
   ```
   Then open http://localhost:8000 in your browser.

### Making Changes

#### Content Updates (Easy)
Most content can be updated by editing JSON files in `assets/data/`:

- **`personal.json`**: Name, bio, contact info, social links
- **`skills.json`**: Skills with proficiency levels
- **`experience.json`**: Work experience and internships
- **`education.json`**: Education details and courses

#### Style Changes (Moderate)
- **Colors**: Edit CSS variables in `assets/css/base.css`
- **Layout**: Modify styles in `assets/css/layout.css`
- **Components**: Update component styles in `assets/css/components.css`

#### Structure Changes (Advanced)
- HTML structure modifications require updates in both HTML files and JavaScript data loaders

## 🎨 Customization

### Colors & Branding
Edit the CSS variables in `assets/css/base.css`:
```css
:root {
  --brand: #6ee7ff;      /* Primary brand color */
  --brand-2: #7c7bff;    /* Secondary brand color */
  --accent: #32d6a0;     /* Accent color */
  --bg: #0b0f18;         /* Background */
  --text: #e7ecf3;       /* Text color */
  /* ... more variables */
}
```

### Adding New Sections
1. Add HTML structure to `index.html`
2. Add corresponding CSS styles to appropriate CSS files
3. If data-driven, create JSON file and update `data-loader.js`

### Form Configuration
The contact form uses Formspree. To set up:
1. Go to [formspree.io](https://formspree.io)
2. Create a new form
3. Replace the `action` URL in `index.html` with your Formspree URL

## 🚀 Deployment

### GitHub Pages (Automatic)
The site is automatically deployed to GitHub Pages when pushing to the `main` branch.

### Manual Deployment
1. **Build** (if needed): `npm run build`
2. **Deploy**: Push to GitHub or use GitHub Pages settings

## 🔧 Troubleshooting

### Common Issues

**Form not working**
- Check Formspree configuration
- Verify form `action` URL in HTML

**Styles not loading**
- Ensure CSS imports are correct
- Check file paths in HTML

**JavaScript errors**
- Verify JSON data files exist and are valid
- Check browser console for errors

**GitHub Pages not updating**
- Wait a few minutes for deployment
- Check GitHub Actions tab for errors
- Verify repository settings

### Performance Tips
- Images are served as SVG for scalability
- CSS is modular for better caching
- Minimal JavaScript dependencies

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

MIT License - feel free to use this template for your own portfolio.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or issues:
- Create an issue on GitHub
- Contact via the website contact form
- Connect on LinkedIn

---

**Built with ❤️ by Abdirahim Omar Mahdi**
