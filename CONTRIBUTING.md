# Contributing to Thirupugazh App

Thank you for your interest in contributing to the Thirupugazh devotional app! 🙏

## 🎯 How to Contribute

### 1. Adding New Songs

The most valuable contribution is adding more Thirupugazh songs to the database.

**Steps**:

1. Open `src/data/thirupugazhSongs.ts`

2. Add a new song object following this template:

```typescript
{
  id: 31,  // Next available ID
  songNumber: 31,  // Actual song number from Thirupugazh
  songName: {
    english: "English transliteration of song name",
    tamil: "தமிழ் பாடல் பெயர்"
  },
  place: {
    english: "Place name in English",
    tamil: "இடத்தின் பெயர்"
  },
  lyrics: {
    english: "First verse or full song in English\nUse \\n for line breaks",
    tamil: "தமிழில் முதல் வரி அல்லது முழு பாடல்\nவரி முறிவுகளுக்கு \\n பயன்படுத்தவும்"
  }
}
```

3. Guidelines:
   - Ensure Tamil text is accurate
   - Use proper English transliteration
   - Include at least the first verse or full song
   - Verify the song number is correct
   - Maintain the bilingual structure

### 2. Improving Translations

Help make the app more accessible in Tamil and English.

**Steps**:

1. For English: Edit `src/locales/en.ts`
2. For Tamil: Edit `src/locales/ta.ts`

3. Ensure translations are:
   - Accurate and natural
   - Consistent with existing terminology
   - Culturally appropriate
   - Easy to understand

### 3. Adding New Languages

Want to add support for another language?

**Steps**:

1. Create new locale file (e.g., `src/locales/hi.ts` for Hindi)
2. Copy structure from `en.ts` or `ta.ts`
3. Translate all keys
4. Register in `src/locales/i18n.ts`
5. Update `Language` type in `src/types/index.ts`
6. Update `LanguageSelector` component

### 4. Bug Fixes

Found a bug? Please help fix it!

**Steps**:

1. Create an issue describing the bug
2. Include steps to reproduce
3. Submit a pull request with the fix
4. Add tests if applicable

### 5. UI/UX Improvements

Have ideas for better design or user experience?

**Guidelines**:
- Maintain devotional theme (orange, gold, red)
- Keep UI simple and clean
- Ensure accessibility
- Test on both iOS and Android
- Maintain Tamil text readability

### 6. New Features

Want to add a new feature?

**Process**:

1. Open an issue first to discuss the feature
2. Wait for approval/feedback
3. Implement the feature
4. Submit pull request with:
   - Feature documentation
   - Updated README if needed
   - Tests if applicable

**Feature Ideas**:
- Audio playback
- Favorites/bookmarks
- Share functionality
- Offline mode
- Daily notifications
- Festival calendar
- Song meanings/translations

## 📝 Code Style Guidelines

### TypeScript
- Use TypeScript for all new files
- Define proper interfaces and types
- Avoid `any` type

### React/React Native
- Use functional components with hooks
- Follow React best practices
- Use proper prop types
- Add comments for complex logic

### Naming Conventions
- Components: PascalCase (e.g., `SongCard.tsx`)
- Functions: camelCase (e.g., `searchSongs`)
- Constants: UPPER_SNAKE_CASE (e.g., `LANGUAGE_STORAGE_KEY`)
- Files: Match component name

### Code Organization
```typescript
// 1. Imports
import React from 'react';
import { View } from 'react-native';

// 2. Types/Interfaces
interface Props {
  // ...
}

// 3. Component
const Component: React.FC<Props> = ({ }) => {
  // 4. Hooks
  // 5. Functions
  // 6. Render
};

// 7. Styles
const styles = StyleSheet.create({
  // ...
});

// 8. Export
export default Component;
```

## 🧪 Testing

Before submitting:

1. **Run the app**:
   ```bash
   npx expo start
   ```

2. **Test on devices**:
   - Test on both iOS and Android if possible
   - Test language switching
   - Test search functionality
   - Test navigation

3. **Check TypeScript**:
   ```bash
   npx tsc --noEmit
   ```

4. **Format code** (if prettier is set up):
   ```bash
   npm run format
   ```

## 📋 Pull Request Process

1. **Fork the repository**

2. **Create a branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**

4. **Commit with clear messages**:
   ```bash
   git commit -m "Add: Song number 50 with Tamil and English"
   ```

5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create Pull Request**:
   - Clear title and description
   - Reference any related issues
   - Include screenshots if UI changes
   - List what was tested

## ✅ Checklist for Contributors

Before submitting a PR, ensure:

- [ ] Code follows style guidelines
- [ ] All new code has proper TypeScript types
- [ ] Tamil text displays correctly
- [ ] App runs without errors
- [ ] Language switching works
- [ ] Search functionality works with changes
- [ ] No console warnings or errors
- [ ] Documentation updated if needed
- [ ] Tested on at least one device

## 🙏 Code of Conduct

This is a devotional project. Please:

- Be respectful and kind
- Focus on constructive feedback
- Respect cultural and religious sensitivities
- Keep content appropriate and accurate
- Help create a welcoming community

## 📞 Questions?

- Open an issue for questions
- Check existing issues first
- Be patient and respectful

## 🌟 Recognition

All contributors will be recognized in the project. Thank you for helping make this devotional app better!

---

**Om Saravanabhava! 🙏**

Your contributions help devotees worldwide access Thirupugazh songs easily.
