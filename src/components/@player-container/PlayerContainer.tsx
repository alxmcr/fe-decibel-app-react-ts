import CardPlayer from '../@player-card/CardPlayer';
import CardPlaylist from '../@playlist-card/CardPlaylist';

export default function PlayerContainer() {
  return (
    <div className="flex h-[668px] w-[320px] gap-2 border">
      <CardPlayer />
      <CardPlaylist />
    </div>
  );
}
