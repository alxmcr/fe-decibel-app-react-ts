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

export const song001: SongInPlaylistData = {
  position: 1,
  song: aiSong,
};

export const song002: SongInPlaylistData = {
  position: 2,
  song: onYourMindSong,
};

export const song003: SongInPlaylistData = {
  position: 3,
  song: summersEndSong,
};

export const song004: SongInPlaylistData = {
  position: 4,
  song: thoughtItWasUSong,
};

export const song005: SongInPlaylistData = {
  position: 5,
  song: vbmSong,
};

export const song006: SongInPlaylistData = {
  position: 6,
  song: apartSong,
};

export const song007: SongInPlaylistData = {
  position: 7,
  song: downBeatSong,
};

export const song008: SongInPlaylistData = {
  position: 8,
  song: flySong,
};
