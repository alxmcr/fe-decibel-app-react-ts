import LayoutHomePage from '../@layouts/LayoutHomePage';
import PlayerProvider from '../providers/PlayerProvider';
import PlaylistProvider from '../providers/PlaylistProvider';

export default function HomePage() {
  return (
    <PlaylistProvider>
      <PlayerProvider>
        <LayoutHomePage />
      </PlayerProvider>
    </PlaylistProvider>
  );
}
