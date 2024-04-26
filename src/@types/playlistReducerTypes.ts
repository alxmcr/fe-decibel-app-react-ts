import { PlaylistData } from './serviceTypes';

export type PlaylistState = {
  currentPlaylist: PlaylistData;
};

export type PlaylistAction = {
  type: 'set_playlist_to_play';
};
