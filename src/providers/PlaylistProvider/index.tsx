import React from 'react';
import { LoadingStates } from '../../@enums/appEnums';
import usePlaylist from '../../hooks/usePlaylist';
import {
  errorFetchingPlaylistAction,
  idleFetchingPlaylistAction,
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
          // first song
          const { songs } = playlist;
          const totalSongsOnPlaylist = songs !== null ? songs.length : 0;
          console.log('🚀 ~ React.useEffect ~ totalSongsOnPlaylist:', totalSongsOnPlaylist);

          if (totalSongsOnPlaylist > 0) {
            movePointerPositionAction(dispatch, 1);
          }
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

  React.useEffect(() => {
    if (playlist !== null && playlist !== undefined) {
      successFetchingPlaylistAction(dispatch, playlist);
      // first song
      const { songs } = playlist;
      const totalSongsOnPlaylist = songs !== null ? songs.length : 0;

      if (totalSongsOnPlaylist > 0) {
        if (playlistState.pointerPositionSong - 1 <= totalSongsOnPlaylist) {
          const song = songs[playlistState.pointerPositionSong - 1];
          console.log('🚀 ~ React.useEffect ~ song:', song);

          if (song !== null && song !== undefined) {
            selectSongToPlayAction(dispatch, song);
          }
        }
      }
    }
  }, [playlistState.pointerPositionSong, playlist]);

  return (
    <PlaylistDataContext.Provider value={playlistState}>
      <PlaylistDispatchContext.Provider value={dispatch}>{children}</PlaylistDispatchContext.Provider>
    </PlaylistDataContext.Provider>
  );
}
