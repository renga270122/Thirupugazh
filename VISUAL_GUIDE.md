# Thirupugazh App - Visual Guide

## 🎨 App Screens Overview

### 1. Home Screen (Main Screen)

```
┌─────────────────────────────────────┐
│  ┌─────────────────────────────┐   │
│  │ திருப்புகழ் பாடல்கள்        │   │  ← Title (language aware)
│  │ முருகப்பெருமான் பக்தி பாடல்கள் │  ← Subtitle
│  │ 30 பாடல்கள் உள்ளன           │   │  ← Song count
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────┬─────────┐             │
│  │ தமிழ்   │ English │             │  ← Language selector
│  └─────────┴─────────┘             │
├─────────────────────────────────────┤
│  ┌───────────────────────────┐     │
│  │ 🔍 தேடுக...          🎤  │     │  ← Search bar with voice
│  └───────────────────────────┘     │
├─────────────────────────────────────┤
│  ┌─────────────────────────────┐   │
│  │ ╭───╮                       │   │
│  │ │ 1 │ அடியார்க்கு உயர்ந்த   │   │  ← Song card
│  │ ╰───╯ திருச்செந்தூர்       │   │
│  └─────────────────────────────┘   │
│  ┌─────────────────────────────┐   │
│  │ ╭───╮                       │   │
│  │ │ 2 │ தனித் தனியாய்        │   │  ← Song card
│  │ ╰───╯ சுவாமிமலை            │   │
│  └─────────────────────────────┘   │
│  ┌─────────────────────────────┐   │
│  │ ╭───╮                       │   │
│  │ │ 3 │ குற்றம் ஒன்றும் இல்லை │   │  ← Song card
│  │ ╰───╯ திருத்தணி             │   │
│  └─────────────────────────────┘   │
│  ...                                │
└─────────────────────────────────────┘
```

**Features Shown**:
- Bilingual title and subtitle
- Language toggle (Tamil/English)
- Search bar with microphone icon
- Scrollable list of song cards
- Song number, name, and place displayed

---

### 2. Song Detail Screen

```
┌─────────────────────────────────────┐
│ ← அடியார்க்கு உயர்ந்த               │  ← Header with back button
│   பாடல் 1                           │
├─────────────────────────────────────┤
│                                     │
│  ┌─────────────────────────────┐   │
│  │ பாடல் எண்: 1                │   │  ← Song info card
│  │ இடம்: திருச்செந்தூர்        │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ பாடல் வரிகள்                │   │  ← Lyrics card
│  │                              │   │
│  │ அடியார்க்கு உயர்ந்த அழகன் தன்│  │
│  │ அடியனை                       │   │
│  │ படியை வழி படும் செல்வம்      │   │
│  │ தரும் அருள் செய்வாய்          │   │
│  │ கடியை நடை கரி முகன்          │   │
│  │ கவலை தவிர்ப்பாய்             │   │
│  │ ஓடிவிடு பரிவையும்            │   │
│  │ ஒருகயினை பணி செவாய்          │   │
│  │                              │   │
│  └─────────────────────────────┘   │
│                                     │
└─────────────────────────────────────┘
```

**Features Shown**:
- Orange header bar with song name
- Back navigation arrow
- Song number and place information
- Full lyrics in selected language
- Clean, readable layout

---

## 🎨 Color Palette

```
Primary Color (Devotional Orange):
███████  #FF6B35

Light Orange (Accents):
███████  #FFE5DC

Background:
███████  #F8F9FA (Light Gray)

Text Primary:
███████  #333333 (Dark Gray)

Text Secondary:
███████  #666666 (Medium Gray)

Text Tertiary:
███████  #999999 (Light Gray)

White:
███████  #FFFFFF
```

---

## 🔄 User Flows

### Flow 1: Browse and View Song

```
Home Screen
    ↓ (scroll through list)
    ↓ (tap on song card)
Song Detail Screen
    ↓ (read lyrics)
    ↓ (tap back button)
Home Screen
```

### Flow 2: Search for Song

```
Home Screen
    ↓ (tap search bar)
    ↓ (type search query)
Filtered Results
    ↓ (tap on result)
Song Detail Screen
```

### Flow 3: Change Language

```
Any Screen
    ↓ (tap language selector)
Language Changed
    ↓ (all UI updates immediately)
    ↓ (language saved)
Continue Using App
```

### Flow 4: Search by Different Criteria

```
Search by Number:
"1" → Shows song #1

Search by Name (English):
"Adiyarkku" → Shows matching songs

Search by Name (Tamil):
"அடியார்க்கு" → Shows matching songs

Search by Place (English):
"Palani" → Shows all Palani songs

Search by Place (Tamil):
"பழனி" → Shows all Palani songs
```

