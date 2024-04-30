import React from 'react';
import BoxPlaylistSongList from './BoxPlaylistSongList';
import HeaderDialogPlaylist from './HeaderDialogPlaylist';
import { PlaylistDataContext } from '../../providers/PlaylistProvider/PlaylistContext';

export default function CardPlaylist() {
  const { currentPlaylist } = React.useContext(PlaylistDataContext);

  return (
    <article className="flex h-[668px] w-[320px] flex-col justify-between gap-4 rounded-lg border bg-white md:h-[700px] md:w-[360px]">
      <HeaderDialogPlaylist />
      <BoxPlaylistSongList songsInPlaylist={currentPlaylist.songs} />
    </article>
  );
}
