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
  audioToPlay: HTMLAudioElement | null;
};

export type PlayerInitialActions = {
  type: 'play' | 'pause';
};

export type PlayerSetAudio = {
  type: 'set-audio';
  payload: {
    newAudio: HTMLAudioElement;
  };
};

export type PlayerPrevAudioAction = {
  type: 'prev-audio';
  payload: {
    prevAudio: HTMLAudioElement;
  };
};

export type PlayerNextAudioAction = {
  type: 'next-audio';
  payload: {
    nextAudio: HTMLAudioElement;
  };
};

export type PlayerAction =
  | PlayerInitialActions
  | PlayerSetAudio
  | PlayerPrevAudioAction
  | PlayerNextAudioAction;
