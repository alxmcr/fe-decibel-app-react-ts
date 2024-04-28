import React from 'react';
import { PlayerDataContext } from '../../providers/PlayerProvider/PlayerContext';
import PlayerChronometer from './PlayerChronometer';
import PlayerProgressBar from './PlayerProgressBar';

export default function PlayerInfoProgress() {
  const { elapsedTimeInSeconds, audioToPlay } = React.useContext(PlayerDataContext);
  const durationOnSeconds = audioToPlay !== null ? audioToPlay.duration : 0;

  return (
    <div className="flex flex-col gap-2 border">
      <PlayerProgressBar />
      <PlayerChronometer durationOnSeconds={durationOnSeconds} elapsedTimeInSeconds={elapsedTimeInSeconds} />
    </div>
  );
}
