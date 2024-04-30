import React from 'react';
import Icon50x50PrevSongFilled from '../../@icons/50x50/Icon50x50PrevSongFilled';
import {
  PlaylistDataContext,
  PlaylistDispatchContext,
} from '../../../providers/PlaylistProvider/PlaylistContext';
import {
  movePointerPositionAction,
  selectSongToPlayAction,
} from '../../../store/@actions-creators/playlistActions';
import { PlayerDataContext, PlayerDispatchContext } from '../../../providers/PlayerProvider/PlayerContext';
import { updateStatusPlayerAction } from '../../../store/@actions-creators/playerActions';
import { PlayerStatus } from '../../../@enums/appEnums';

export default function PlayerControlsPrevSong() {
  const { pointerPositionSong, currentPlaylist } = React.useContext(PlaylistDataContext);
  const { audioToPlay } = React.useContext(PlayerDataContext);
  const dispatchPlayer = React.useContext(PlayerDispatchContext);
  const dispatchPlaylist = React.useContext(PlaylistDispatchContext);

  const prevSong = () => {
    if (audioToPlay !== null && audioToPlay !== undefined) {
      if (pointerPositionSong - 1 > 0) {
        audioToPlay?.pause();
        updateStatusPlayerAction(dispatchPlayer, PlayerStatus.IDLE);

        // move pointer
        const songs = currentPlaylist.songs;
        const totalSongsOnPlaylist = songs !== null ? songs.length : 0;

        movePointerPositionAction(dispatchPlaylist, pointerPositionSong - 1);

        if (totalSongsOnPlaylist > 0) {
          const song = currentPlaylist.songs[pointerPositionSong];

          if (song !== null && song !== undefined) {
            selectSongToPlayAction(dispatchPlaylist, song);
          }
        }
      }
    }
  };

  return (
    <button className="text-perano-300" onClick={prevSong}>
      <Icon50x50PrevSongFilled />
    </button>
  );
}
