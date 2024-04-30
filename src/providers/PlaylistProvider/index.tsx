import React from 'react';
import { LoadingStates } from '../../@enums/appEnums';
import usePlaylist from '../../hooks/usePlaylist';
import {
  errorFetchingPlaylistAction,
  initFetchingPlaylistAction,
  successFetchingPlaylistAction,
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

  // Load playlist data by id
  React.useEffect(() => {
    switch (statusPlaylist) {
      case LoadingStates.PENDING: {
        initFetchingPlaylistAction(dispatch);
        break;
      }
      case LoadingStates.SUCCESS: {
        if (playlist !== null && playlist !== undefined) {
          successFetchingPlaylistAction(dispatch, playlist);
        }
        break;
      }
      case LoadingStates.ERROR: {
        if (errorPlaylist !== null && errorPlaylist !== undefined) {
          errorFetchingPlaylistAction(dispatch, errorPlaylist);
        }
        break;
      }

      default:
        throw Error('Playlist status is invalid');
    }
  }, [playlist, errorPlaylist, statusPlaylist]);

  return (
    <PlaylistDataContext.Provider value={playlistState}>
      <PlaylistDispatchContext.Provider value={dispatch}>{children}</PlaylistDispatchContext.Provider>
    </PlaylistDataContext.Provider>
  );
}
