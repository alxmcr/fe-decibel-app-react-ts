import React from 'react';
import { PlayerStatus } from '../../@enums/appEnums';
import { PlayerDataContext, PlayerDispatchContext } from '../../providers/PlayerProvider/PlayerContext';
import {
  setIsPlayableAction,
  updateElapsedTimeAction,
  updateStatusPlayerAction,
} from '../../store/@actions-creators/playerActions';
import FooterCardPlayer from './FooterCardPlayer';
import HeaderCardPlayer from './HeaderCardPlayer';
import PlayerSongInfo from './player-song-info/PlayerSongInfo';

export default function CardPlayer() {
  const player = React.useContext(PlayerDataContext);
  const dispatchPlayer = React.useContext(PlayerDispatchContext);

  // Add event listeners
  React.useEffect(() => {
    const handleIsPlayable = () => {
      setIsPlayableAction(dispatchPlayer, true);
    };

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

    player.audioToPlay?.addEventListener('loadeddata', handleIsPlayable);
    player.audioToPlay?.addEventListener('timeupdate', handleTimeUpdate);

    // Clean up the event listener when the component unmounts
    return () => {
      player.audioToPlay?.removeEventListener('loadeddata', handleIsPlayable);
      player.audioToPlay?.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [player, dispatchPlayer]);

  return (
    <article className="flex size-full flex-col justify-between gap-3 rounded-lg border bg-white p-4">
      <HeaderCardPlayer />
      <PlayerSongInfo />
      <FooterCardPlayer />
    </article>
  );
}
