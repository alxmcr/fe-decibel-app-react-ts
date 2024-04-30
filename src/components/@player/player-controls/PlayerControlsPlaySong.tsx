import React from 'react';
import { PlayerDataContext, PlayerDispatchContext } from '../../../providers/PlayerProvider/PlayerContext';
import { playAction } from '../../../store/@actions-creators/playerActions';
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

  return (
    <button onClick={playSong} className="text-perano-500">
      <Icon80x80Play />
    </button>
  );
}
