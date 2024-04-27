import React from 'react';
import { PlayerAction } from '../../@types/playerReducerTypes';
import { SongInPlaylistData } from '../../@types/serviceTypes';

export const initFetchingSong = (dispatch: React.Dispatch<PlayerAction>) => {
  dispatch({
    type: 'init-fetching-song',
  });
};

export const successFetchingSong = (
  dispatch: React.Dispatch<PlayerAction>,
  songInPlaylistResponse: SongInPlaylistData,
) => {
  dispatch({
    type: 'success-fetching-song',
    payload: {
      songInPlaylistResponse,
    },
  });
};

export const errorFetchingSong = (dispatch: React.Dispatch<PlayerAction>, errorResponse: Error) => {
  dispatch({
    type: 'error-fetching-song',
    payload: {
      errorResponse,
    },
  });
};
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
