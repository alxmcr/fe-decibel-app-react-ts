import React from 'react';
import { PlayerDataContext, PlayerDispatchContext } from '../../../providers/PlayerProvider/PlayerContext';
import Icon80x80Pause from '../../@icons/80x80/Icon80x80Pause';
import { pauseAction } from '../../../store/@actions-creators/playerActions';

export default function PlayerControlsPauseSong() {
  const { audioToPlay, isPlayableAudio } = React.useContext(PlayerDataContext);
  const dispatchPlayer = React.useContext(PlayerDispatchContext);

  const pauseSong = () => {
    pauseAction(dispatchPlayer);
    // Pause the audio
    if (isPlayableAudio && audioToPlay !== null && audioToPlay !== undefined) {
      audioToPlay?.pause();
    }
  };

  return (
    <button onClick={pauseSong} className="text-perano-500">
      <Icon80x80Pause />
    </button>
  );
}
