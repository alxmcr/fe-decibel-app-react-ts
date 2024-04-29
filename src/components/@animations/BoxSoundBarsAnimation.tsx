import React from 'react';
import { PlayerStatus } from '../../@enums/appEnums';
import { PlayerDataContext } from '../../providers/PlayerProvider/PlayerContext';
import SoundBarsAnimation from './SoundBarsAnimation';

export default function BoxSoundBarsAnimation() {
  const { statusPlayer } = React.useContext(PlayerDataContext);

  return <div>{PlayerStatus.NOW_PLAYING === statusPlayer ? <SoundBarsAnimation /> : null}</div>;
}
