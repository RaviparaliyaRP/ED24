# GitHub Pages Setup Instructions for ED24 Website

## ✅ Code Successfully Pushed!

Your ED24 website code has been successfully pushed to GitHub:
- **Repository**: https://github.com/Raviparaliyarp/ED24
- **Main Branch**: Contains all source code
- **gh-pages Branch**: Created for deployment

## 🚀 How to Enable GitHub Pages

### Option 1: Automatic GitHub Actions (Recommended)

Your repository is now ready for GitHub Pages deployment. Simply enable it:

1. Go to your repository on GitHub: https://github.com/Raviparaliyarp/ED24
2. Click **Settings** (gear icon at top right)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **Deploy from a branch**
5. Choose **gh-pages** branch and **/ (root)** folder
6. Click **Save**

Your website will be live at: **https://raviparaliyarp.github.io/ED24/**

### Option 2: Manual Deployment

If you need to update the site after making changes:

1. Make your changes to the code
2. Run the build command:
   ```bash
   npm run build
   ```
3. Switch to gh-pages branch:
   ```bash
   git checkout gh-pages
   ```
4. Copy the build files from `out/` to root
5. Commit and push:
   ```bash
   git add .
   git commit -m "Update site"
   git push origin gh-pages
   ```
6. Return to main:
   ```bash
   git checkout main
   ```

### Option 3: Using PowerShell Script

I've created a `deploy.ps1` script for Windows:

1. Make changes to your code
2. Run the deployment script:
   ```powershell
   .\deploy.ps1
   ```

## 📁 Repository Structure

```
ED24/
├── app/              # Next.js app directory
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/       # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Courses.tsx
│   ├── About.tsx
│   ├── Advantages.tsx
│   ├── Partners.tsx
│   ├── Reviews.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── WhatsAppButton.tsx
├── public/images/    # Images (logo, banner)
├── out/              # Static build output (auto-generated)
├── package.json
├── next.config.js
├── tailwind.config.js
├── README.md
├── DEPLOYMENT_GUIDE.md
└── PROJECT_SUMMARY.md
```

## 🎯 Next Steps

1. **Enable GitHub Pages** (see instructions above)
2. **Customize Your Site**:
   - Update social media links in `components/Footer.tsx` and `components/Navbar.tsx`
   - Add actual Google Maps embed URL in `components/Contact.tsx`
   - Connect EmailJS for contact form (optional)

3. **Test Your Live Site**:
   - Wait a few minutes after enabling GitHub Pages
   - Visit: https://raviparaliyarp.github.io/ED24/
   - Test all links and forms

## 📧 Contact Information (Currently Configured)

- **Phone**: 9377002424
- **Email**: contacted24@gmail.com  
- **WhatsApp**: https://wa.me/919377002424
- **Address**: SF-3,4 & 6, Second Floor, Satyam Complex, Near Samarpan Bungalows BRTS stop, Bopal - Ghuma Main Road, Bopal, Ahmedabad, Gujarat - 380058

## ⚙️ Important Notes

- The `out/` folder contains the built static site
- Never edit files in the `out/` folder directly
- Always edit source files in `app/` and `components/`
- Rebuild the site after making changes: `npm run build`
- Deploy to GitHub Pages using the methods above

## 🔗 Useful Links

- **Repository**: https://github.com/Raviparaliyarp/ED24
- **Live Site** (after setup): https://raviparaliyarp.github.io/ED24/
- **GitHub Pages Docs**: https://docs.github.com/en/pages

---

**🎉 Congratulations! Your ED24 website is ready to go live!**

