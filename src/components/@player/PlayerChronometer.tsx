import React from 'react';
import { PlayerDataContext } from '../../providers/PlayerProvider/PlayerContext';
import PlayerTimeInfo from './PlayerTimeInfo';

export default function PlayerChronometer() {
  const { audioToPlay } = React.useContext(PlayerDataContext);
  const [durationInSeconds, setDurationInSeconds] = React.useState(0);
  const [elapsedTimeInSeconds, setElapsedTimeInSeconds] = React.useState(0);

  React.useEffect(() => {
    if (audioToPlay !== null && audioToPlay !== undefined) {
      const { duration, currentTime } = audioToPlay;
      console.log({ duration, currentTime });

      setDurationInSeconds(duration);
      setElapsedTimeInSeconds(currentTime);
    }
  }, [audioToPlay]);

  return (
    <div className="flex items-center justify-center gap-2 text-[1.35rem]">
      <PlayerTimeInfo timeInSeconds={elapsedTimeInSeconds} className="font-semibold" />
      <span className="font-semibold">/</span>
      <PlayerTimeInfo timeInSeconds={durationInSeconds} className="text-perano-200" />
    </div>
  );
}
