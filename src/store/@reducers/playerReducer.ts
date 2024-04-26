import { PlayerStatus } from '../../@enums/appEnums';
import { PlayerAction, PlayerState } from '../../@types/playerReducerTypes';

export default function playerReducer(state: PlayerState, action: PlayerAction): PlayerState {
  switch (action.type) {
    case 'play': {
      return { ...state, statusPlayer: PlayerStatus.NOW_PLAYING };
    }

    case 'pause': {
      return { ...state, statusPlayer: PlayerStatus.PAUSED };
    }

    case 'prev-song': {
      if (state.numberPositionSongPlaying - 1 > 0) {
        return { ...state, numberPositionSongPlaying: state.numberPositionSongPlaying - 1 };
      }

      return state;
    }

    case 'next-song': {
      if (state.numberPositionSongPlaying + 1 <= state.totalNumberSongsToPlaying) {
        return { ...state, numberPositionSongPlaying: state.numberPositionSongPlaying + 1 };
      }

      return state;
    }

    default: {
      throw Error(`Unknown action`);
    }
  }
}
