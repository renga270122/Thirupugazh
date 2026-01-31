import { Song } from '../types';

export type RootStackParamList = {
  Home: undefined;
  SongDetail: { song: Song };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
