import { PlayerStatus } from '../@enums/appEnums';

/**

- 'play' => statusPlayer = PlayerStatus.NOW_PLAYING
- 'pause' => statusPlayer = PlayerStatus.PAUSED

- 'prev-song` => 
        if positionSongPlaying - 1 > 0, 
            you can decrease 'positionSongPlaying' one by one (`positionSongPlaying--`)
- 'next-song` => 
        if positionSongPlaying + 1 <= totalNumberSongsToPlaying, 
            you can do increase 'positionSongPlaying' one by one (`positionSongPlaying++`)
*/

export type PlayerState = {
  statusPlayer: PlayerStatus;
  totalNumberSongsToPlaying: number;
  songPlayingId: string;
  positionSongPlaying: number;
};

export type PlayerAction = {
  type: 'play' | 'pause' | 'prev-song' | 'next-song';
};
