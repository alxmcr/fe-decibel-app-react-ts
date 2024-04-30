import React from 'react';
import { DialogPlaylistRefContext } from '../../providers/DialogPlaylistProvider/DialogPlaylistContext';
import { PlaylistDataContext } from '../../providers/PlaylistProvider/PlaylistContext';
import BoxPlaylistSongList from '../@playlist-card/BoxPlaylistSongList';
import HeaderDialogPlaylist from '../@playlist-card/HeaderDialogPlaylist';

export default function DialogPlaylist() {
  const { currentPlaylist } = React.useContext(PlaylistDataContext);
  const dialogRef = React.useContext(DialogPlaylistRefContext);

  return (
    <article
      className="flex h-[668px] w-[320px] flex-col justify-between gap-4 rounded-lg border bg-white md:h-[700px] md:w-[360px]"
      ref={dialogRef}
    >
      <HeaderDialogPlaylist />
      <BoxPlaylistSongList songsInPlaylist={currentPlaylist.songs} />
    </article>
  );
}
