import { PlaylistAction, PlaylistState } from '../../@types/playlistReducerTypes';

export default function playlistReducer(state: PlaylistState, action: PlaylistAction): PlaylistState {
  switch (action.type) {
    case 'set_playlist_to_play': {
      return { ...state, currentPlaylist: action.payload.currentPlaylist };
    }

    default: {
      throw Error(`Unknown action`);
    }
  }
}
