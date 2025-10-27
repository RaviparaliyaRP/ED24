# ED24 Website - Deployment Guide

## ✅ Website Successfully Built!

Your ED24 education institute website has been successfully created and built. The static site is ready for deployment.

## 📁 Build Output

The static site has been generated in the `/out` folder. This is what you'll deploy to GitHub Pages.

## 🚀 Deployment Options

### Option 1: Deploy to GitHub Pages (Recommended)

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: ED24 website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Push the `out` folder to GitHub Pages**
   ```bash
   cd out
   git init
   git add .
   git commit -m "Deploy ED24 website"
   git branch -M gh-pages
   git remote add origin <your-github-repo-url>
   git push -f origin gh-pages
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select branch: `gh-pages`
   - Select folder: `/ (root)`
   - Your site will be live at: `https://yourusername.github.io/repo-name`

### Option 2: Deploy via GitHub Actions (Automatic)

This is set up automatically with Next.js static export. Just push to GitHub and configure GitHub Pages to use the `out` folder from the `main` branch.

## 🎨 Website Features

Your website includes:

✅ **Hero Section** - Eye-catching landing with CTAs
✅ **Courses Section** - 8 course cards with detailed information
✅ **About Section** - Statistics and institute information
✅ **Advantages Section** - 10 key advantages with icons
✅ **Partners Section** - Authorized partner information
✅ **Reviews Section** - Student testimonials
✅ **Contact Section** - Contact form and address details
✅ **Footer** - Quick links and social media
✅ **WhatsApp Button** - Floating button for instant contact
✅ **Responsive Design** - Works on all devices
✅ **Smooth Animations** - Powered by Framer Motion

## 📝 Next Steps

### 1. Replace Placeholder Content

- Update social media links in Footer and Navbar
- Add real images to `public/images/`
- Update Google Maps embed with actual location
- Connect EmailJS for contact form (optional)

### 2. Setup EmailJS (Optional)

If you want the contact form to work:

1. Sign up at https://www.emailjs.com/
2. Get your Service ID, Template ID, and Public Key
3. Update `components/Contact.tsx` with your credentials
4. Add environment variables to `.env.local`

### 3. Update Contact Information

Edit these files with actual links:
- `components/Navbar.tsx` - Social media links
- `components/Footer.tsx` - Social media links  
- `components/Contact.tsx` - Update Google Maps embed

### 4. Add Real Images

Replace placeholder content with actual images:
- Logo: Add to `public/images/logo.png`
- Course images
- Gallery images for About section

## 🎨 Brand Colors Used

- **Primary Purple**: `#60311F`
- **Accent Orange**: `#FABB38`
- **Secondary Khaki**: `#F1DC8D`
- **Secondary Brown**: `#60311F`

## 📞 Contact Information (Current)

- **Phone**: 9377002424
- **Email**: contacted24@gmail.com
- **WhatsApp**: https://wa.me/919377002424
- **Address**: SF-3,4 & 6, Second Floor, Satyam Complex, Near Samarpan Bungalows BRTS stop, Bopal - Ghuma Main Road, Bopal, Ahmedabad, Gujarat - 380058

## 🛠️ Development

### Run Development Server
```bash
npm run dev
```
Opens at http://localhost:3000

### Build for Production
```bash
npm run build
```
Generates static site in `/out` folder

### Serve Production Build Locally
```bash
npm start
```

## 📄 License

© 2025 ED24 Education Institute. All Rights Reserved.

---

**Your website is ready to deploy! 🚀**

