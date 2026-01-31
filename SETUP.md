# Quick Setup Guide

## Step-by-Step Installation

### 1. Install Node.js
- Download from https://nodejs.org/
- Install version 16 or higher
- Verify: `node --version`

### 2. Install Expo CLI
```bash
npm install -g expo-cli
```

### 3. Install Expo Go on Your Phone
- iOS: App Store → Search "Expo Go"
- Android: Google Play → Search "Expo Go"

### 4. Install Project Dependencies
```bash
cd Thirupugazh
npm install
```

### 5. Start the App
```bash
npx expo start
```

### 6. Scan QR Code
- Open Expo Go app
- Tap "Scan QR Code"
- Point camera at the QR code in terminal
- App will load on your phone

## First Time Running?

If you encounter any issues:

1. **Clear Cache**:
   ```bash
   npx expo start -c
   ```

2. **Reinstall Dependencies**:
   ```bash
   rm -rf node_modules
   npm install
   ```

3. **Check Network**:
   - Ensure phone and computer are on same WiFi
   - Disable VPN if active

## Quick Commands

```bash
# Start development server
npm start

# Start with clean cache
npx expo start -c

# Run on iOS simulator (Mac only)
npm run ios

# Run on Android emulator
npm run android

# Run in web browser
npm run web
```

## Need Help?

Check README.md for detailed documentation and troubleshooting.
