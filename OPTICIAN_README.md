# Optician POC - Virtual Glasses Try-On

A lightweight Progressive Web App (PWA) designed for opticians to provide customers with a virtual try-on experience for reading and optical glasses.

## Features

### Progressive Web App (PWA)
- **Installable**: Can be installed on mobile devices and desktops as a standalone app
- **Offline Capable**: Service worker caches key resources for offline functionality
- **Fast Loading**: Optimized for quick startup and minimal resource usage
- **Mobile-First**: Responsive design that works seamlessly on all devices

### User Experience
- **Instant Camera Access**: Jumps straight to camera on page load
- **Instructions Overlay**: Shows helpful tips for 5 seconds at startup
- **Clean Interface**: Minimal UI focused on the try-on experience
- **Easy Frame Selection**: Four classic frame styles at your fingertips

### Frame Styles Available
1. **Round** - Classic round frames suitable for reading glasses
2. **Clubmaster** - Semi-rimless retro style
3. **Wayfarer** - Iconic rectangular frames
4. **Classic** - Traditional full-rim frames

## Quick Start

1. **Open the application** in a web browser
2. **Grant camera permissions** when prompted
3. **Read the instructions** that appear for 5 seconds
4. **Try on different frames** using the buttons at the bottom

## Installation as PWA

### On Mobile (iOS/Android)
1. Open the application in Safari (iOS) or Chrome (Android)
2. Tap the Share button (iOS) or Menu (Android)
3. Select "Add to Home Screen"
4. The app will appear on your home screen like a native app

### On Desktop
1. Open the application in Chrome, Edge, or other PWA-supporting browser
2. Look for the install icon in the address bar
3. Click "Install" to add the app to your system

## Deploy on Vercel

Vercel provides a simple and fast way to deploy this PWA application with automatic HTTPS, which is required for camera access.

### Prerequisites
- A [Vercel account](https://vercel.com/signup) (free tier available)
- Git repository with your application code

### Deployment Steps

#### Option 1: Deploy via Vercel Dashboard
1. **Push your code to a Git repository** (GitHub, GitLab, or Bitbucket)
2. **Log in to Vercel** at [vercel.com](https://vercel.com)
3. **Click "Add New Project"**
4. **Import your Git repository**
5. **Configure project settings:**
   - Framework Preset: `Other`
   - Root Directory: `./` (or leave empty)
   - Build Command: Leave empty (no build needed)
   - Output Directory: Leave empty
6. **Click "Deploy"**

Your application will be live at `https://your-project-name.vercel.app` within minutes.

#### Option 2: Deploy via Vercel CLI
1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Navigate to your project directory:**
   ```bash
   cd your-project-directory
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Follow the prompts** to link or create a new project

5. **For production deployment:**
   ```bash
   vercel --prod
   ```

### Configuration Notes

- **HTTPS by Default**: Vercel automatically provides HTTPS, which is required for camera access via MediaStream API
- **Custom Domain**: You can add a custom domain in the Vercel dashboard under Project Settings → Domains
- **Environment Variables**: Not required for this basic setup, but can be added in Project Settings if needed
- **PWA Support**: Service worker and manifest files will work automatically on Vercel
- **Caching**: Static assets are automatically cached by Vercel's CDN for optimal performance

### Post-Deployment

After deployment, your application will be accessible via:
- Vercel URL: `https://your-project-name.vercel.app`
- Custom domain (if configured)

The PWA features (offline support, installability) will work immediately since Vercel serves all content over HTTPS.

## Technical Details

### Lightweight Design
- **No external dependencies**: Removed FontAwesome and Google Fonts
- **System fonts**: Uses native fonts for faster loading
- **Minimal JavaScript**: Only essential code is loaded
- **Optimized CSS**: Streamlined styles for better performance

### PWA Configuration
- **Manifest**: `manifest.webmanifest` defines app metadata
- **Service Worker**: `service-worker.js` handles caching and offline support
- **Icons**: 192x192 and 512x512 icons for all devices

### Privacy & Security
- **No branding**: Clean, white-label interface
- **Local processing**: Camera feed stays on device
- **Secure**: No data collection or external tracking

## Customization

### Changing Frame Models
Edit `index.html` and modify the button onclick handlers:
```html
<button onclick="JEELIZVTOWIDGET.load('your_sku_here')">Your Label</button>
```

Available SKUs can be found in `glassesSKU.csv`.

### Modifying Instructions
Edit the `#instructions` section in `index.html` to change the guidance text.

### Changing Colors
Edit `css/JeelizVTOWidget.css` to modify the color scheme:
- Primary color: `#2196f3` (blue)
- Background: `#ffffff` (white)

## Browser Support

- Chrome/Edge (desktop & mobile)
- Safari (desktop & mobile)
- Firefox (desktop & mobile)
- Opera (desktop & mobile)

## Troubleshooting

### Camera Not Working
- Ensure camera permissions are granted
- Close other applications using the camera
- Try refreshing the page
- Check browser permissions settings

### Frames Not Loading
- Check internet connection (required for first load)
- Clear browser cache and reload
- Verify the SKU is valid in `glassesSKU.csv`

### PWA Not Installing
- Use a supported browser (Chrome, Edge, Safari)
- Ensure the site is served over HTTPS
- Check that manifest.webmanifest is accessible

## Performance Optimization

The application is optimized for:
- **First load**: ~280KB (main widget script)
- **Subsequent loads**: Uses cached resources
- **Memory usage**: Minimal, suitable for low-end devices
- **Frame rate**: 30+ FPS on most devices

## License

See LICENSE file in the root directory.
