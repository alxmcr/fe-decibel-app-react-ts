import CardPlayer from '../@player-card/CardPlayer';
import DialogPlaylist from '../@playlist-dialog/DialogPlaylist';

export default function PlayerContainer() {
  return (
    <div className="relative flex h-[41.75rem] w-80 gap-2">
      <CardPlayer />
      <DialogPlaylist />
    </div>
  );
}
