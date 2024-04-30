import CardPlayer from '../@player-card/CardPlayer';
import CardPlaylist from '../@playlist-card/CardPlaylist';

export default function Player() {
  return (
    <div className="flex gap-2">
      <CardPlayer />
      <CardPlaylist />
    </div>
  );
}
