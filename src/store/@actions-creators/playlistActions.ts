import { PlaylistAction } from '../../@types/playlistReducerTypes';
import { PlaylistData } from '../../@types/serviceTypes';

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
