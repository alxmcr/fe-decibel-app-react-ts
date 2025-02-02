import React from 'react';
import { PlayerStatus } from '../../@enums/appEnums';
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

export const updateStatusPlayerAction = (
  dispatch: React.Dispatch<PlayerAction>,
  statusPlayer = PlayerStatus.IDLE,
) => {
  dispatch({
    type: 'update-status-player',
    payload: {
      statusPlayer,
    },
  });
};

export const updateElapsedTimeAction = (dispatch: React.Dispatch<PlayerAction>, elapsedTimeInSeconds = 0) => {
  dispatch({
    type: 'update-elapsed-time',
    payload: {
      elapsedTimeInSeconds: Math.floor(elapsedTimeInSeconds),
    },
  });
};

export const updateDurationTimeAction = (dispatch: React.Dispatch<PlayerAction>, durationOnSeconds = 0) => {
  dispatch({
    type: 'update-duration-time',
    payload: {
      durationOnSeconds: Math.floor(durationOnSeconds),
    },
  });
};
