import React from 'react';
import { playAction } from '../../store/@actions-creators/playerActions';
import Icon80x80Play from '../@icons/80x80/Icon80x80Play';
import { PlayerDataContext, PlayerDispatchContext } from '../../providers/PlayerProvider/PlayerContext';

export default function PlayerControlsPlaySong() {
  const { audioToPlay, isPlayableAudio } = React.useContext(PlayerDataContext);
  const dispatchPlayer = React.useContext(PlayerDispatchContext);

  const playSong = () => {
    playAction(dispatchPlayer);
    // Start Playing the audio
    if (isPlayableAudio && audioToPlay !== null && audioToPlay !== undefined) {
      audioToPlay?.play();
    }
  };

  return (
    <button onClick={playSong} className="text-perano-500">
      <Icon80x80Play />
    </button>
  );
}
