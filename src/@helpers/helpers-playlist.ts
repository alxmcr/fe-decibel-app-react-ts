import { PlaylistData, SongInPlaylistData } from '../@types/serviceTypes';

export function findSongOnPlaylistById(playlist: PlaylistData, songId = ''): Promise<SongInPlaylistData> {
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
