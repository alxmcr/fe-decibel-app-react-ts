import CardPlayer from '../@player-card/CardPlayer';
import CardPlaylist from '../@playlist-card/CardPlaylist';

export default function PlayerContainer() {
  return (
    <div className="flex gap-2">
      <CardPlayer />
      <CardPlaylist />
    </div>
  );
}
