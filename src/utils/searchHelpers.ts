import { Song, Language } from '../types';

/**
 * Search songs by multiple criteria (number, name, place)
 * Supports both English and Tamil text
 */
export const searchSongs = (
  songs: Song[],
  query: string,
  language: Language
): Song[] => {
  if (!query || query.trim() === '') {
    return songs;
  }

  const searchTerm = query.toLowerCase().trim();
  const languageKey = language === 'en' ? 'english' : 'tamil';

  return songs.filter(song => {
    // Search by song number (works in both languages)
    const songNumberMatch = song.songNumber.toString().includes(searchTerm);

    // Search by song name in the selected language
    const songNameMatch = song.songName[languageKey]
      .toLowerCase()
      .includes(searchTerm);

    // Search by place in the selected language
    const placeMatch = song.place[languageKey]
      .toLowerCase()
      .includes(searchTerm);

    // Also search in the opposite language to support bilingual search
    const oppositeLanguageKey = language === 'en' ? 'tamil' : 'english';
    const songNameMatchOpposite = song.songName[oppositeLanguageKey]
      .toLowerCase()
      .includes(searchTerm);
    const placeMatchOpposite = song.place[oppositeLanguageKey]
      .toLowerCase()
      .includes(searchTerm);

    return songNumberMatch || songNameMatch || placeMatch || 
           songNameMatchOpposite || placeMatchOpposite;
  });
};

/**
 * Filter songs by exact song number
 */
export const getSongByNumber = (songs: Song[], songNumber: number): Song | undefined => {
  return songs.find(song => song.songNumber === songNumber);
};

/**
 * Get all unique places from songs
 */
export const getUniquePlaces = (songs: Song[], language: Language): string[] => {
  const languageKey = language === 'en' ? 'english' : 'tamil';
  const places = songs.map(song => song.place[languageKey]);
  return Array.from(new Set(places)).sort();
};
