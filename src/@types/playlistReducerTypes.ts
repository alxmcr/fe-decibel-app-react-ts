import { LoadingStates } from '../@enums/appEnums';
import { PlaylistData } from './serviceTypes';

/**
  - 'select_playlist_to_play' => currentPlaylist = action.payload.currentPlaylist
*/

export type PlaylistState = {
  statusPlaylist: LoadingStates;
  errorPlaylist: Error | null;
  currentPlaylist: PlaylistData;
};

export type PlaylistInitFetchingAction = {
  type: 'init-fetching-playlist';
};

export type PlaylistSuccessFetchingAction = {
  type: 'success-fetching-playlist';
  payload: {
    playlistResponse: PlaylistData;
  };
};

export type PlaylistErrorFetchingAction = {
  type: 'error-fetching-playlist';
  payload: {
    errorResponse: Error;
  };
};

export type PlaylistFetchingActions =
  | PlaylistInitFetchingAction
  | PlaylistSuccessFetchingAction
  | PlaylistErrorFetchingAction;

export type PlaylistSetCurrentPlaylist = {
  type: 'select_playlist_to_play';
  payload: {
    currentPlaylist: PlaylistData;
  };
};

export type PlaylistAction = PlaylistFetchingActions | PlaylistSetCurrentPlaylist;
