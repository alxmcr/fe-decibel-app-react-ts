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

export const setAudioAction = (dispatch: React.Dispatch<PlayerAction>, newAudio: HTMLAudioElement) => {
  dispatch({
    type: 'set-audio',
    payload: {
      newAudio,
    },
  });
};

export const prevSongAction = (dispatch: React.Dispatch<PlayerAction>, prevAudio: HTMLAudioElement) => {
  dispatch({
    type: 'prev-audio',
    payload: {
      prevAudio,
    },
  });
};

export const nextSongAction = (dispatch: React.Dispatch<PlayerAction>, nextAudio: HTMLAudioElement) => {
  dispatch({
    type: 'next-audio',
    payload: {
      nextAudio,
    },
  });
};
