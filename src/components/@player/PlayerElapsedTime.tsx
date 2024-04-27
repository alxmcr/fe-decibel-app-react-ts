import PlayerTimeInfo from './PlayerTimeInfo';

export default function PlayerElapsedTime() {
  const duration = 300;
  const elapsedTimeInSeconds = Math.floor(duration / 2);

  return (
    <div className="flex items-center justify-center gap-2 text-[1.35rem]">
      <PlayerTimeInfo timeInSeconds={elapsedTimeInSeconds} className="font-semibold" />
      <span className="font-semibold">/</span>
      <PlayerTimeInfo timeInSeconds={duration} className="text-perano-200" />
    </div>
  );
}
