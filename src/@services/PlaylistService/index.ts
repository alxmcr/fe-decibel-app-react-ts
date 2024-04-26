import { MOCK_PLAYLIST_001, MOCK_PLAYLIST_002, MOCK_PLAYLIST_003 } from '../../@mocks/mock-playlists';
import { PlaylistData, SongInPlaylistData } from '../../@types/serviceTypes';
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

  findSongOnPlaylistById(playlist: PlaylistData, songId = ''): Promise<SongInPlaylistData> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (playlist === null) {
          reject('Playlist is not valid');
        }

        if (playlist.songs === null) {
          reject('Playlist does not have songs.');
        }

        if (playlist.songs.length === 0) {
          reject('Playlist is empty.');
        }

        const song = playlist.songs.find((songInPlaylist) => songInPlaylist.id === songId);

        if (song === null || song === undefined) {
          reject(`There is not a song with this id ${songId}`);
        } else {
          resolve(song);
        }
      }, 1000);
    });
  }
}
