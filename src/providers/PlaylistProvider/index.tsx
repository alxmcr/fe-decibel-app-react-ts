import React from 'react';
import { LoadingStates } from '../../@enums/appEnums';
import usePlaylist from '../../hooks/usePlaylist';
import {
  errorFetchingPlaylist,
  initFetchingPlaylist,
  selectSongToPlay,
  successFetchingPlaylist,
} from '../../store/@actions-creators/playlistActions';
import playlistReducer from '../../store/@reducers/playlistReducer';
import { initialPlaylistData } from '../../store/reducers-initializers';
import { PlaylistDataContext, PlaylistDispatchContext } from './PlaylistContext';

type Props = {
  children: React.ReactNode;
};

export default function PlaylistProvider({ children }: Props) {
  const idPlaylist = 'playlist-001';
  const { playlist, errorPlaylist, statusPlaylist } = usePlaylist(idPlaylist);
  const [playlistState, dispatch] = React.useReducer(playlistReducer, initialPlaylistData);

  React.useEffect(() => {
    if (LoadingStates.PENDING === statusPlaylist) {
      initFetchingPlaylist(dispatch);
    } else if (LoadingStates.SUCCESS === statusPlaylist) {
      if (playlist !== null && playlist !== undefined) {
        successFetchingPlaylist(dispatch, playlist);

        if (playlist.songs !== null && playlist.songs !== undefined) {
          const songSelectedOnPlaylist = playlist.songs.length > 0 ? playlist.songs[0] : null;

          if (songSelectedOnPlaylist !== null && songSelectedOnPlaylist !== undefined) {
            selectSongToPlay(dispatch, songSelectedOnPlaylist);
          }
        }
      }
    } else if (LoadingStates.ERROR === statusPlaylist) {
      if (errorPlaylist !== null && errorPlaylist !== undefined) {
        errorFetchingPlaylist(dispatch, errorPlaylist);
      }
    }
  }, [playlist, errorPlaylist, statusPlaylist]);

  return (
    <PlaylistDataContext.Provider value={playlistState}>
      <PlaylistDispatchContext.Provider value={dispatch}>{children}</PlaylistDispatchContext.Provider>
    </PlaylistDataContext.Provider>
  );
}
