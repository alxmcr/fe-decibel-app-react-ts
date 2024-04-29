import React from 'react';
import PlayerProgressBarElapsedTime from './PlayerProgressBarElapsedTime';
import { getPercentageElapsedTime } from '../../@helpers/helpers-player';

type Props = {
  durationOnSeconds: number;
  elapsedTimeInSeconds: number;
};

export default function PlayerProgressBar({ durationOnSeconds = 0, elapsedTimeInSeconds = 0 }: Props) {
  const [percentageElapsedTime, setPercentageElapsedTime] = React.useState(0);

  React.useEffect(() => {
    const currentPercentage = getPercentageElapsedTime(elapsedTimeInSeconds, durationOnSeconds);
    console.log({ durationOnSeconds, elapsedTimeInSeconds, currentPercentage });
    setPercentageElapsedTime(currentPercentage);
  }, [durationOnSeconds, elapsedTimeInSeconds]);

  return (
    <div className="relative h-[8px] w-full rounded-xl bg-perano-200">
      {percentageElapsedTime > 0 ? (
        <PlayerProgressBarElapsedTime percentageElapsedTime={percentageElapsedTime} />
      ) : null}
    </div>
  );
}
