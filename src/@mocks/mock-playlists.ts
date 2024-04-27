import { PlaylistData } from '../@types/serviceTypes';
import {
  songPlaylist001,
  songPlaylist002,
  songPlaylist003,
  songPlaylist004,
  songPlaylist005,
  songPlaylist006,
  songPlaylist007,
  songPlaylist008,
} from './mock-songs-in-playlist';

export const MOCK_PLAYLIST_001: PlaylistData = {
  id: 'playlist-001',
  songs: [
    songPlaylist001,
    songPlaylist002,
    songPlaylist003,
    songPlaylist004,
    songPlaylist005,
    songPlaylist006,
    songPlaylist007,
    songPlaylist008,
  ],
};

export const MOCK_PLAYLIST_002: PlaylistData = {
  id: 'playlist-002',
  songs: [songPlaylist006, songPlaylist007],
};

export const MOCK_PLAYLIST_003: PlaylistData = {
  id: 'playlist-003',
  songs: [songPlaylist002, songPlaylist003, songPlaylist005, songPlaylist008],
};
