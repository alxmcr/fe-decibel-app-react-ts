import React from 'react';
import { PlayerStatus } from '../../../@enums/appEnums';
import { PlayerDataContext, PlayerDispatchContext } from '../../../providers/PlayerProvider/PlayerContext';
import {
  playAction,
  updateElapsedTimeAction,
  updateStatusPlayerAction,
} from '../../../store/@actions-creators/playerActions';
import Icon80x80Play from '../../@icons/80x80/Icon80x80Play';

export default function PlayerControlsPlaySong() {
  const player = React.useContext(PlayerDataContext);
  const dispatchPlayer = React.useContext(PlayerDispatchContext);

  const playSong = () => {
    playAction(dispatchPlayer);
    // Start Playing the audio
    if (player.isPlayableAudio && player.audioToPlay !== null && player.audioToPlay !== undefined) {
      player.audioToPlay?.play();
    }
  };

  // update elapsedTime
  React.useEffect(() => {
    const handleTimeUpdate = () => {
      if (PlayerStatus.NOW_PLAYING === player.statusPlayer) {
        if (player.isPlayableAudio) {
          if (player.audioToPlay !== null && player.audioToPlay !== undefined) {
            const { currentTime } = player.audioToPlay;
            const elapsedTimeOnSeconds = currentTime !== undefined ? Math.floor(currentTime) : 0;

            if (elapsedTimeOnSeconds <= player.durationOnSeconds) {
              // Updated elapsed time
              updateElapsedTimeAction(dispatchPlayer, elapsedTimeOnSeconds);
              // End song
              if (elapsedTimeOnSeconds === player.durationOnSeconds) {
                updateStatusPlayerAction(dispatchPlayer, PlayerStatus.IDLE);
              }
            }
          }
        }
      }
    };

    player.audioToPlay?.addEventListener('timeupdate', handleTimeUpdate);

    // Clean up the event listener when the component unmounts
    return () => {
      player.audioToPlay?.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [player, dispatchPlayer]);

  return (
    <button onClick={playSong} className="text-perano-500">
      <Icon80x80Play />
    </button>
  );
}
