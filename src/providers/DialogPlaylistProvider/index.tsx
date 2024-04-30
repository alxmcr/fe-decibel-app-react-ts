import React from 'react';
import { DialogPlaylistActions } from '../../@types/providerTypes';
import { DialogPlaylistActionsContext, DialogPlaylistRefContext } from './DialogPlaylistContext';

type Props = {
  children: React.ReactNode;
};

export default function DialogPlaylistProvider({ children }: Props) {
  const dialogRef = React.useRef<HTMLDialogElement>(null);

  const openDialogPlaylist = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeDialogPlaylist = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  const valueDialogActions: DialogPlaylistActions = {
    openDialogPlaylist,
    closeDialogPlaylist,
  };

  return (
    <DialogPlaylistRefContext.Provider value={dialogRef}>
      <DialogPlaylistActionsContext.Provider value={valueDialogActions}>
        {children}
      </DialogPlaylistActionsContext.Provider>
    </DialogPlaylistRefContext.Provider>
  );
}
