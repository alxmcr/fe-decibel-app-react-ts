import { MOCK_PLAYLIST_001 } from '../../@mocks/mock-playlists';
import BoxPlaylistSongList from './BoxPlaylistSongList';
import HeaderDialogPlaylist from './HeaderDialogPlaylist';

export default function DialogPlaylist() {
  const playlist = MOCK_PLAYLIST_001;

  return (
    <dialog>
      <HeaderDialogPlaylist />
      <BoxPlaylistSongList songsInPlaylist={playlist.songs} />
    </dialog>
  );
}
