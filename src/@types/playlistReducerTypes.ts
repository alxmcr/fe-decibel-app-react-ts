import { PlaylistData } from './serviceTypes';

/**
  - 'set_playlist_to_play' => currentPlaylist = action.payload.currentPlaylist
  
 */

export type PlaylistState = {
  currentPlaylist: PlaylistData;
};

export type PlaylistAction = {
  type: 'set_playlist_to_play';
};
