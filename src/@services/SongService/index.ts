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

    let responseSong = null;

    switch (id) {
      case 'song-001': {
        responseSong = aiSong;
        break;
      }

      case 'song-002': {
        responseSong = onYourMindSong;
        break;
      }

      case 'song-003': {
        responseSong = summersEndSong;
        break;
      }

      case 'song-004': {
        responseSong = thoughtItWasUSong;
        break;
      }

      case 'song-005': {
        responseSong = vbmSong;
        break;
      }

      case 'song-006': {
        responseSong = apartSong;
        break;
      }

      case 'song-007': {
        responseSong = summersEndSong;
        break;
      }

      case 'song-008': {
        responseSong = downBeatSong;
        break;
      }

      case 'song-009': {
        responseSong = flySong;
        break;
      }

      default: {
        responseSong = null;
        break;
      }
    }

    return responseSong;
  }
}
