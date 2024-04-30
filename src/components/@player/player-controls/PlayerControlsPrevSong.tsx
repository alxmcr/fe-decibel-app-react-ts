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

export default function PlayerControlsPrevSong() {
  const { pointerPositionSong, currentPlaylist } = React.useContext(PlaylistDataContext);
  const dispatchPlaylist = React.useContext(PlaylistDispatchContext);

  const prevSong = () => {
    console.log('prev song');

    console.log('🚀 ~ prevSong ~ pointerPositionSong:', pointerPositionSong);
    if (pointerPositionSong - 1 > 0) {
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
  };

  return (
    <button className="text-perano-300" onClick={prevSong}>
      <Icon50x50PrevSongFilled />
    </button>
  );
}
