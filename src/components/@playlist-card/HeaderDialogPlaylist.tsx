import React from 'react';
import { DialogPlaylistActionsContext } from '../../providers/DialogPlaylistProvider/DialogPlaylistContext';
import Icon30x30ArrowBack from '../@icons/30x30/Icon30x30ArrowBack';

export default function HeaderDialogPlaylist() {
  const { closeDialogPlaylist } = React.useContext(DialogPlaylistActionsContext);

  return (
    <header className="relative flex h-1/6 w-full items-center justify-center rounded-lg bg-perano-500 text-light-50">
      <button className="absolute left-5 md:hover:text-perano-200" onClick={closeDialogPlaylist}>
        <Icon30x30ArrowBack />
      </button>
      <h3 className="text-center text-[1.35rem] font-semibold">Playlist</h3>
    </header>
  );
}
