import React from 'react';
import { DialogPlaylistActions } from '../../@types/providerTypes';

export const DialogPlaylistRefContext = React.createContext<React.RefObject<HTMLDialogElement> | null>(null);

export const DialogPlaylistActionsContext = React.createContext<DialogPlaylistActions>({
  openDialogPlaylist: () => {},
  closeDialogPlaylist: () => {},
});
