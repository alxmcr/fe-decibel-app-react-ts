import LayoutHomePage from '../@layouts/LayoutHomePage';
import PlaylistProvider from '../providers/PlaylistProvider';

export default function HomePage() {
  return (
    <PlaylistProvider>
     <LayoutHomePage />
    </PlaylistProvider>
  );
}
