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

export const setIsPlayableAction = (dispatch: React.Dispatch<PlayerAction>, isPlayable = false) => {
  dispatch({
    type: 'set-is-playable',
    payload: {
      isPlayable,
    },
  });
};

export const updateElapsedTimeAction = (dispatch: React.Dispatch<PlayerAction>, elapsedTimeInSeconds = 0) => {
  dispatch({
    type: 'update-elapsed-time',
    payload: {
      elapsedTimeInSeconds,
    },
  });
};

export const updateDurationTimeAction = (dispatch: React.Dispatch<PlayerAction>, durationOnSeconds = 0) => {
  dispatch({
    type: 'update-duration-time',
    payload: {
      durationOnSeconds,
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
