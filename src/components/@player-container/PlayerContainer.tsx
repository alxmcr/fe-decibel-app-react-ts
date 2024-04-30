import CardPlayer from '../@player-card/CardPlayer';
import CardPlaylist from '../@playlist-card/CardPlaylist';

export default function PlayerContainer() {
  return (
    <div className="flex min-h-[668px] min-w-[320px] gap-2">
      <CardPlayer />
      <CardPlaylist />
    </div>
  );
}
