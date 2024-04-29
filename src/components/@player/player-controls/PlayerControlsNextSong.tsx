import React from 'react';
import {
  PlaylistDataContext,
  PlaylistDispatchContext,
} from '../../../providers/PlaylistProvider/PlaylistContext';
import { movePointerPositionAction } from '../../../store/@actions-creators/playlistActions';
import Icon50x50NextSongFilled from '../../@icons/50x50/Icon50x50NextSongFilled';

export default function PlayerControlsNextSong() {
  const { currentPlaylist, pointerPositionSong } = React.useContext(PlaylistDataContext);
  const dispatchPlaylist = React.useContext(PlaylistDispatchContext);

  const nextSong = () => {
    const songsOnPlaylist = currentPlaylist.songs;

    console.log('next song');
    console.log({ songsOnPlaylist, nroSongs: songsOnPlaylist.length, pointerPositionSong });
    movePointerPositionAction(dispatchPlaylist, pointerPositionSong + 1);
  };

  return (
    <button className="text-perano-300" onClick={nextSong}>
      <Icon50x50NextSongFilled />
    </button>
  );
}
