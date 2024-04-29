import React from 'react';
import { PlayerStatus } from '../../@enums/appEnums';
import { PlayerDataContext } from '../../providers/PlayerProvider/PlayerContext';
import PlayerControlsNextSong from './PlayerControlsNextSong';
import PlayerControlsPauseSong from './PlayerControlsPauseSong';
import PlayerControlsPlaySong from './PlayerControlsPlaySong';
import PlayerControlsPrevSong from './PlayerControlsPrevSong';

export default function PlayerControls() {
  const { statusPlayer } = React.useContext(PlayerDataContext);

  return (
    <div className="flex items-center justify-center gap-8 border">
      <PlayerControlsPrevSong />
      {statusPlayer === PlayerStatus.NOW_PLAYING ? <PlayerControlsPauseSong /> : <PlayerControlsPlaySong />}
      <PlayerControlsNextSong />
    </div>
  );
}
