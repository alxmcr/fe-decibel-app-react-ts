import PlayerProgressBarElapsedTime from './PlayerProgressBarElapsedTime';

export default function PlayerProgressBar() {
  const percentageElapsedTime = 50;

  return (
    <div className="relative h-[8px] w-full rounded-xl bg-perano-200">
      {percentageElapsedTime > 0 ? (
        <PlayerProgressBarElapsedTime percentageElapsedTime={percentageElapsedTime} />
      ) : null}
    </div>
  );
}
