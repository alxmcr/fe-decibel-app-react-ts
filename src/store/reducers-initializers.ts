import { LoadingStates, PlayerStatus } from '../@enums/appEnums';
import { PlayerState } from '../@types/playerReducerTypes';
import { PlaylistState } from '../@types/playlistReducerTypes';

export const initialPlaylistData: PlaylistState = {
  statusPlaylist: LoadingStates.IDLE,
  errorPlaylist: null,
  currentPlaylist: {
    id: '',
    songs: [],
  },
};

export const initialPlayerData: PlayerState = {
  idSongPlaying: '',
  numberPositionSongPlaying: 0,
  statusPlayer: PlayerStatus.IDLE,
  totalNumberSongsToPlaying: 0,
};
