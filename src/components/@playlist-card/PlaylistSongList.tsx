import { SongInPlaylistData } from '../../@types/serviceTypes';
import PlaylistSongListItem from './PlaylistSongListItem';

type Props = {
  songsInPlaylist: SongInPlaylistData[];
};

export default function PlaylistSongList({ songsInPlaylist = [] }: Props) {
  return (
    <ul className="flex flex-col gap-3">
      {songsInPlaylist.map((song) => (
        <PlaylistSongListItem key={song.id} songInPlaylist={song} />
      ))}
    </ul>
  );
}
