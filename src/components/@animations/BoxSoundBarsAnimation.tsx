import React from 'react';
import { PlayerStatus } from '../../@enums/appEnums';
import { PlayerDataContext } from '../../providers/PlayerProvider/PlayerContext';
import SoundBarsAnimation from './SoundBarsAnimation';

export default function BoxSoundBarsAnimation() {
  const { statusPlayer } = React.useContext(PlayerDataContext);

  return (
    <div className="text-perano-500">
      {PlayerStatus.NOW_PLAYING === statusPlayer ? <SoundBarsAnimation /> : null}
    </div>
  );
}
