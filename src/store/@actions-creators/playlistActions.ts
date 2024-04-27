import { PlaylistAction } from '../../@types/playlistReducerTypes';
import { PlaylistData } from '../../@types/serviceTypes';

export const initFetchingPlaylist = (dispatch: React.Dispatch<PlaylistAction>) => {
  dispatch({
    type: 'init-fetching-playlist',
  });
};

export const successFetchingPlaylist = (
  dispatch: React.Dispatch<PlaylistAction>,
  playlistResponse: PlaylistData,
) => {
  dispatch({
    type: 'success-fetching-playlist',
    payload: {
      playlistResponse,
    },
  });
};

export const errorFetchingPlaylist = (dispatch: React.Dispatch<PlaylistAction>, errorResponse: Error) => {
  dispatch({
    type: 'error-fetching-playlist',
    payload: {
      errorResponse,
    },
  });
};

export const selectPlaylistToPlay = (
  dispatch: React.Dispatch<PlaylistAction>,
  currentPlaylist: PlaylistData,
) => {
  dispatch({
    type: 'select_playlist_to_play',
    payload: {
      currentPlaylist,
    },
  });
};
