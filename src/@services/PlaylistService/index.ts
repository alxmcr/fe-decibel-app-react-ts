import { MOCK_PLAYLIST_001, MOCK_PLAYLIST_002, MOCK_PLAYLIST_003 } from '../../@mocks/mock-playlists';
import { PlaylistData } from '../../@types/serviceTypes';
import { IPlaylistService } from './IPlaylistService';

export class PlaylistService implements IPlaylistService {
  findPlaylistById(id: string = ''): PlaylistData | null {
    if (id === '') {
      return null;
    }

    switch (id) {
      case 'playlist-001': {
        return MOCK_PLAYLIST_001;
      }

      case 'playlist-002': {
        return MOCK_PLAYLIST_002;
      }

      case 'playlist-003': {
        return MOCK_PLAYLIST_003;
      }

      default: {
        return null;
      }
    }
  }
}
