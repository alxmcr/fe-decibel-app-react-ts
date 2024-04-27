import React from 'react';
import playlistReducer from '../../store/@reducers/playlistReducer';
import { initialPlaylistData } from '../../store/reducers-initializers';
import { PlaylistDataContext, PlaylistDispatchContext } from './PlaylistContext';
import usePlaylist from '../../hooks/usePlaylist';

type Props = {
  children: React.ReactNode;
};

export default function PlaylistProvider({ children }: Props) {
  const idPlaylist = 'playlist-001';
  const { playlist, statusPlaylist, errorPlaylist } = usePlaylist(idPlaylist);
  const [playlistState, dispatch] = React.useReducer(playlistReducer, initialPlaylistData);

  React.return(
    <PlaylistDataContext.Provider value={playlistState}>
      <PlaylistDispatchContext.Provider value={dispatch}>{children}</PlaylistDispatchContext.Provider>
    </PlaylistDataContext.Provider>,
  );
}
