import { PlaylistData } from '../@types/serviceTypes';
import {
  song001,
  song002,
  song003,
  song004,
  song005,
  song006,
  song007,
  song008,
} from './mock-songs-in-playlist';

export const MOCK_PLAYLIST_001: PlaylistData = {
  id: 'playlist-001',
  songs: [song001, song002, song003, song004, song005, song006, song007, song008],
};

export const MOCK_PLAYLIST_002: PlaylistData = {
  id: 'playlist-002',
  songs: [song006, song007],
};

export const MOCK_PLAYLIST_003: PlaylistData = {
  id: 'playlist-003',
  songs: [song002, song003, song005, song008],
};
