import React from 'react';
import { PlaylistDataContext, PlaylistDispatchContext } from '../../providers/PlaylistProvider/PlaylistContext';
import { movePointerPositionAction } from '../../store/@actions-creators/playlistActions';
import Icon50x50PrevSongFilled from '../@icons/50x50/Icon50x50PrevSongFilled';

export default function PlayerControlsPrevSong() {
  const { currentPlaylist, pointerPositionSong } = React.useContext(PlaylistDataContext);
  const dispatchPlaylist = React.useContext(PlaylistDispatchContext);

  const prevSong = () => {
    const songsOnPlaylist = currentPlaylist.songs;

    console.log('prev song');
    console.log({ songsOnPlaylist, nroSongs: songsOnPlaylist.length, pointerPositionSong });
    movePointerPositionAction(dispatchPlaylist, pointerPositionSong - 1);
  };

  return (
    <button className="text-perano-300" onClick={prevSong}>
      <Icon50x50PrevSongFilled />
    </button>
  );
}
