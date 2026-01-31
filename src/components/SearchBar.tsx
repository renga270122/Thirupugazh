import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import VoiceButton from './VoiceButton';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChangeText }) => {
  const { t } = useTranslation();
  const [isListening, setIsListening] = useState(false);

  const handleVoiceResult = (text: string) => {
    onChangeText(text);
    setIsListening(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder={t('search.searchPlaceholder')}
          placeholderTextColor="#999"
          value={value}
          onChangeText={onChangeText}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {value.length > 0 && (
          <Ionicons 
            name="close-circle" 
            size={20} 
            color="#999" 
            style={styles.clearIcon}
            onPress={() => onChangeText('')}
          />
        )}
      </View>
      <VoiceButton
        onResult={handleVoiceResult}
        isListening={isListening}
        setIsListening={setIsListening}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 48,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  clearIcon: {
    marginLeft: 8,
  },
});

export default SearchBar;
