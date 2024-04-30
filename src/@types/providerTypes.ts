import { PlaylistAction } from './playlistReducerTypes';

// Playlist Dialog
export type DialogPlaylistActions = {
  openDialogPlaylist: () => void;
  closeDialogPlaylist: () => void;
};

export type PlaylistDispatchContextState = {
  dispatch: React.Dispatch<React.SetStateAction<PlaylistAction>>;
};
