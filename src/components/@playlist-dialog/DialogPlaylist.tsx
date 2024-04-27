import { MOCK_PLAYLIST_001 } from '../../@mocks/mock-playlists';
import BoxPlaylistSongList from './BoxPlaylistSongList';
import HeaderDialogPlaylist from './HeaderDialogPlaylist';

export default function DialogPlaylist() {
  const playlist = MOCK_PLAYLIST_001;

  return (
    <article className="flex h-[668px] w-[320px] flex-col justify-between gap-4 rounded-lg border bg-white md:h-[700px] md:w-[360px]">
      <HeaderDialogPlaylist />
      <BoxPlaylistSongList songsInPlaylist={playlist.songs} />
    </article>
  );
}
