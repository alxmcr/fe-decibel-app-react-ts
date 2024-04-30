import { LoadingStates } from '../../@enums/appEnums';
import { PlaylistAction, PlaylistState } from '../../@types/playlistReducerTypes';

export default function playlistReducer(state: PlaylistState, action: PlaylistAction): PlaylistState {
  switch (action.type) {
    case 'idle-fetching-playlist': {
      return { ...state, statusPlaylist: LoadingStates.IDLE };
    }

    case 'init-fetching-playlist': {
      return { ...state, statusPlaylist: LoadingStates.PENDING };
    }

    case 'error-fetching-playlist': {
      return { ...state, statusPlaylist: LoadingStates.ERROR, errorPlaylist: action.payload.errorResponse };
    }

    case 'success-fetching-playlist': {
      return {
        ...state,
        statusPlaylist: LoadingStates.SUCCESS,
        currentPlaylist: action.payload.playlistResponse,
      };
    }

    case 'select_playlist_to_play': {
      return { ...state, currentPlaylist: action.payload.currentPlaylist };
    }

    case 'select_song_to_play': {
      return { ...state, currentSongPlaying: action.payload.songSelectedOnPlaylist };
    }

    case 'move_pointer_position': {
      return { ...state, pointerPositionSong: action.payload.newPointerPosition };
    }

    default: {
      throw Error(`Unknown action`);
    }
  }
}
