import { PlaylistAction } from '../../@types/playlistReducerTypes';
import { PlaylistData } from '../../@types/serviceTypes';

export const setPlaylist = (dispatch: React.Dispatch<PlaylistAction>, currentPlaylist: PlaylistData) => {
  dispatch({
    type: 'set_playlist_to_play',
    payload: {
      currentPlaylist,
    },
  });
};
