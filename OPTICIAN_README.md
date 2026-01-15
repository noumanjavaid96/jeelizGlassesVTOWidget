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
