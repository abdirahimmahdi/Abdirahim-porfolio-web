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

### 📸 assets/images Directory
Purpose: Stores visual assets for branding and social sharing

- Professional Branding: Custom favicon (favicon.svg) makes your site look polished in browser tabs
- Social Media Ready: og-image.svg creates attractive previews when your portfolio is shared on LinkedIn, Twitter, etc.
- Mobile Optimization: apple-touch-icon.svg provides a custom icon when someone saves your site to their iOS home screen
- SEO Benefits: Social media meta tags reference these images for better link previews


### Form Configuration
The contact form uses Formspree. To set up:
1. Go to [formspree.io](https://formspree.io)
2. Create a new form
3. Replace the `action` URL in `index.html` with your Formspree URL

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



## 📞 Support

For questions or issues:
- Create an issue on GitHub
- Contact via the website contact form
- Connect on LinkedIn

---

**Built with ❤️ by Abdirahim Omar Mahdi**
