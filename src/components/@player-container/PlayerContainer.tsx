import CardPlayer from '../@player-card/CardPlayer';
import DialogPlaylist from '../@playlist-dialog/DialogPlaylist';

export default function PlayerContainer() {
  return (
    <div className="relative flex h-[668px] w-[320px] gap-2 border">
      <CardPlayer />
      <DialogPlaylist />
    </div>
  );
}
