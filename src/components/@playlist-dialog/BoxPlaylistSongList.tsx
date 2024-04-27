import { SongInPlaylistData } from '../../@types/serviceTypes';
import PlaylistSongList from './PlaylistSongList';

type Props = {
  songsInPlaylist: SongInPlaylistData[];
};

export default function BoxPlaylistSongList({ songsInPlaylist = [] }: Props) {
  if (songsInPlaylist.length === 0) {
    return (
      <div className="scrollbar-app flex h-[585px] w-full flex-col items-center justify-center gap-3 overflow-auto">
        <h2>Your playlist is empty.</h2>
      </div>
    );
  }

  return (
    <div className="scrollbar-app flex h-[585px] w-full flex-col items-center justify-center gap-3 overflow-auto">
      <PlaylistSongList songsInPlaylist={songsInPlaylist} />
    </div>
  );
}
