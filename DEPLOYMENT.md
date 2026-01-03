# Deployment Guide

This guide provides detailed instructions for deploying your .NET Developer Portfolio to Netlify.

## 📋 Prerequisites

- A [Netlify](https://www.netlify.com/) account (free tier is sufficient)
- Your code in a Git repository (GitHub, GitLab, or Bitbucket) - OR -
- Your project files ready for manual deployment

## 🚀 Deployment Methods

### Method 1: Deploy via Git (Recommended)

This method enables automatic deployments whenever you push changes.

#### Step 1: Push to Git Repository

If you haven't already:

```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

#### Step 2: Connect to Netlify

1. Log in to [Netlify](https://app.netlify.com/)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose your Git provider (GitHub, GitLab, or Bitbucket)
4. Authorize Netlify to access your repositories
5. Select your portfolio repository

#### Step 3: Configure Build Settings

Netlify will automatically detect your settings from `netlify.toml`, but verify:

- **Build command**: `echo 'No build step required for static site'`
- **Publish directory**: `.` (root directory)
- **Branch to deploy**: `main` (or your default branch)

#### Step 4: Deploy

1. Click **"Deploy site"**
2. Wait for the deployment to complete (usually 30-60 seconds)
3. Your site will be live at a random Netlify subdomain (e.g., `random-name-123.netlify.app`)

#### Step 5: Customize Domain (Optional)

1. In your site dashboard, go to **Site settings** → **Domain management**
2. Click **"Add custom domain"** or **"Edit site name"**
3. For custom domain:
   - Enter your domain name
   - Follow DNS configuration instructions
4. For Netlify subdomain:
   - Click "Options" → "Edit site name"
   - Enter your preferred subdomain (e.g., `alex-morgan.netlify.app`)

### Method 2: Drag & Drop Deployment

Perfect for quick deployments without Git.

#### Steps:

1. Log in to [Netlify](https://app.netlify.com/)
2. Go to the **Sites** page
3. Drag and drop your project folder onto the deployment area
4. Wait for deployment to complete
5. Your site is live!

**Note**: This method won't enable automatic deployments. You'll need to manually drag and drop for each update.

### Method 3: Netlify CLI

For developers who prefer command-line tools.

#### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

#### Step 2: Login to Netlify

```bash
netlify login
```

This will open a browser window for authentication.

#### Step 3: Initialize Site

From your project directory:

```bash
netlify init
```

Follow the prompts:
- Create a new site or link to existing
- Choose your team
- Set site name (optional)

#### Step 4: Deploy

For production deployment:

```bash
netlify deploy --prod
```

For draft/preview deployment:

```bash
netlify deploy
```

## 🔧 Post-Deployment Configuration

### 1. Enable HTTPS

Netlify automatically provisions SSL certificates:

1. Go to **Site settings** → **Domain management** → **HTTPS**
2. Click **"Verify DNS configuration"** if using a custom domain
3. Wait for certificate provisioning (usually automatic)
4. Enable **"Force HTTPS"** to redirect all HTTP traffic

### 2. Configure Custom Domain

If using a custom domain:

1. **For Netlify DNS**:
   - Update nameservers at your domain registrar to Netlify's nameservers
   - Netlify will handle all DNS records

2. **For External DNS**:
   - Add these DNS records at your DNS provider:
     ```
     Type: A
     Name: @
     Value: 75.2.60.5
     
     Type: CNAME
     Name: www
     Value: [your-site].netlify.app
     ```

### 3. Set Up Continuous Deployment

Already configured if using Git method! Every push to your main branch will trigger a deployment.

To customize:

1. Go to **Site settings** → **Build & deploy** → **Continuous deployment**
2. Configure:
   - Deploy previews for pull requests
   - Branch deploys for specific branches
   - Auto-publishing

### 4. Environment Variables (Future Use)

For when you add API keys or secrets:

1. Go to **Site settings** → **Build & deploy** → **Environment**
2. Click **"Add variable"**
3. Add key-value pairs
4. These will be available during build time

### 5. Configure Redirects and Headers

Already handled by `netlify.toml` and `_redirects` files!

To modify:
- Edit `netlify.toml` for complex configurations
- Edit `_redirects` for simple redirects

## 🎨 Customization After Deployment

### Update Personal Information

1. Edit `index.html`:
   - Update name, tagline, and about text
   - Change social media URLs
   - Update email addresses
   - Modify meta tags with your actual domain

2. Edit `data.json`:
   - Update projects with your actual work
   - Modify skills to match your expertise

3. Edit `manifest.json`:
   - Update name and description
   - Consider adding custom icons

4. Commit and push changes:
   ```bash
   git add .
   git commit -m "Personalize portfolio content"
   git push
   ```

Netlify will automatically redeploy!

## 🔍 Monitoring and Analytics

### Netlify Analytics (Paid)

1. Go to your site dashboard
2. Click **"Add analytics"**
3. Enable server-side analytics (no performance impact)

### Google Analytics (Free)

Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your actual ID.

## 🐛 Troubleshooting

### Issue: Deployment Failed

**Solution**:
- Check the deploy log in Netlify dashboard
- Ensure all files are committed and pushed
- Verify `netlify.toml` syntax

### Issue: 404 Errors

**Solution**:
- Check that `_redirects` file is in the root directory
- Verify publish directory is set to `.` (root)
- Ensure all file paths are correct

### Issue: CSS Not Loading

**Solution**:
- Check browser console for errors
- Verify Tailwind CSS CDN is accessible
- Clear browser cache

### Issue: JavaScript Not Working

**Solution**:
- Check browser console for errors
- Verify `data.json` is accessible
- Ensure `app.js` is in the `/js` directory

### Issue: Icons Not Showing

**Solution**:
- Check if Lucide CDN is accessible
- Verify `lucide.createIcons()` is called after DOM load
- Check browser console for errors

## 📊 Performance Optimization

### Current Optimizations

Already implemented:
- ✅ CDN delivery for CSS and JavaScript
- ✅ Minimal external dependencies
- ✅ Optimized images via CDN
- ✅ Caching headers in `netlify.toml`
- ✅ Minified content delivery

### Further Optimizations

Consider:
- **Image Optimization**: Use Netlify's Large Media for custom images
- **Asset Optimization**: Use Netlify's asset optimization features
- **Prerendering**: Enable prerendering for faster initial load
- **Split Testing**: Use Netlify's split testing for A/B tests

## 🔄 Rollback

If something goes wrong:

1. Go to **Deploys** in Netlify dashboard
2. Find a previous successful deployment
3. Click **"Publish deploy"** on that deployment
4. Your site will revert to that version

## 📱 Forms (Future Enhancement)

To add a contact form using Netlify Forms:

1. Add this to your HTML:
   ```html
   <form name="contact" method="POST" data-netlify="true">
     <input type="text" name="name" required />
     <input type="email" name="email" required />
     <textarea name="message" required></textarea>
     <button type="submit">Send</button>
   </form>
   ```

2. Netlify automatically handles form submissions
3. View submissions in **Forms** section of dashboard

## 🆘 Support

- **Netlify Documentation**: https://docs.netlify.com/
- **Netlify Community**: https://answers.netlify.com/
- **Netlify Status**: https://www.netlifystatus.com/

## ✅ Deployment Checklist

Before going live:

- [ ] Personalize all content (name, email, social links)
- [ ] Update all placeholder URLs with actual links
- [ ] Test on multiple devices and browsers
- [ ] Verify all links work
- [ ] Check SEO meta tags
- [ ] Test contact information
- [ ] Enable HTTPS
- [ ] Set up custom domain (if applicable)
- [ ] Configure analytics (optional)
- [ ] Test site performance
- [ ] Update README with actual site URL

---

**Congratulations! Your portfolio is now live! 🎉**

For questions or issues, please open an issue in the repository.
