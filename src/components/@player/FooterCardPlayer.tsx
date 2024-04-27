import PlayerControls from './PlayerControls';
import PlayerInfoProgress from './PlayerInfoProgress';

export default function FooterCardPlayer() {
  return (
    <footer className="flex flex-col gap-5 border">
      <PlayerInfoProgress />
      <PlayerControls />
    </footer>
  );
}
