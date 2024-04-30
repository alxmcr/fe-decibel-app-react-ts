import { formatSecondsToTimeSong } from '../../../@helpers/helpers-time';

type Props = {
  className: string;
  timeInSeconds: number;
};

export default function PlayerTimeInfo({ className = '', timeInSeconds = 0 }: Props) {
  const timeFormatted = formatSecondsToTimeSong(timeInSeconds);

  return <span className={className}>{timeFormatted}</span>;
}
