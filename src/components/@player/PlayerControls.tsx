import React from 'react';
import { PlayerStatus } from '../../@enums/appEnums';
import { PlayerDataContext, PlayerDispatchContext } from '../../providers/PlayerProvider/PlayerContext';
import {
  pauseAction,
  playAction,
  setIsPlayableAction,
  updateElapsedTimeAction,
  updateStatusPlayerAction,
} from '../../store/@actions-creators/playerActions';
import Icon50x50NextSongFilled from '../@icons/50x50/Icon50x50NextSongFilled';
import Icon50x50PrevSongFilled from '../@icons/50x50/Icon50x50PrevSongFilled';
import Icon80x80Pause from '../@icons/80x80/Icon80x80Pause';
import Icon80x80Play from '../@icons/80x80/Icon80x80Play';

export default function PlayerControls() {
  const { audioToPlay, statusPlayer, isPlayableAudio, durationOnSeconds } =
    React.useContext(PlayerDataContext);
  const dispatchPlayer = React.useContext(PlayerDispatchContext);

  const playSong = () => {
    playAction(dispatchPlayer);
    // Start Playing the audio
    if (isPlayableAudio && audioToPlay !== null && audioToPlay !== undefined) {
      audioToPlay?.play();
    }
  };

  const pauseSong = () => {
    pauseAction(dispatchPlayer);
    // Pause the audio
    if (isPlayableAudio && audioToPlay !== null && audioToPlay !== undefined) {
      audioToPlay?.pause();
    }
  };

  const prevSong = () => {};
  const nextSong = () => {};

  // Loaded audio data
  React.useEffect(() => {
    const handleIsPlayable = () => {
      setIsPlayableAction(dispatchPlayer, true);
    };

    audioToPlay?.addEventListener('loadeddata', handleIsPlayable);

    // Clean up the event listener when the component unmounts
    return () => {
      audioToPlay?.removeEventListener('loadeddata', handleIsPlayable);
    };
  }, [audioToPlay, dispatchPlayer]);

  // update elapsedTime
  React.useEffect(() => {
    const handleTimeUpdate = () => {
      if (PlayerStatus.NOW_PLAYING === statusPlayer) {
        if (isPlayableAudio) {
          const elapsedTimeOnSeconds =
            audioToPlay?.currentTime !== undefined ? Math.floor(audioToPlay?.currentTime) : 0;

          if (elapsedTimeOnSeconds <= durationOnSeconds) {
            // Updated
            updateElapsedTimeAction(dispatchPlayer, elapsedTimeOnSeconds);
            // End song
            if (elapsedTimeOnSeconds === durationOnSeconds) {
              updateStatusPlayerAction(dispatchPlayer, PlayerStatus.IDLE);
            }
          }
        }
      }
    };

    audioToPlay?.addEventListener('timeupdate', handleTimeUpdate);

    // Clean up the event listener when the component unmounts
    return () => {
      audioToPlay?.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [audioToPlay, dispatchPlayer, durationOnSeconds, isPlayableAudio, statusPlayer]);

  if (audioToPlay === null || audioToPlay === undefined) {
    return null;
  }

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
