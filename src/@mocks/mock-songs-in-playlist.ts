import { SongInPlaylistData } from '../@types/serviceTypes';
import {
  aiSong,
  apartSong,
  downBeatSong,
  flySong,
  onYourMindSong,
  summersEndSong,
  thoughtItWasUSong,
  vbmSong,
} from './mock-songs';

export const songPlaylist001: SongInPlaylistData = {
  position: 1,
  ...aiSong,
};

export const songPlaylist002: SongInPlaylistData = {
  position: 2,
  ...onYourMindSong,
};

export const songPlaylist003: SongInPlaylistData = {
  position: 3,
  ...summersEndSong,
};

export const songPlaylist004: SongInPlaylistData = {
  position: 4,
  ...thoughtItWasUSong,
};

export const songPlaylist005: SongInPlaylistData = {
  position: 5,
  ...vbmSong,
};

export const songPlaylist006: SongInPlaylistData = {
  position: 6,
  ...apartSong,
};

export const songPlaylist007: SongInPlaylistData = {
  position: 7,
  ...downBeatSong,
};

export const songPlaylist008: SongInPlaylistData = {
  position: 8,
  ...flySong,
};
