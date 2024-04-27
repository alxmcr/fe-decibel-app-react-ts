import PlayerChronometer from './PlayerChronometer';
import PlayerProgressBar from './PlayerProgressBar';

export default function PlayerInfoProgress() {
  return (
    <div className="flex flex-col gap-2 border">
      <PlayerProgressBar />
      <PlayerChronometer />
    </div>
  );
}
