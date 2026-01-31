import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Song } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface SongCardProps {
  song: Song;
  onPress: () => void;
}

const SongCard: React.FC<SongCardProps> = ({ song, onPress }) => {
  const { language } = useLanguage();
  const langKey = language === 'en' ? 'english' : 'tamil';

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.numberContainer}>
        <Text style={styles.number}>{song.songNumber}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.songName} numberOfLines={2}>
          {song.songName[langKey]}
        </Text>
        <Text style={styles.place} numberOfLines={1}>
          {song.place[langKey]}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  numberContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FF6B35',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  number: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  songName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  place: {
    fontSize: 14,
    color: '#666',
  },
});

export default SongCard;
