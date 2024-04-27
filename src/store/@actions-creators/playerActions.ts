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

export const setSongPlayingIdAction = (dispatch: React.Dispatch<PlayerAction>, idSongPlaying = '') => {
  dispatch({
    type: 'set_song_playing_id',
    payload: {
      idSongPlaying,
    },
  });
};

export const setNumberPositionSongPlayingAction = (
  dispatch: React.Dispatch<PlayerAction>,
  numberPositionSongPlaying = 0,
) => {
  dispatch({
    type: 'set_number_position_song_playing_id',
    payload: {
      numberPositionSongPlaying,
    },
  });
};
