import React from 'react';
import {
  PlaylistDataContext,
  PlaylistDispatchContext,
} from '../../../providers/PlaylistProvider/PlaylistContext';
import { movePointerPositionAction } from '../../../store/@actions-creators/playlistActions';
import Icon50x50NextSongFilled from '../../@icons/50x50/Icon50x50NextSongFilled';

export default function PlayerControlsNextSong() {
  const { pointerPositionSong, currentPlaylist } = React.useContext(PlaylistDataContext);
  const dispatchPlaylist = React.useContext(PlaylistDispatchContext);

  const nextSong = () => {
    console.log('next song');

    const totalSongs = currentPlaylist.songs.length;

    if (pointerPositionSong + 1 <= totalSongs) {
      movePointerPositionAction(dispatchPlaylist, pointerPositionSong + 1);
      console.log('🚀 ~ nextSong ~ pointerPositionSong:', pointerPositionSong);
    }
  };

  React.useEffect(() => {}, [pointerPositionSong]);

  return (
    <button className="text-perano-300" onClick={nextSong}>
      <Icon50x50NextSongFilled />
    </button>
  );
}
