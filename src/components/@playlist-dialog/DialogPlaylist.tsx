import React from 'react';
import { DialogPlaylistRefContext } from '../../providers/DialogPlaylistProvider/DialogPlaylistContext';
import CardPlaylist from '../@playlist-card/CardPlaylist';

export default function DialogPlaylist() {
  const dialogRef = React.useContext(DialogPlaylistRefContext);

  return (
    <article
      className="flex h-[668px] w-[320px] flex-col justify-between gap-4 rounded-lg border bg-white md:h-[700px] md:w-[360px]"
      ref={dialogRef}
    >
      <CardPlaylist />
    </article>
  );
}
