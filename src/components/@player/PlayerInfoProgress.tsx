import React from 'react';
import { PlayerDataContext, PlayerDispatchContext } from '../../providers/PlayerProvider/PlayerContext';
import PlayerChronometer from './PlayerChronometer';
import PlayerProgressBar from './PlayerProgressBar';
import { updateElapsedTime } from '../../store/@actions-creators/playerActions';

export default function PlayerInfoProgress() {
  const { elapsedTimeInSeconds, audioToPlay, isPlayableAudio } = React.useContext(PlayerDataContext);
  const [durationOnSeconds, setDurationOnSeconds] = React.useState(0);
  const dispatchPlayer = React.useContext(PlayerDispatchContext);

  // update duration data
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

  // update elapsedTime
  React.useEffect(() => {
    if (audioToPlay !== null) {
      audioToPlay.addEventListener('timeupdate', () => {
        // Updated
        updateElapsedTime(dispatchPlayer, audioToPlay.currentTime);
      });
    }
  }, [audioToPlay, dispatchPlayer]);

  return (
    <div className="flex flex-col gap-2 border">
      <PlayerProgressBar durationOnSeconds={durationOnSeconds} elapsedTimeInSeconds={elapsedTimeInSeconds} />
      <PlayerChronometer durationOnSeconds={durationOnSeconds} elapsedTimeInSeconds={elapsedTimeInSeconds} />
    </div>
  );
}
