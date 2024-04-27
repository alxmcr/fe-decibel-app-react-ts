import React from 'react';
import { PlayerAction, PlayerState } from '../../@types/playerReducerTypes';
import { initialPlayerData } from '../../store/reducers-initializers';

export const PlayerDataContext = React.createContext<PlayerState>(initialPlayerData);

export const PlayerDispatchContext = React.createContext<React.Dispatch<PlayerAction>>(
  () => {},
);
