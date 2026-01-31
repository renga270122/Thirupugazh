import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, language === 'ta' && styles.activeButton]}
        onPress={() => setLanguage('ta')}
      >
        <Text style={[styles.buttonText, language === 'ta' && styles.activeText]}>
          {t('common.tamil')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, language === 'en' && styles.activeButton]}
        onPress={() => setLanguage('en')}
      >
        <Text style={[styles.buttonText, language === 'en' && styles.activeText]}>
          {t('common.english')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#FF6B35',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
  },
  activeButton: {
    backgroundColor: '#FF6B35',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FF6B35',
  },
  activeText: {
    color: '#FFFFFF',
  },
});

export default LanguageSelector;
