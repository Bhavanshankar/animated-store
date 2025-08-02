# Create deployment guide for GitHub Pages
deploy_guide = """# Deployment Guide

## GitHub Pages Deployment

Follow these steps to deploy your Hades E-Commerce website to GitHub Pages:

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., "hades-ecommerce")
4. Make sure it's set to "Public" (required for free GitHub Pages)
5. Don't initialize with README since we already have one
6. Click "Create repository"

### Step 2: Upload Your Files

#### Option A: Using Git Command Line

```bash
# Navigate to your project folder
cd path/to/your/hades-ecommerce

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Hades E-Commerce website"

# Add remote repository (replace 'yourusername' with your GitHub username)
git remote add origin https://github.com/yourusername/hades-ecommerce.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Option B: Using GitHub Web Interface

1. On your repository page, click "uploading an existing file"
2. Drag and drop all your project files or click "choose your files"
3. Make sure to upload:
   - All HTML files (index.html, categories.html, etc.)
   - style.css
   - app.js
   - All image files
   - README.md
   - package.json
   - LICENSE
4. Write a commit message like "Add Hades E-Commerce website files"
5. Click "Commit changes"

### Step 3: Enable GitHub Pages

1. Go to your repository's "Settings" tab
2. Scroll down to "Pages" section in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Select "main" branch and "/ (root)" folder
5. Click "Save"

### Step 4: Access Your Website

- Your website will be available at: `https://yourusername.github.io/hades-ecommerce`
- It may take a few minutes for the site to be live
- GitHub will show you the URL in the Pages settings

### Step 5: Custom Domain (Optional)

If you have a custom domain:

1. Add a CNAME file to your repository root with your domain name
2. In GitHub Pages settings, enter your custom domain
3. Configure your domain's DNS settings to point to GitHub Pages

## Alternative Deployment Options

### Netlify

1. Go to [Netlify](https://netlify.com)
2. Sign up/in with your GitHub account
3. Click "New site from Git"
4. Choose your repository
5. Leave build settings empty (static site)
6. Click "Deploy site"

### Vercel

1. Go to [Vercel](https://vercel.com)
2. Sign up/in with your GitHub account
3. Click "New Project"
4. Import your repository
5. Leave all settings as default
6. Click "Deploy"

## Troubleshooting

### Images Not Loading
- Make sure all image files are uploaded to GitHub
- Check that image paths in HTML/CSS are correct
- Use relative paths (e.g., `images/product.png` not `/images/product.png`)

### CSS/JS Not Loading
- Verify all CSS and JS files are in the repository
- Check file paths in HTML files
- Make sure files are named correctly (case-sensitive)

### 404 Errors
- Ensure index.html is in the root directory
- Check that all internal links use correct filenames
- Verify all referenced files exist in the repository

## Updates

To update your deployed site:

1. Make changes to your local files
2. Commit and push changes to GitHub:
```bash
git add .
git commit -m "Update website content"
git push origin main
```
3. GitHub Pages will automatically redeploy your site

---

Your Hades E-Commerce website should now be live and accessible to the world!
"""

with open('DEPLOYMENT.md', 'w', encoding='utf-8') as f:
    f.write(deploy_guide)

print("DEPLOYMENT.md guide created successfully!")