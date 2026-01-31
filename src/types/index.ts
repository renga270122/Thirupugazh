// Type definitions for Thirupugazh app

export interface BilingualText {
  english: string;
  tamil: string;
}

export interface Song {
  id: number;
  songNumber: number;
  songName: BilingualText;
  place: BilingualText;
  lyrics: BilingualText;
}

export type Language = 'en' | 'ta';

export interface SearchFilters {
  query: string;
  language: Language;
}
