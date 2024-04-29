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

    case 'set-is-playable': {
      return { ...state, isPlayableAudio: action.payload.isPlayable };
    }

    case 'update-elapsed-time': {
      return { ...state, elapsedTimeInSeconds: action.payload.elapsedTimeInSeconds };
    }

    case 'update-duration-time': {
      return { ...state, durationOnSeconds: action.payload.durationOnSeconds };
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
