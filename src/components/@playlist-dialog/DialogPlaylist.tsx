import React from 'react';
import { DialogPlaylistRefContext } from '../../providers/DialogPlaylistProvider/DialogPlaylistContext';
import CardPlaylist from '../@playlist-card/CardPlaylist';

export default function DialogPlaylist() {
  const dialogRef = React.useContext(DialogPlaylistRefContext);

  return (
    <dialog
      className="absolute h-[640px] w-[300px] rounded-lg bg-light-50 backdrop:bg-black/50"
      ref={dialogRef}
    >
      <CardPlaylist />
    </dialog>
  );
}
