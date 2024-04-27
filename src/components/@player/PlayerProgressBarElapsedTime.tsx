type Props = {
  percentageElapsedTime: number;
};

export default function PlayerProgressBarElapsedTime({ percentageElapsedTime = 0 }: Props) {
  if (percentageElapsedTime === 0) {
    return null;
  }

  return (
    <div
      className={`animation-player-progress-bar absolute h-[8px] rounded-xl bg-perano-600`}
      style={{ width: `${percentageElapsedTime}%` }}
    ></div>
  );
}
