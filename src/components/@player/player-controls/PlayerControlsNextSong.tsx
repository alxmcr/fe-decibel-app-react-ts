import React from 'react';
import {
  PlaylistDataContext,
  PlaylistDispatchContext,
} from '../../../providers/PlaylistProvider/PlaylistContext';
import {
  movePointerPositionAction,
  selectSongToPlayAction,
} from '../../../store/@actions-creators/playlistActions';
import Icon50x50NextSongFilled from '../../@icons/50x50/Icon50x50NextSongFilled';
import { PlayerDataContext, PlayerDispatchContext } from '../../../providers/PlayerProvider/PlayerContext';
import { updateStatusPlayerAction } from '../../../store/@actions-creators/playerActions';
import { PlayerStatus } from '../../../@enums/appEnums';

export default function PlayerControlsNextSong() {
  const { pointerPositionSong, currentPlaylist } = React.useContext(PlaylistDataContext);
  const dispatchPlaylist = React.useContext(PlaylistDispatchContext);
  const { audioToPlay } = React.useContext(PlayerDataContext);
  const dispatchPlayer = React.useContext(PlayerDispatchContext);

  const nextSong = () => {
    if (audioToPlay !== null && audioToPlay !== undefined) {
      const totalSongsOnPlaylist = currentPlaylist.songs.length;

      if (pointerPositionSong < totalSongsOnPlaylist) {
        audioToPlay?.pause();
        updateStatusPlayerAction(dispatchPlayer, PlayerStatus.IDLE);

        // move pointer
        const songs = currentPlaylist.songs;
        const totalSongsOnPlaylist = songs !== null ? songs.length : 0;

        movePointerPositionAction(dispatchPlaylist, pointerPositionSong + 1);

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
    <button className="text-perano-300" onClick={nextSong}>
      <Icon50x50NextSongFilled />
    </button>
  );
}
