import { PlayerStatus } from '../@enums/appEnums';

/**

- 'set_song_playing_id` => idSongPlaying = action.payload.<id_song>
- 'set_number_position_song_playing_id' => numberPositionSongPlaying = action.payload.<position_song>

- 'play' => statusPlayer = PlayerStatus.NOW_PLAYING
- 'pause' => statusPlayer = PlayerStatus.PAUSED

- 'prev-song` => 
        if numberPositionSongPlaying - 1 > 0, 
            you can decrease 'numberPositionSongPlaying' one by one (`numberPositionSongPlaying--`)
- 'next-song` => 
        if numberPositionSongPlaying + 1 <= totalNumberSongsToPlaying, 
            you can do increase 'numberPositionSongPlaying' one by one (`numberPositionSongPlaying++`)
*/

export type PlayerState = {
  statusPlayer: PlayerStatus;
  totalNumberSongsToPlaying: number;
  numberPositionSongPlaying: number;
};

export type PlayerDefaultAction = {
  type: 'play' | 'pause' | 'prev-song' | 'next-song';
};

export type PlayerSetSongAction = {
  type: 'set_song_playing_id';
  payload: {
    idSongPlaying: string;
  };
};

export type PlayerSetPositionSongAction = {
  type: 'set_number_position_song_playing_id';
  payload: {
    numberPositionSongPlaying: number;
  };
};

export type PlayerAction = PlayerDefaultAction | PlayerSetSongAction | PlayerSetPositionSongAction;
