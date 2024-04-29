import PlayerControls from './player-controls/PlayerControls';
import PlayerInfoProgress from './player-progress-info/PlayerInfoProgress';

export default function FooterCardPlayer() {
  return (
    <footer className="flex flex-col gap-5 border">
      <PlayerInfoProgress />
      <PlayerControls />
    </footer>
  );
}
