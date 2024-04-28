import React from 'react';
import playerReducer from '../../store/@reducers/playerReducer';
import { initialPlayerData } from '../../store/reducers-initializers';
import { PlaylistDataContext } from '../PlaylistProvider/PlaylistContext';
import { setAudioAction } from '../../store/@actions-creators/playerActions';
import { PlayerDataContext, PlayerDispatchContext } from './PlayerContext';

type Props = {
  children: React.ReactNode;
};

export default function PlayerProvider({ children }: Props) {
  const { currentSongPlaying } = React.useContext(PlaylistDataContext);
  const [playerState, dispatch] = React.useReducer(playerReducer, initialPlayerData);

  React.useEffect(() => {
    if (currentSongPlaying !== null && currentSongPlaying !== undefined) {
      const newAudio = new Audio(currentSongPlaying.songMP3Url);
      setAudioAction(dispatch, newAudio);
    }
  }, [currentSongPlaying]);

  return (
    <PlayerDataContext.Provider value={playerState}>
      <PlayerDispatchContext.Provider value={dispatch}>{children}</PlayerDispatchContext.Provider>
    </PlayerDataContext.Provider>
  );
}
