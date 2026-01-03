# .NET Developer Portfolio Website

A clean, professional, and responsive portfolio website designed for .NET developers. Built with modern web technologies and ready to deploy to Netlify.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on mobile, tablet, and desktop devices
- **Modern Styling**: Styled with Tailwind CSS for a clean and professional appearance
- **Icon Integration**: Uses Lucide Icons for beautiful, consistent iconography
- **Smooth Animations**: Includes smooth scrolling, hover effects, and entrance animations
- **Dynamic Content**: Content loaded from JSON file, making it easy to update and prepare for CMS integration
- **SEO Optimized**: Semantic HTML5 structure with proper meta tags
- **Fast Performance**: Lightweight and optimized for quick loading times
- **Netlify Ready**: Pre-configured for easy deployment to Netlify

## 📋 Sections

1. **Hero/Header**: Eye-catching introduction with name, tagline, and call-to-action buttons
2. **About**: Comprehensive section highlighting .NET expertise and professional background
3. **Projects**: Showcase of 6 sample projects with descriptions, tech stacks, and links
4. **Skills**: Organized display of technical skills across 8 categories
5. **Contact**: Multiple contact methods and social media links
6. **Footer**: Professional footer with social links and copyright information

## 🛠️ Tech Stack

- **HTML5**: Semantic markup and modern structure
- **Tailwind CSS**: Utility-first CSS framework via CDN
- **Lucide Icons**: Beautiful, consistent icon library
- **Vanilla JavaScript**: No framework dependencies for maximum performance
- **JSON**: Structured data format for easy content management

## 📁 Project Structure

```
.
├── index.html          # Main HTML file
├── data.json           # Content data (projects, skills)
├── js/
│   └── app.js         # JavaScript for interactivity and dynamic content
├── netlify.toml       # Netlify configuration
└── README.md          # This file
```

## 🚀 Quick Start

### Local Development

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd <your-repo-name>
   ```

2. Open the project in your favorite code editor

3. Serve the files using a local server:
   
   **Using Python:**
   ```bash
   python -m http.server 8000
   ```
   
   **Using Node.js (http-server):**
   ```bash
   npx http-server -p 8000
   ```
   
   **Using PHP:**
   ```bash
   php -S localhost:8000
   ```

4. Open your browser and navigate to `http://localhost:8000`

### Deployment to Netlify

#### Option 1: Deploy via Git (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Log in to [Netlify](https://www.netlify.com/)

3. Click "Add new site" → "Import an existing project"

4. Connect your Git provider and select your repository

5. Configure build settings (the `netlify.toml` file handles this automatically):
   - Build command: `echo 'No build step required for static site'`
   - Publish directory: `.`

6. Click "Deploy site"

Your site will be live in minutes!

#### Option 2: Deploy via Drag & Drop

1. Log in to [Netlify](https://www.netlify.com/)

2. Drag and drop your project folder to the Netlify dashboard

3. Your site will be deployed instantly

#### Option 3: Deploy via Netlify CLI

1. Install the Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Navigate to your project directory:
   ```bash
   cd <your-repo-name>
   ```

3. Deploy:
   ```bash
   netlify deploy --prod
   ```

## 🎨 Customization

### Update Personal Information

Edit the content in `index.html` to update:
- Name and tagline in the hero section
- About section text
- Contact information and social media links
- Email addresses

### Update Projects

Edit `data.json` to modify the projects array:

```json
{
  "id": 1,
  "title": "Your Project Name",
  "description": "Project description",
  "technologies": ["Tech 1", "Tech 2"],
  "icon": "icon-name",
  "category": "Category",
  "github": "github-url",
  "demo": "demo-url"
}
```

Available Lucide icons: [View all icons](https://lucide.dev/icons/)

### Update Skills

Edit `data.json` to modify the skills array:

```json
{
  "category": "Category Name",
  "icon": "icon-name",
  "items": ["Skill 1", "Skill 2", "Skill 3"]
}
```

### Change Colors

The primary color scheme uses .NET purple. To change colors, update the Tailwind config in `index.html`:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#YOUR_PRIMARY_COLOR',
                secondary: '#YOUR_SECONDARY_COLOR',
                accent: '#YOUR_ACCENT_COLOR',
            }
        }
    }
}
```

### Add Custom Styles

Add custom CSS in the `<style>` section of `index.html` or create a separate CSS file.

## 🔮 Future Enhancements

### CMS Integration (Sanity)

The current structure is designed to be easily integrated with a headless CMS like Sanity:

1. Install Sanity client:
   ```bash
   npm install @sanity/client
   ```

2. Replace the `fetch('data.json')` calls in `js/app.js` with Sanity queries

3. Update the data structure in Sanity Studio to match the current JSON schema

### Additional Features to Consider

- **Blog Section**: Add a blog powered by Sanity or another headless CMS
- **Dark Mode**: Implement a theme toggle for dark/light modes
- **Contact Form**: Add a working contact form with Netlify Forms or FormSpree
- **Analytics**: Integrate Google Analytics or privacy-friendly alternatives
- **Performance Monitoring**: Add performance monitoring tools
- **RSS Feed**: Generate an RSS feed for blog posts
- **Sitemap**: Generate a sitemap for better SEO
- **Progressive Web App**: Add PWA capabilities with a service worker

## 📊 Performance

- **Lighthouse Score**: Optimized for high Lighthouse scores
- **Load Time**: Fast initial load with minimal dependencies
- **SEO**: Semantic HTML and proper meta tags for search engines
- **Accessibility**: WCAG compliant markup and keyboard navigation

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you find bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Alex Morgan** - Senior .NET Developer

- GitHub: [@alexmorgan](https://github.com/alexmorgan)
- LinkedIn: [linkedin.com/in/alexmorgan](https://linkedin.com/in/alexmorgan)
- Email: alex.morgan@example.com

## 🙏 Acknowledgments

- **Tailwind CSS**: For the amazing utility-first CSS framework
- **Lucide Icons**: For the beautiful icon library
- **Netlify**: For simple and powerful hosting
- **Unsplash**: For free high-quality images

---

Built with ❤️ and modern web technologies
