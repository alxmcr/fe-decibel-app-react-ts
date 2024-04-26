import { MOCK_PLAYLIST_001, MOCK_PLAYLIST_002, MOCK_PLAYLIST_003 } from '../../@mocks/mock-playlists';
import { PlaylistData } from '../../@types/serviceTypes';
import { IPlaylistService } from './IPlaylistService';

export class PlaylistService implements IPlaylistService {
  findPlaylistById(id: string = ''): Promise<PlaylistData | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
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
            // Simulate an error response
            reject(new Error(`API request failed: '${id}' is invalid`));
            break;
          }
        }
        // Simulate a successful response
        resolve(playlistResponse);
      }, 1000); // Simulate a delay of 1 second
    });
  }
}
