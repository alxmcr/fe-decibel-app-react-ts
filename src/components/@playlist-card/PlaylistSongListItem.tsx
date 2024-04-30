import React from 'react';
import { PlayerStatus } from '../../@enums/appEnums';
import { SongInPlaylistData } from '../../@types/serviceTypes';
import { PlayerDataContext, PlayerDispatchContext } from '../../providers/PlayerProvider/PlayerContext';
import {
  PlaylistDataContext,
  PlaylistDispatchContext,
} from '../../providers/PlaylistProvider/PlaylistContext';
import {
  setIsPlayableAction,
  updateElapsedTimeAction,
  updateStatusPlayerAction,
} from '../../store/@actions-creators/playerActions';
import {
  movePointerPositionAction,
  selectSongToPlayAction,
} from '../../store/@actions-creators/playlistActions';
import BoxSoundBarsAnimation from '../@animations/BoxSoundBarsAnimation';

type Props = {
  songInPlaylist: SongInPlaylistData;
};

export default function PlaylistSongListItem({ songInPlaylist }: Props) {
  const [isSelectedToPlay, setIsSelectedToPlay] = React.useState(false);
  const { audioToPlay } = React.useContext(PlayerDataContext);
  const { pointerPositionSong } = React.useContext(PlaylistDataContext);
  const dispatchPlaylist = React.useContext(PlaylistDispatchContext);
  const dispatchPlayer = React.useContext(PlayerDispatchContext);

  const selectSongToPlay = () => {
    if (audioToPlay !== null && audioToPlay !== undefined) {
      setIsPlayableAction(dispatchPlayer, false);
      // Reset song
      audioToPlay.pause();
      updateStatusPlayerAction(dispatchPlayer, PlayerStatus.IDLE);
      updateElapsedTimeAction(dispatchPlayer, 0);
      // Select another song
      selectSongToPlayAction(dispatchPlaylist, songInPlaylist);
      // Move pointer
      movePointerPositionAction(dispatchPlaylist, songInPlaylist.position);
    }
  };

  React.useEffect(() => {
    setIsSelectedToPlay(songInPlaylist.position === pointerPositionSong);
  }, [pointerPositionSong, songInPlaylist.position]);

  if (songInPlaylist === null || songInPlaylist === undefined) {
    return null;
  }

  return (
    <li
      className={`${isSelectedToPlay ? 'is-selected-to-play' : 'bg-white text-perano-300'} box-border flex max-h-[160px] items-center justify-between gap-3 rounded-lg border p-3 hover:bg-perano-300 hover:text-white`}
      onClick={selectSongToPlay}
    >
      <div className="flex items-center gap-2">
        <img
          src={songInPlaylist.albumCoverUrl}
          alt={songInPlaylist.name}
          className="size-[45px] rounded-full shadow-lg"
        />
        <div className="flex flex-col gap-1">
          <h2 className="text-[0.9rem] font-bold text-black md:text-[0.95rem]">{songInPlaylist.name}</h2>
          <p className="text-[0.8rem] md:text-[0.85rem]">{songInPlaylist.singer}</p>
        </div>
      </div>
      <div className="flex items-center gap-8">
        {songInPlaylist.position === pointerPositionSong ? <BoxSoundBarsAnimation /> : null}
        <p className="text-[0.8rem] md:text-[0.85rem]">{songInPlaylist.duration}</p>
      </div>
    </li>
  );
}