---

## 📱 Component Structure

```
App
└── NavigationContainer
    ├── Stack.Navigator
    │   ├── HomeScreen
    │   │   ├── LanguageSelector
    │   │   ├── SearchBar
    │   │   │   └── VoiceButton
    │   │   └── FlatList
    │   │       └── SongCard (×30)
    │   │
    │   └── SongDetailScreen
    │       └── Song Details & Lyrics
    │
    └── Providers
        ├── I18nextProvider (i18n)
        ├── LanguageProvider (Context)
        └── PaperProvider (UI)
```

---

## 🎯 Interactive Elements

### Search Bar
- **Text Input**: Type to search
- **Clear Button**: ✕ appears when typing
- **Voice Button**: 🎤 microphone icon

### Language Selector
- **Tamil Button**: Active state = orange background
- **English Button**: Active state = orange background
- Tap to switch instantly

### Song Cards
- **Tappable**: Entire card is clickable
- **Number Badge**: Circular orange badge
- **Two Lines**: Song name + Place
- **Shadow**: Subtle elevation effect

### Song Detail
- **Back Button**: ← arrow in header
- **Scrollable**: Lyrics can be scrolled
- **Readable**: Large, clear text

---

## 🌟 Special Features

### Real-time Search
```
User types: "m"
→ Shows songs starting with "m"

User types: "mu"
→ Narrows to songs with "mu"

User types: "mur"
→ Further narrows results

User clears: ""
→ Shows all 30 songs again
```

### Bilingual Search
```
UI in English, User searches Tamil:
"முருகா" → Still finds matching songs!

UI in Tamil, User searches English:
"Muruga" → Still finds matching songs!
```

### Language Persistence
```
Session 1:
User selects Tamil → App in Tamil

App Closes

Session 2:
App Opens → Still in Tamil!
(Language preference saved)
```

---

## 📊 Data Structure Visualization

```typescript
Song Object:
{
  id: 1,
  songNumber: 1,
  songName: {
    english: "Adiyarkku Uyarntha",
    tamil: "அடியார்க்கு உயர்ந்த"
  },
  place: {
    english: "Thiruchendur",
    tamil: "திருச்செந்தூர்"
  },
  lyrics: {
    english: "Full English lyrics...",
    tamil: "முழு தமிழ் வரிகள்..."
  }
}
```

**Display Logic**:
```
If language === 'ta':
  Display: song.songName.tamil
  Display: song.place.tamil
  Display: song.lyrics.tamil

If language === 'en':
  Display: song.songName.english
  Display: song.place.english
  Display: song.lyrics.english
```

---

## 🎭 UI States

### Loading State
- App shows splash screen (orange background)

### Empty State (No Search Results)
```
┌─────────────────────────┐
│                         │
│     முடிவுகள் இல்லை    │
│                         │
└─────────────────────────┘
```

### Populated State
- Shows all 30 songs or filtered results

### Detail State
- Shows selected song with full information

---

## 🔊 Voice Input (Placeholder)

```
┌─────────────────────────┐
│   🎤 Microphone Icon    │
│                         │
│   Tap to activate       │
│   voice search          │
│                         │
│   (Shows info alert)    │
└─────────────────────────┘
```

**Current Implementation**:
- UI button present
- Tap shows informational message
- Ready for full implementation

**To Activate**:
- Install react-native-voice
- Implement speech recognition
- Handle permissions
- Connect to search function

---

## 📱 Platform-Specific Notes

### iOS
- Smooth animations
- System Tamil fonts
- Native navigation feel

### Android
- Material Design ripples
- System Tamil fonts
- Native back button support

### Web (Basic Support)
- Responsive layout
- Mouse/keyboard support
- Limited Tamil font support

---

## 🎨 Design Principles

1. **Devotional**: Orange/red/gold colors evoke temple aesthetic
2. **Clean**: Minimal design, focus on content
3. **Readable**: Large fonts, good contrast
4. **Bilingual**: Equal support for Tamil and English
5. **Accessible**: Clear labels, logical flow
6. **Performant**: Fast search, smooth scrolling

---

## 🏆 Achievements

✅ 30 bilingual songs
✅ Multi-criteria search
✅ Real-time filtering
✅ Language switching
✅ Beautiful UI
✅ Smooth navigation
✅ Persistent preferences
✅ Comprehensive documentation

---

**Om Saravanabhava! 🙏**

*This visual guide shows the app structure and user experience.*
