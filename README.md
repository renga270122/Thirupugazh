# Thirupugazh Mobile App

A beautiful mobile app for Thirupugazh devotional songs dedicated to Lord Murugan, created for Thai Poosam. This app provides an easy way to search and access Thirupugazh songs with bilingual support (Tamil and English).

## 🌟 Features

- **Bilingual Support**: Full support for Tamil and English languages
- **Multi-criteria Search**: Search songs by number, name, or place
- **30 Songs Database**: Includes 30 representative Thirupugazh songs
- **Voice Search Ready**: Interface for voice input (requires additional setup)
- **Beautiful UI**: Devotional-themed design with orange, red, and gold accents
- **Easy Navigation**: Smooth transitions between screens
- **Persistent Language Preference**: App remembers your language choice
- **Responsive Design**: Works on both iOS and Android devices

## 📱 Screenshots

The app features:
- Home screen with search bar and language selector
- Song list with song numbers, names, and places
- Detailed song view with full lyrics
- Clean, devotional-themed interface

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Expo CLI** - Install globally:
  ```bash
  npm install -g expo-cli
  ```
- **Expo Go app** on your mobile device:
  - [iOS - Download from App Store](https://apps.apple.com/app/expo-go/id982107779)
  - [Android - Download from Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)

### Installation

1. **Clone or download this repository**

2. **Navigate to the project directory**:
   ```bash
   cd Thirupugazh
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```
   
   This will install all required packages including:
   - React Native and Expo
   - React Navigation
   - i18next for internationalization
   - React Native Paper for UI components
   - AsyncStorage for data persistence

### Running the App

1. **Start the Expo development server**:
   ```bash
   npx expo start
   ```
   
   Or alternatively:
   ```bash
   npm start
   ```

2. **Run on your device**:
   
   **Option A: Using Expo Go (Recommended for testing)**
   - Open the Expo Go app on your phone
   - Scan the QR code displayed in your terminal or browser
   - The app will load on your device
   
   **Option B: Using iOS Simulator** (Mac only):
   ```bash
   npm run ios
   ```
   
   **Option C: Using Android Emulator**:
   ```bash
   npm run android
   ```
   
   **Option D: Web Browser** (for quick testing):
   ```bash
   npm run web
   ```

## 📖 Usage Guide

### Language Selection

1. Open the app
2. Look for the language selector at the top of the home screen
3. Tap "Tamil" (தமிழ்) or "English" (ஆங்கிலம்) to switch languages
4. All UI elements and song data will update immediately
5. Your language preference is saved automatically

### Searching for Songs

The app supports multiple search methods:

1. **Search by Song Number**:
   - Type the song number (e.g., "1", "5", "30")
   - Results appear instantly

2. **Search by Song Name**:
   - Type part of the song name in Tamil or English
   - Example: "Adiyarkku" or "அடியார்க்கு"
   - Search works in both languages regardless of current UI language

3. **Search by Place**:
   - Type the place name in Tamil or English
   - Example: "Thiruchendur" or "திருச்செந்தூர்"
   - All songs from that place will be displayed

4. **Clear Search**:
   - Tap the "X" icon in the search bar to clear and see all songs

### Viewing Song Details

1. Tap on any song card from the list
2. View full song information:
   - Song number
   - Song name (in selected language)
   - Place/Location (in selected language)
   - Complete lyrics (in selected language)
3. Tap the back arrow to return to the song list

### Voice Search (Placeholder)

- The microphone icon is present in the search bar
- Voice search requires additional native module setup
- Currently shows an informational message
- Can be enabled by implementing React Native Voice or similar library

## 📝 Adding More Songs

To add more songs to the database:

1. **Open the songs file**:
   ```
   src/data/thirupugazhSongs.ts
   ```

2. **Add a new song object** to the `thirupugazhSongs` array:
   ```typescript
   {
     id: 31,  // Increment the ID
     songNumber: 31,  // Next song number
     songName: {
       english: "English Song Name",
       tamil: "தமிழ் பாடல் பெயர்"
     },
     place: {
       english: "Place Name",
       tamil: "இட பெயர்"
     },
     lyrics: {
       english: "English lyrics here...",
       tamil: "தமிழ் வரிகள் இங்கே..."
     }
   }
   ```

3. **Ensure proper formatting**:
   - Keep the bilingual structure
   - Add comma after previous song object
   - Maintain consistent indentation
   - No comma after the last song

4. **Save and restart** the app to see the new song

## 🌐 Adding Translations

To add or modify translations:

### For English:
Edit `src/locales/en.ts`

### For Tamil:
Edit `src/locales/ta.ts`

### Structure:
```typescript
export default {
  common: {
    // Common UI elements
  },
  search: {
    // Search-related text
  },
  home: {
    // Home screen text
  },
  songDetail: {
    // Song detail screen text
  }
};
```

### Adding a New Translation Key:

1. Add the key to both `en.ts` and `ta.ts`
2. Use it in your component:
   ```typescript
   import { useTranslation } from 'react-i18next';
   
   const { t } = useTranslation();
   const text = t('your.new.key');
   ```

## 🏗️ Project Structure

```
thirupugazh-app/
├── App.tsx                          # Main app entry point
├── app.json                         # Expo configuration
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # TypeScript configuration
├── .gitignore                       # Git ignore rules
├── README.md                        # This file
├── assets/                          # Images, fonts, icons
├── src/
│   ├── screens/
│   │   ├── HomeScreen.tsx          # Main screen with search and song list
│   │   └── SongDetailScreen.tsx    # Song detail with lyrics
│   ├── components/
│   │   ├── LanguageSelector.tsx   # Language toggle component
│   │   ├── SearchBar.tsx          # Search input with voice button
│   │   ├── SongCard.tsx           # Individual song list item
│   │   └── VoiceButton.tsx        # Voice input button
│   ├── data/
│   │   └── thirupugazhSongs.ts    # Song database (30 songs)
│   ├── locales/
│   │   ├── en.ts                   # English translations
│   │   ├── ta.ts                   # Tamil translations
│   │   └── i18n.ts                 # i18next configuration
│   ├── context/
│   │   └── LanguageContext.tsx     # Language state management
│   ├── types/
│   │   └── index.ts                # TypeScript type definitions
│   ├── utils/
│   │   └── searchHelpers.ts        # Search utility functions
│   └── navigation/
│       └── types.ts                # Navigation type definitions
```

## 🎨 Customization

### Changing Theme Colors

Edit the color values in the StyleSheet sections of components:

```typescript
// Primary color (orange)
backgroundColor: '#FF6B35'

// Secondary colors
backgroundColor: '#FFE5DC'  // Light orange
color: '#666'               // Gray text
```

### Adding Tamil Fonts

1. Download Tamil font files (e.g., Noto Sans Tamil, Lohit Tamil)
2. Place them in `assets/fonts/`
3. Load them in `App.tsx`:
   ```typescript
   import * as Font from 'expo-font';
   
   await Font.loadAsync({
     'Tamil-Regular': require('./assets/fonts/TamilFont.ttf'),
   });
   ```

### Modifying Search Behavior

Edit `src/utils/searchHelpers.ts` to customize search logic:
- Case sensitivity
- Exact vs. partial matching
- Search ranking
- Multiple language support

## 🔨 Building for Production

### Build for Android:

```bash
expo build:android
```

or with EAS Build:
```bash
eas build --platform android
```

### Build for iOS:

```bash
expo build:ios
```

or with EAS Build:
```bash
eas build --platform ios
```

### Creating Standalone Apps:

Follow the [Expo Build Documentation](https://docs.expo.dev/build/introduction/) for detailed instructions on:
- Setting up EAS Build
- Configuring app signing
- Submitting to app stores

## 🛠️ Technologies Used

- **React Native** - Mobile framework
- **Expo** - Development platform
- **TypeScript** - Type-safe JavaScript
- **React Navigation** - Navigation library
- **i18next / react-i18next** - Internationalization
- **React Native Paper** - UI component library
- **AsyncStorage** - Local data persistence
- **Expo Speech** - Text-to-speech (voice input placeholder)

## 📱 Supported Platforms

- ✅ iOS (iPhone, iPad)
- ✅ Android (phones, tablets)
- ⚠️ Web (basic support for testing)

## 🐛 Troubleshooting

### Common Issues:

1. **"Unable to resolve module"**
   - Solution: Run `npm install` again
   - Clear cache: `expo start -c`

2. **"Network response timed out"**
   - Ensure your phone and computer are on the same network
   - Check firewall settings

3. **Tamil text not displaying correctly**
   - Ensure your device has Tamil language support installed
   - Install Tamil fonts if needed

4. **Voice search not working**
   - This feature requires additional native module setup
   - Install `react-native-voice` or `expo-speech-recognition` for full implementation

5. **App crashes on startup**
   - Clear cache: `expo start -c`
   - Delete `node_modules` and run `npm install` again
   - Check for TypeScript errors: `npx tsc --noEmit`

## 📄 License

This project is created for devotional purposes and is free to use.

## 🙏 Acknowledgments

- Thirupugazh songs by Saint Arunagirinathar
- Special thanks to Lord Murugan devotees
- Created for Thai Poosam festival

## 📞 Support

For issues or questions:
1. Check the troubleshooting section above
2. Review Expo documentation: https://docs.expo.dev/
3. Check React Native documentation: https://reactnative.dev/

## 🔄 Future Enhancements

Potential features to add:
- Full voice search implementation
- Audio playback of songs
- Favorites/bookmarks
- Share songs feature
- Offline mode
- More songs (target: 100+ songs)
- More languages (Sanskrit, Hindi, etc.)
- Daily song notifications
- Festival calendar integration

---

**Om Saravanabhava! 🙏**

*Created with devotion for Thai Poosam*
