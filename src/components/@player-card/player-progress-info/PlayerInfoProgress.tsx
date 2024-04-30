import React from 'react';
import { PlayerDataContext, PlayerDispatchContext } from '../../../providers/PlayerProvider/PlayerContext';
import PlayerChronometer from './PlayerChronometer';
import PlayerProgressBar from './PlayerProgressBar';
import { updateDurationTimeAction } from '../../../store/@actions-creators/playerActions';

export default function PlayerInfoProgress() {
  const { elapsedTimeInSeconds, audioToPlay, isPlayableAudio, durationOnSeconds } =
    React.useContext(PlayerDataContext);
  const dispatchPlayer = React.useContext(PlayerDispatchContext);

  // update duration data
  React.useEffect(() => {
    if (audioToPlay !== null && audioToPlay !== undefined) {
      if (isPlayableAudio) {
        const { duration } = audioToPlay;

        if (!isNaN(duration)) {
          updateDurationTimeAction(dispatchPlayer, duration);
        }
      }
    }
  }, [isPlayableAudio, audioToPlay, dispatchPlayer]);

  return (
    <div className="flex flex-col gap-2">
      <PlayerProgressBar durationOnSeconds={durationOnSeconds} elapsedTimeInSeconds={elapsedTimeInSeconds} />
      <PlayerChronometer durationOnSeconds={durationOnSeconds} elapsedTimeInSeconds={elapsedTimeInSeconds} />
    </div>
  );
}
