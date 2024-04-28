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
  currentSongPlaying: null,
  pointerPositionSong: 0,
};

export const initialPlayerData: PlayerState = {
  statusPlayer: PlayerStatus.IDLE,
  audioToPlay: null,
  isPlayableAudio: false,
  elapsedTimeInSeconds: 0
};
