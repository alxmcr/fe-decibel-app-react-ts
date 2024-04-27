import { PlaylistAction } from '../../@types/playlistReducerTypes';
import { PlaylistData, SongInPlaylistData } from '../../@types/serviceTypes';

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

export const selectSongToPlay = (
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
