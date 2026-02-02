# Army of One Studio - Website

A modern, lightweight, responsive website for Army of One Studio - an indie game studio focused on colorful, creative, and accessible experiences.

## 🎨 Design Philosophy

- **Warm & Playful**: Colorful gradients, soft animations, and friendly typography
- **Minimalist but Expressive**: Clean layout with creative touches
- **Mobile-First**: Fully responsive design that works on all devices
- **Performance-Focused**: Lightweight code with smooth animations

## 🚀 Getting Started

### Local Development

1. **Clone or download** this repository
2. **Open** `index.html` in your web browser
   - Or use a local server for best results:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```
3. **Visit** `http://localhost:8000` in your browser

### File Structure

```
army-of-one-studio/
├── index.html      # Main HTML structure
├── styles.css      # All styling and animations
├── script.js       # Interactive elements and scroll effects
└── README.md       # This file
```

## 📝 Customization

### Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --color-primary: #FF6B9D;
    --color-secondary: #4ECDC4;
    --color-accent: #FFE66D;
    /* ... more colors */
}
```

### Content

- **Game Title**: Update in the "Featured Game" section
- **Game Description**: Modify the game description text
- **Social Links**: Update the `href` attributes in the footer
- **Steam Link**: Replace the placeholder in the CTA button

### Placeholder Assets

The site uses CSS gradients as placeholders for:
- Video trailer (replace with actual video embed)
- Screenshots (replace with actual game screenshots)

To add real images:
1. Create an `images/` folder
2. Add your images
3. Update the CSS background properties or use `<img>` tags

## 🎯 Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll animations
- ✅ Floating bubble animations
- ✅ Interactive hover effects
- ✅ Accessible keyboard navigation
- ✅ Performance optimized
- ✅ SEO-friendly structure

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚢 Deployment

### Static Hosting Options

1. **Netlify**
   - Drag and drop the folder
   - Or connect your Git repository

2. **Vercel**
   - Install Vercel CLI: `npm i -g vercel`
   - Run: `vercel`

3. **GitHub Pages**
   - Push to GitHub
   - Enable GitHub Pages in repository settings

4. **Any Static Host**
   - Upload all files to your hosting provider
   - No build step required!

## 🎨 Design Assets

### Typography
- **Font**: Nunito (loaded from Google Fonts)
- **Fallback**: System fonts

### Color Palette
- Primary Pink: `#FF6B9D`
- Secondary Teal: `#4ECDC4`
- Accent Yellow: `#FFE66D`
- Soft Green: `#A8E6CF`
- Light Pink: `#FFB3BA`
- Sky Blue: `#BAE1FF`

## 📄 License

This website is created for Army of One Studio. All rights reserved.

## 🤝 Support

For questions or customization help, refer to the code comments or reach out to the developer.

---

**Made with care** ❤️
