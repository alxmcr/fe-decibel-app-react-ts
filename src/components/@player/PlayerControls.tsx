import React from 'react';
import { PlayerStatus } from '../../@enums/appEnums';
import { PlayerDataContext, PlayerDispatchContext } from '../../providers/PlayerProvider/PlayerContext';
import { playAction, setIsPlayableAction } from '../../store/@actions-creators/playerActions';
import Icon50x50NextSongFilled from '../@icons/50x50/Icon50x50NextSongFilled';
import Icon50x50PrevSongFilled from '../@icons/50x50/Icon50x50PrevSongFilled';
import Icon80x80Pause from '../@icons/80x80/Icon80x80Pause';
import Icon80x80Play from '../@icons/80x80/Icon80x80Play';

export default function PlayerControls() {
  const { audioToPlay, statusPlayer, isPlayableAudio } = React.useContext(PlayerDataContext);
  const dispatchPlayer = React.useContext(PlayerDispatchContext);

  const playSong = () => {
    playAction(dispatchPlayer);
    // Playing the audio
    if (isPlayableAudio && audioToPlay !== null && audioToPlay !== undefined) {
      audioToPlay?.play();
    }
  };
  const pauseSong = () => {};
  const prevSong = () => {};
  const nextSong = () => {};

  React.useEffect(() => {
    if (audioToPlay !== null) {
      audioToPlay.addEventListener('loadeddata', () => {
        setIsPlayableAction(dispatchPlayer, true);
      });
    }
  }, [audioToPlay, dispatchPlayer]);

  return (
    <div className="flex items-center justify-center gap-8 border">
      <button className="text-perano-300" onClick={prevSong}>
        <Icon50x50PrevSongFilled />
      </button>
      {statusPlayer === PlayerStatus.NOW_PLAYING ? (
        <button onClick={pauseSong} className="text-perano-500" disabled={!isPlayableAudio}>
          <Icon80x80Pause />
        </button>
      ) : (
        <button onClick={playSong} className="text-perano-500" disabled={!isPlayableAudio}>
          <Icon80x80Play />
        </button>
      )}
      <button className="text-perano-300" onClick={nextSong}>
        <Icon50x50NextSongFilled />
      </button>
    </div>
  );
}
