import CardPlayer from '../components/@player/CardPlayer';
import DialogPlaylist from '../components/@playlist-dialog/DialogPlaylist';

export default function HomePage() {
  return (
    <main className="flex h-screen items-center justify-center gap-2 bg-perano-200">
      <CardPlayer />
      <DialogPlaylist />
    </main>
  );
}
