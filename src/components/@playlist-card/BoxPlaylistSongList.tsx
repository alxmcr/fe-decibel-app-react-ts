import { SongInPlaylistData } from '../../@types/serviceTypes';
import PlaylistSongList from './PlaylistSongList';

type Props = {
  songsInPlaylist: SongInPlaylistData[];
};

export default function BoxPlaylistSongList({ songsInPlaylist = [] }: Props) {
  if (songsInPlaylist.length === 0) {
    return (
      <div className="scrollbar-app h-5/6 overflow-auto bg-light-50 px-2 py-1">
        <h2>Your playlist is empty.</h2>
      </div>
    );
  }

  return (
    <div className="scrollbar-app h-5/6 overflow-auto bg-light-50 px-2 py-1">
      <PlaylistSongList songsInPlaylist={songsInPlaylist} />
    </div>
  );
}
