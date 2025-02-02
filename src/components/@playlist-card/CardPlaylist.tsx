import React from 'react';
import BoxPlaylistSongList from './BoxPlaylistSongList';
import HeaderDialogPlaylist from './HeaderDialogPlaylist';
import { PlaylistDataContext } from '../../providers/PlaylistProvider/PlaylistContext';

export default function CardPlaylist() {
  const { currentPlaylist } = React.useContext(PlaylistDataContext);

  return (
    <article className="flex size-full flex-col justify-between gap-3 rounded-lg">
      <HeaderDialogPlaylist />
      <BoxPlaylistSongList songsInPlaylist={currentPlaylist.songs} />
    </article>
  );
}
