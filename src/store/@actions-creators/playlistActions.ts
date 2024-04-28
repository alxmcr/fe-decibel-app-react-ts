import { PlaylistAction } from '../../@types/playlistReducerTypes';
import { PlaylistData, SongInPlaylistData } from '../../@types/serviceTypes';

export const initFetchingPlaylistAction = (dispatch: React.Dispatch<PlaylistAction>) => {
  dispatch({
    type: 'init-fetching-playlist',
  });
};

export const successFetchingPlaylistAction = (
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

export const errorFetchingPlaylistAction = (dispatch: React.Dispatch<PlaylistAction>, errorResponse: Error) => {
  dispatch({
    type: 'error-fetching-playlist',
    payload: {
      errorResponse,
    },
  });
};

export const movePointerPositionAction = (dispatch: React.Dispatch<PlaylistAction>, newPointerPosition = 0) => {
  dispatch({
    type: 'move_pointer_position',
    payload: {
      newPointerPosition,
    },
  });
};

export const selectSongToPlayAction = (
  dispatch: React.Dispatch<PlaylistAction>,
  songSelectedOnPlaylist: SongInPlaylistData,
) => {
  dispatch({
    type: 'select_song_to_play',
    payload: {
      songSelectedOnPlaylist,
    },
  });
};

export const selectPlaylistToPlayAction = (
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
