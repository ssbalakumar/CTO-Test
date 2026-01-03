# Quick Start Guide

Get your portfolio website up and running in minutes!

## 🚀 5-Minute Setup

### Step 1: Personalize Your Content (2 minutes)

Edit these files to make it yours:

#### `index.html`
```html
<!-- Update line 33: Your name -->
<span class="text-primary">Alex Morgan</span>
<!-- Change to your name -->

<!-- Update line 35: Your tagline -->
Senior .NET Developer | Cloud Architect | Tech Enthusiast

<!-- Update lines 75+: Social media links -->
<a href="https://github.com/YOUR_USERNAME">
<a href="https://linkedin.com/in/YOUR_USERNAME">
<a href="https://twitter.com/YOUR_USERNAME">
<a href="mailto:YOUR_EMAIL">

<!-- Update line 131+: About section text -->
<!-- Customize your bio and experience -->
```

#### `data.json`
```json
{
  "projects": [
    // Add your actual projects here
    // Or customize the sample projects
  ],
  "skills": [
    // Update skills to match your expertise
  ]
}
```

### Step 2: Test Locally (1 minute)

**Option A - Python (easiest):**
```bash
python3 -m http.server 8000
```

**Option B - Node.js:**
```bash
npx http-server -p 8000
```

**Option C - PHP:**
```bash
php -S localhost:8000
```

Then open: http://localhost:8000

### Step 3: Deploy to Netlify (2 minutes)

**Easiest Method - Drag & Drop:**

1. Go to [Netlify](https://www.netlify.com/)
2. Sign up/login (free)
3. Drag your project folder onto the page
4. Done! 🎉

Your site is live at: `https://random-name.netlify.app`

## ✏️ Customization

### Change Colors

Edit the Tailwind config in `index.html` (line 41):

```javascript
colors: {
    primary: '#YOUR_COLOR',      // Main brand color
    secondary: '#YOUR_COLOR',    // Secondary color
    accent: '#YOUR_COLOR',       // Accent color
}
```

### Change Name/Branding

1. **Hero section**: Update name and tagline (line 133-135)
2. **Navigation logo**: Update "AM" initials (line 83)
3. **Meta tags**: Update SEO info (lines 6-22)
4. **Footer**: Update copyright (line 289)

### Add Your Projects

Edit `data.json`:

```json
{
  "id": 1,
  "title": "Your Project Name",
  "description": "Brief description",
  "technologies": ["Tech1", "Tech2", "Tech3"],
  "icon": "code",  // See: https://lucide.dev/icons/
  "category": "Web Application",
  "github": "https://github.com/you/project",
  "demo": "https://demo.example.com"
}
```

### Update Skills

Edit `data.json`:

```json
{
  "category": "Your Category",
  "icon": "icon-name",
  "items": ["Skill 1", "Skill 2", "Skill 3"]
}
```

## 🎨 Available Icons

Browse all available icons at: https://lucide.dev/icons/

Common icons for .NET developers:
- `code` - General coding
- `database` - Databases
- `cloud` - Cloud services
- `server` - Backend
- `shield` - Security
- `cpu` - IoT/Hardware
- `git-branch` - DevOps/Git
- `package` - NuGet packages

## 🔗 Update Social Links

Find and replace these in `index.html`:

```html
<!-- Hero section (lines 141-153) -->
<a href="https://github.com/YOUR_USERNAME">
<a href="https://linkedin.com/in/YOUR_USERNAME">
<a href="https://twitter.com/YOUR_USERNAME">
<a href="mailto:YOUR_EMAIL">

<!-- Footer (lines 291-303) -->
<!-- Same links repeated -->
```

## 📱 Mobile Testing

Test your site on different devices:

1. **Chrome DevTools**: F12 → Device Toolbar (Ctrl+Shift+M)
2. **Responsive Design Mode**: 
   - iPhone SE (375x667)
   - iPad (768x1024)
   - Desktop (1920x1080)

## ✅ Pre-Launch Checklist

Before deploying:

- [ ] Updated all personal information
- [ ] Changed all social media URLs
- [ ] Updated email addresses
- [ ] Customized projects in data.json
- [ ] Updated skills in data.json
- [ ] Tested on mobile, tablet, and desktop
- [ ] Verified all links work
- [ ] Checked for typos

## 🆘 Common Issues

### Issue: Icons not showing
**Fix**: Wait for page to fully load. Icons load from CDN.

### Issue: Projects/Skills not showing
**Fix**: Check browser console (F12). Ensure `data.json` is valid JSON.

### Issue: Mobile menu not working
**Fix**: Ensure JavaScript is enabled. Check browser console for errors.

### Issue: Styles look broken
**Fix**: Check internet connection. Tailwind CSS loads from CDN.

## 🎓 Learn More

- **Full Documentation**: See [README.md](README.md)
- **Deployment Guide**: See [DEPLOYMENT.md](DEPLOYMENT.md)
- **Contributing**: See [CONTRIBUTING.md](CONTRIBUTING.md)

## 💡 Pro Tips

1. **Update regularly**: Keep your projects and skills current
2. **Add real projects**: Replace sample projects with your actual work
3. **Custom domain**: Use your own domain for professionalism
4. **Analytics**: Track visitors with Google Analytics
5. **Performance**: Keep images optimized and external dependencies minimal
6. **SEO**: Update meta tags with your actual information
7. **Backup**: Keep your code in a Git repository

## 📊 Next Steps

After launching:

1. Share your portfolio on LinkedIn
2. Add the link to your GitHub profile
3. Include it in your email signature
4. Share it when applying for jobs
5. Keep it updated with new projects
6. Monitor with analytics
7. Get feedback and iterate

## 🌟 Make It Yours!

This is a template - personalize it to reflect your unique style and experience:

- **Colors**: Match your personal brand
- **Content**: Tell your story
- **Projects**: Showcase your best work
- **Design**: Adjust to your taste
- **Features**: Add what you need

---

**Need help?** Open an issue in the repository or check the full documentation.

**Ready to launch?** Deploy to Netlify and share your awesome portfolio! 🚀
