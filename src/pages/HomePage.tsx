import CardPlayer from '../components/@player/CardPlayer';
import DialogPlaylist from '../components/@playlist-dialog/DialogPlaylist';
import PlaylistProvider from '../providers/PlaylistProvider';

export default function HomePage() {
  return (
    <PlaylistProvider>
      <main className="flex h-screen items-center justify-center gap-2 bg-perano-200">
        <CardPlayer />
        <DialogPlaylist />
      </main>
    </PlaylistProvider>
  );
}
