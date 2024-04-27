type Props = {
  percentageElapsedTime: number;
};

export default function PlayerProgressBarElapsedTime({ percentageElapsedTime = 0 }: Props) {
  return (
    <div
      className={`animation-player-progress-bar absolute h-[8px] rounded-xl bg-perano-600`}
      style={{ width: `${percentageElapsedTime}%` }}
    ></div>
  );
}
