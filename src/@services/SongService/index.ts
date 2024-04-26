import {
  aiSong,
  onYourMindSong,
  summersEndSong,
  thoughtItWasUSong,
  vbmSong,
  apartSong,
  downBeatSong,
  flySong,
} from '../../@mocks/mock-songs';
import { SongData } from '../../@types/serviceTypes';
import { ISongService } from './ISongService';

export class SongService implements ISongService {
  findSongById(id = ''): SongData | null {
    if (id === '') {
      return null;
    }

    switch (id) {
      case 'song-001': {
        return aiSong;
      }

      case 'song-002': {
        return onYourMindSong;
      }

      case 'song-003': {
        return summersEndSong;
      }

      case 'song-004': {
        return thoughtItWasUSong;
      }

      case 'song-005': {
        return vbmSong;
      }

      case 'song-006': {
        return apartSong;
      }

      case 'song-007': {
        return summersEndSong;
      }

      case 'song-008': {
        return downBeatSong;
      }

      case 'song-009': {
        return flySong;
      }

      default: {
        return null;
      }
    }
  }
}
