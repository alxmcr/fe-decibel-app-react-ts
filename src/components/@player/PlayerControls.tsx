import React from 'react';
import { PlayerStatus } from '../../@enums/appEnums';
import Icon50x50NextSongFilled from '../@icons/50x50/Icon50x50NextSongFilled';
import Icon50x50PrevSongFilled from '../@icons/50x50/Icon50x50PrevSongFilled';
import Icon80x80Pause from '../@icons/80x80/Icon80x80Pause';
import Icon80x80Play from '../@icons/80x80/Icon80x80Play';

export default function PlayerControls() {
  const [isPlayable, setIsPlayable] = React.useState(false);

  const statusPlayer: PlayerStatus = PlayerStatus.NOW_PLAYING;
  const playSong = () => {};
  const pauseSong = () => {};
  const prevSong = () => {};
  const nextSong = () => {};
  const audio = React.useMemo(() => new Audio('audios/JJL - Thought It Was U [NCS Release].mp3'), []);

  React.useEffect(() => {
    if (audio !== null) {
      audio.addEventListener('loadeddata', () => {
        setIsPlayable(true);
      });
    }
  }, [audio]);

  return (
    <div className="flex items-center justify-center gap-8 border">
      <button className="text-perano-300" onClick={prevSong}>
        <Icon50x50PrevSongFilled />
      </button>
      {statusPlayer === PlayerStatus.NOW_PLAYING ? (
        <button onClick={pauseSong} className="text-perano-500" disabled={!isPlayable}>
          <Icon80x80Pause />
        </button>
      ) : (
        <button onClick={playSong} className="text-perano-500" disabled={!isPlayable}>
          <Icon80x80Play />
        </button>
      )}
      <button className="text-perano-300" onClick={nextSong}>
        <Icon50x50NextSongFilled />
      </button>
    </div>
  );
}
