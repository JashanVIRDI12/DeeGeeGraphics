# Deployment Guide for DeeGee Graphics React App

## The Problem
Your React app uses client-side routing (React Router), but servers don't know about these routes. When someone visits `/services/business-cards` directly or refreshes the page, the server looks for that file/directory and returns a 404 because it doesn't exist on the server - it's handled by React Router.

## Solutions by Hosting Platform

### 1. Apache Server (cPanel, shared hosting)
**File:** `public/.htaccess`
- ✅ Already created and configured
- This file tells Apache to serve `index.html` for all routes that don't match actual files
- Upload your built files to the server's public directory
- Make sure the `.htaccess` file is in the same directory as your `index.html`

### 2. Netlify
**File:** `public/_redirects`
- ✅ Already created
- Contains: `/*    /index.html   200`
- Netlify automatically detects this file and configures redirects

### 3. Vercel
**File:** `vercel.json` (root directory)
- ✅ Already configured
- Contains rewrite rules to serve `index.html` for all routes

### 4. GitHub Pages
Add to your build script or create a `404.html` file that's identical to `index.html`

### 5. Firebase Hosting
Configure in `firebase.json`:
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

## Build and Deploy Steps

1. **Build your app:**
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder contents** to your server's public directory

3. **Ensure server configuration files are in place:**
   - For Apache: `.htaccess` should be in the same directory as `index.html`
   - For Netlify: `_redirects` should be in the build output
   - For Vercel: `vercel.json` should be in the root directory

## Testing Your Deployment

1. Visit your main domain (e.g., `https://yoursite.com`)
2. Navigate to a service page (e.g., `https://yoursite.com/services/business-cards`)
3. **Refresh the page** - it should still show the correct content, not a 404
4. Try visiting a non-existent route (e.g., `https://yoursite.com/non-existent`) - it should show your custom 404 page

## Troubleshooting

### Still getting 404 errors?
1. **Check file locations:** Make sure `.htaccess` is in the same directory as `index.html`
2. **Check server support:** Some shared hosts disable mod_rewrite
3. **Check file permissions:** `.htaccess` should be readable (644 permissions)
4. **Contact your host:** Ask if they support URL rewriting/mod_rewrite

### Custom 404 page not showing?
- Your custom 404 page (`NotFound.jsx`) only works for client-side routing
- Server-level 404s (like missing files) will show the server's default 404
- This is normal behavior

## Current Status
✅ Server configuration files created
✅ Custom 404 page exists and is properly configured
✅ React Router setup is correct
✅ SEO optimization is in place

Your app should now work correctly when deployed to any of the supported platforms!
