import React from 'react';
import { TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Speech from 'expo-speech';
import { useTranslation } from 'react-i18next';

interface VoiceButtonProps {
  onResult: (text: string) => void;
  isListening: boolean;
  setIsListening: (listening: boolean) => void;
}

const VoiceButton: React.FC<VoiceButtonProps> = ({ onResult, isListening, setIsListening }) => {
  const { t } = useTranslation();

  const handleVoiceInput = async () => {
    try {
      // Note: expo-speech is primarily for text-to-speech
      // For speech-to-text, we would need expo-speech-recognition or react-native-voice
      // For now, we'll show an alert that this feature requires additional setup
      Alert.alert(
        t('permissions.microphoneTitle'),
        'Voice search requires additional setup. Please use text search for now.',
        [{ text: 'OK' }]
      );
    } catch (error) {
      Alert.alert(t('errors.speechError'), String(error));
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, isListening && styles.listening]}
      onPress={handleVoiceInput}
      disabled={isListening}
    >
      <Ionicons 
        name={isListening ? "mic" : "mic-outline"} 
        size={24} 
        color={isListening ? "#FF6B35" : "#666"} 
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listening: {
    backgroundColor: '#FFE5DC',
  },
});

export default VoiceButton;
