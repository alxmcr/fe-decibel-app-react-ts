import { LoadingStates } from '../@enums/appEnums';
import { PlaylistState } from '../@types/playlistReducerTypes';

export const initialPlaylistData: PlaylistState = {
  statusPlaylist: LoadingStates.IDLE,
  errorPlaylist: null,
  currentPlaylist: {
    id: '',
    songs: [],
  },
  currentSongPlaying: null,
};
