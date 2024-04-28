import React from 'react';
import { PlayerDataContext } from '../../providers/PlayerProvider/PlayerContext';
import PlayerChronometer from './PlayerChronometer';
import PlayerProgressBar from './PlayerProgressBar';

export default function PlayerInfoProgress() {
  const { elapsedTimeInSeconds, audioToPlay, isPlayableAudio } = React.useContext(PlayerDataContext);
  const [durationOnSeconds, setDurationOnSeconds] = React.useState(0);

  React.useEffect(() => {
    if (audioToPlay !== null && audioToPlay !== undefined) {
      if (isPlayableAudio) {
        const { duration } = audioToPlay;

        if (!isNaN(duration)) {
          setDurationOnSeconds(duration);
        }
      }
    }
  }, [isPlayableAudio, audioToPlay]);

  return (
    <div className="flex flex-col gap-2 border">
      <PlayerProgressBar />
      <PlayerChronometer durationOnSeconds={durationOnSeconds} elapsedTimeInSeconds={elapsedTimeInSeconds} />
    </div>
  );
}
