import React from 'react';
import useSong from '../../hooks/useSong';
import playerReducer from '../../store/@reducers/playerReducer';
import { initialPlayerData } from '../../store/reducers-initializers';
import { LoadingStates } from '../../@enums/appEnums';
import {
  errorFetchingSong,
  initFetchingSong,
  successFetchingSong,
} from '../../store/@actions-creators/playerActions';
import { PlayerDataContext, PlayerDispatchContext } from './PlayerContext';

type Props = {
  children: React.ReactNode;
};

export default function PlayerProvider({ children }: Props) {
  const songId = 'song-008';
  const { song, statusSong, errorSong } = useSong(songId);
  const [playerState, dispatch] = React.useReducer(playerReducer, initialPlayerData);

  React.useEffect(() => {
    if (LoadingStates.PENDING === statusSong) {
      initFetchingSong(dispatch);
    } else if (LoadingStates.SUCCESS === statusSong) {
      if (song !== null && song !== undefined) {
        successFetchingSong(dispatch, song);
      }
    } else if (LoadingStates.ERROR === statusSong) {
      if (errorSong !== null && errorSong !== undefined) {
        errorFetchingSong(dispatch, errorSong);
      }
    }
  }, [song, errorSong, statusSong]);

  return (
    <PlayerDataContext.Provider value={playerState}>
      <PlayerDispatchContext.Provider value={dispatch}>{children}</PlayerDispatchContext.Provider>
    </PlayerDataContext.Provider>
  );
}
