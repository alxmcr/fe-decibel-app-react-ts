import PlayerTimeInfo from './PlayerTimeInfo';

type Props = {
  durationOnSeconds: number;
  elapsedTimeInSeconds: number;
};

export default function PlayerChronometer({ durationOnSeconds = 0, elapsedTimeInSeconds = 0 }: Props) {
  return (
    <div className="flex items-center justify-center gap-2 text-[1.35rem]">
      <PlayerTimeInfo timeInSeconds={elapsedTimeInSeconds} className="font-semibold" />
      <span className="font-semibold">/</span>
      <PlayerTimeInfo timeInSeconds={durationOnSeconds} className="text-perano-200" />
    </div>
  );
}
