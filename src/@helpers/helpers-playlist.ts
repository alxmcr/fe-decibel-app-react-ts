import { SongInPlaylistData } from '../@types/serviceTypes';

export default function sortSongsOnPlaylistByPosition(songs: SongInPlaylistData[] = []) {
  return songs.sort((songA, songB) => songA.position - songB.position);
}
