import React from 'react';
import { PlaylistSetCurrentPlaylist, PlaylistState } from '../../@types/playlistReducerTypes';
import { initialPlaylistData } from '../../store/reducers-initializers';

export const PlaylistDataContext = React.createContext<PlaylistState>(initialPlaylistData);

export const PlaylistDispatchContext = React.createContext<React.Dispatch<PlaylistSetCurrentPlaylist>>(
  () => {},
);
