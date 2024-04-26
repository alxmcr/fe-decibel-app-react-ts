import React from 'react';
import { PlayerAction } from '../../@types/playerReducerTypes';

export const playAction = (dispatch: React.Dispatch<PlayerAction>) => {
  dispatch({
    type: 'play',
  });
};

export const pauseAction = (dispatch: React.Dispatch<PlayerAction>) => {
  dispatch({
    type: 'pause',
  });
};

export const prevSongAction = (dispatch: React.Dispatch<PlayerAction>) => {
  dispatch({
    type: 'prev-song',
  });
};

export const nextSongAction = (dispatch: React.Dispatch<PlayerAction>) => {
  dispatch({
    type: 'next-song',
  });
};
