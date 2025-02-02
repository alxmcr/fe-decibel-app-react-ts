import PlayerControls from './player-controls/PlayerControls';
import PlayerInfoProgress from './player-progress-info/PlayerInfoProgress';
import PlayerSongAttribution from './player-song-info/PlayerSongAttribution';

export default function FooterCardPlayer() {
  return (
    <footer className="flex flex-col gap-5">
      <PlayerInfoProgress />
      <PlayerControls />
      <PlayerSongAttribution />
    </footer>
  );
}
