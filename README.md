# ED24 Education Institute - Website Redesign

Modern, responsive single-page website for ED24 Education Institute - Bopal's oldest and trusted skill development center.

## 🎨 Features

- **Modern Design**: Clean, minimal design with smooth animations
- **Fully Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Static export, optimized for GitHub Pages
- **Smooth Animations**: Powered by Framer Motion
- **Contact Integration**: WhatsApp integration and contact form
- **Accessible**: WCAG compliant design

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: EmailJS (ready for integration)
- **Deployment**: GitHub Pages (static export)

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ed24-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Build for Production

Build the static site:
```bash
npm run build
```

The output will be in the `/out` folder, ready for deployment.

## 🚀 Deploy to GitHub Pages

1. Push your code to a GitHub repository

2. Go to Repository Settings → Pages

3. Set Source to "GitHub Actions" (for automatic deployment) or "Deploy from a branch"

4. If deploying from branch:
   - Select branch: `main`
   - Select folder: `/out`

5. Your site will be live at: `https://yourusername.github.io/repository-name`

### Alternative: Manual Deployment

```bash
npm run build
cd out
git init
git add -A
git commit -m "Deploy website"
git push -f git@github.com:yourusername/your-repo.git main:gh-pages
```

## ⚙️ Configuration

### Update Brand Colors

Edit `tailwind.config.js` to customize colors:
```javascript
colors: {
  'ed24-purple': '#60311F',
  'ed24-orange': '#FABB38',
  'ed24-khaki': '#F1DC8D',
  'ed24-brown': '#60311F',
}
```

### Setup EmailJS (Optional)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Get your Service ID, Template ID, and Public Key
3. Update the contact form in `components/Contact.tsx`

```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_PUBLIC_KEY')
```

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx       # Global layout with fonts
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── Courses.tsx      # Courses section
│   ├── About.tsx        # About section
│   ├── Advantages.tsx   # Advantages section
│   ├── Partners.tsx     # Partners section
│   ├── Reviews.tsx      # Reviews section
│   ├── Contact.tsx      # Contact section
│   ├── Footer.tsx       # Footer
│   └── WhatsAppButton.tsx # Floating WhatsApp button
├── public/              # Static assets
├── package.json         # Dependencies
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind configuration
└── README.md           # This file
```

## 🎨 Brand Colors

- **Primary Purple**: `#60311F`
- **Accent Orange**: `#FABB38`
- **Secondary Khaki**: `#F1DC8D`
- **Secondary Brown**: `#60311F`

## 📝 Customization

### Update Contact Information

Edit `components/Contact.tsx`:
- Phone: `9377002424`
- Email: `contacted24@gmail.com`
- Address: Update as needed

### Update Social Media Links

Edit `components/Footer.tsx` and `components/Navbar.tsx`:
- Replace placeholder links with actual social media URLs

### Add Real Images

1. Add images to `public/images/`
2. Update image paths in components
3. Use Next.js Image component for optimization

## 🐛 Troubleshooting

**Issue**: Build fails with "Cannot find module"
- **Solution**: Run `npm install` to install dependencies

**Issue**: Page not loading on GitHub Pages
- **Solution**: Check `basePath` in `next.config.js` matches your repository name

**Issue**: Images not showing
- **Solution**: Ensure images are in the `public` folder and paths are correct

## 📄 License

© 2025 ED24 Education Institute. All Rights Reserved.

## 🤝 Contributing

This is a custom website for ED24 Education Institute. For updates or changes, please contact the development team.

---

**Built with ❤️ for ED24 Education Institute**

