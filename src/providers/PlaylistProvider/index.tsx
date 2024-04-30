import React from 'react';
import { LoadingStates } from '../../@enums/appEnums';
import usePlaylist from '../../hooks/usePlaylist';
import {
  errorFetchingPlaylistAction,
  idleFetchingPlaylistAction,
  initFetchingPlaylistAction,
  movePointerPositionAction,
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
      case LoadingStates.IDLE: {
        idleFetchingPlaylistAction(dispatch);
        break;
      }
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
        throw Error(`Playlist status is invalid ${statusPlaylist}`);
    }
  }, [playlist, errorPlaylist, statusPlaylist]);

  // Select first song
  React.useEffect(() => {
    if (LoadingStates.SUCCESS === statusPlaylist) {
      if (playlist !== null && playlist !== undefined) {
        const { songs } = playlist;
        const totalSongsOnPlaylist = songs !== null ? songs.length : 0;
        console.log("🚀 ~ React.useEffect ~ totalSongsOnPlaylist:", totalSongsOnPlaylist)

        if (totalSongsOnPlaylist > 0) {
          movePointerPositionAction(dispatch, 1);
        }
      }
    }
  }, [playlist, statusPlaylist]);

  return (
    <PlaylistDataContext.Provider value={playlistState}>
      <PlaylistDispatchContext.Provider value={dispatch}>{children}</PlaylistDispatchContext.Provider>
    </PlaylistDataContext.Provider>
  );
}
