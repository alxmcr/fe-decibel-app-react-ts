import React from 'react';
import { PlayerStatus } from '../../../@enums/appEnums';
import { PlayerDataContext, PlayerDispatchContext } from '../../../providers/PlayerProvider/PlayerContext';
import {
  PlaylistDataContext,
  PlaylistDispatchContext,
} from '../../../providers/PlaylistProvider/PlaylistContext';
import {
  setIsPlayableAction,
  updateElapsedTimeAction,
  updateStatusPlayerAction,
} from '../../../store/@actions-creators/playerActions';
import {
  movePointerPositionAction,
  selectSongToPlayAction,
} from '../../../store/@actions-creators/playlistActions';
import Icon50x50PrevSongFilled from '../../@icons/50x50/Icon50x50PrevSongFilled';

export default function PlayerControlsPrevSong() {
  const { pointerPositionSong, currentPlaylist } = React.useContext(PlaylistDataContext);
  const { audioToPlay } = React.useContext(PlayerDataContext);
  const dispatchPlayer = React.useContext(PlayerDispatchContext);
  const dispatchPlaylist = React.useContext(PlaylistDispatchContext);

  const prevSong = () => {
    if (audioToPlay !== null && audioToPlay !== undefined) {
      if (pointerPositionSong - 1 > 0) {
        audioToPlay?.pause();
        setIsPlayableAction(dispatchPlayer, false);
        updateStatusPlayerAction(dispatchPlayer, PlayerStatus.IDLE);
        updateElapsedTimeAction(dispatchPlayer, 0);

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
