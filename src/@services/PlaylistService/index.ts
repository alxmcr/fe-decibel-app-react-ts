import { MOCK_PLAYLIST_001, MOCK_PLAYLIST_002, MOCK_PLAYLIST_003 } from '../../@mocks/mock-playlists';
import { PlaylistData } from '../../@types/serviceTypes';
import { IPlaylistService } from './IPlaylistService';

export class PlaylistService implements IPlaylistService {
  findPlaylistById(id: string = ''): PlaylistData | null {
    if (id === '') {
      return null;
    }

    let playlistResponse = null;

    switch (id) {
      case 'playlist-001': {
        playlistResponse = MOCK_PLAYLIST_001;
        break;
      }

      case 'playlist-002': {
        playlistResponse = MOCK_PLAYLIST_002;
        break;
      }

      case 'playlist-003': {
        playlistResponse = MOCK_PLAYLIST_003;
        break;
      }

      default: {
        playlistResponse = null;
        break;
      }
    }

    return playlistResponse;
  }
}
