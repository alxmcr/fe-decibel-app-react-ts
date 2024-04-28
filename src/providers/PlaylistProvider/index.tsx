import React from 'react';
import { LoadingStates } from '../../@enums/appEnums';
import usePlaylist from '../../hooks/usePlaylist';
import {
  errorFetchingPlaylistAction,
  initFetchingPlaylistAction,
  movePointerPositionAction,
  selectSongToPlayAction,
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

  React.useEffect(() => {
    if (LoadingStates.PENDING === statusPlaylist) {
      initFetchingPlaylistAction(dispatch);
    } else if (LoadingStates.SUCCESS === statusPlaylist) {
      if (playlist !== null && playlist !== undefined) {
        successFetchingPlaylistAction(dispatch, playlist);

        if (playlist.songs !== null && playlist.songs !== undefined) {
          const songSelectedOnPlaylist = playlist.songs.length > 0 ? playlist.songs[0] : null;

          if (songSelectedOnPlaylist !== null && songSelectedOnPlaylist !== undefined) {
            selectSongToPlayAction(dispatch, songSelectedOnPlaylist);
            movePointerPositionAction(dispatch, songSelectedOnPlaylist.position);
          }
        }
      }
    } else if (LoadingStates.ERROR === statusPlaylist) {
      if (errorPlaylist !== null && errorPlaylist !== undefined) {
        errorFetchingPlaylistAction(dispatch, errorPlaylist);
      }
    }
  }, [playlist, errorPlaylist, statusPlaylist]);

  return (
    <PlaylistDataContext.Provider value={playlistState}>
      <PlaylistDispatchContext.Provider value={dispatch}>{children}</PlaylistDispatchContext.Provider>
    </PlaylistDataContext.Provider>
  );
}
