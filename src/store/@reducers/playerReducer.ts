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

    case 'set-audio': {
      return { ...state, audioToPlay: action.payload.newAudio };
    }

    case 'prev-audio': {
      return { ...state, audioToPlay: action.payload.prevAudio };
    }

    case 'next-audio': {
      return { ...state, audioToPlay: action.payload.nextAudio };
    }

    default: {
      throw Error(`Unknown action`);
    }
  }
}
