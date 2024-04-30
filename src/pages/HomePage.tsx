import LayoutHomePage from '../@layouts/LayoutHomePage';
import DialogPlaylistProvider from '../providers/DialogPlaylistProvider';
import PlayerProvider from '../providers/PlayerProvider';
import PlaylistProvider from '../providers/PlaylistProvider';

export default function HomePage() {
  return (
    <DialogPlaylistProvider>
      <PlaylistProvider>
        <PlayerProvider>
          <LayoutHomePage />
        </PlayerProvider>
      </PlaylistProvider>
    </DialogPlaylistProvider>
  );
}
