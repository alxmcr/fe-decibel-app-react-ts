import React from 'react';
import { SongInPlaylistData } from '../../@types/serviceTypes';
import {
  PlaylistDataContext,
  PlaylistDispatchContext,
} from '../../providers/PlaylistProvider/PlaylistContext';
import {
  movePointerPositionAction,
  selectSongToPlayAction,
} from '../../store/@actions-creators/playlistActions';
import {
  setIsPlayableAction,
  updateElapsedTimeAction,
  updateStatusPlayerAction,
} from '../../store/@actions-creators/playerActions';
import { PlayerDataContext, PlayerDispatchContext } from '../../providers/PlayerProvider/PlayerContext';
import { PlayerStatus } from '../../@enums/appEnums';
import SoundWaveAnimation from '../@animations/SoundWaveAnimation';

type Props = {
  songInPlaylist: SongInPlaylistData;
};

export default function PlaylistSongListItem({ songInPlaylist }: Props) {
  const [isSelectedToPlay, setIsSelectedToPlay] = React.useState(false);
  const { audioToPlay } = React.useContext(PlayerDataContext);
  const { currentSongPlaying } = React.useContext(PlaylistDataContext);
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
    setIsSelectedToPlay(currentSongPlaying?.id === songInPlaylist.id);
  }, [songInPlaylist.id, currentSongPlaying?.id]);

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
          <h2 className="text-[0.95rem] font-bold text-black">{songInPlaylist.name}</h2>
          <p className="text-[0.85rem]">{songInPlaylist.singer}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <SoundWaveAnimation />
        <p className="text-[0.85rem]">{songInPlaylist.duration}</p>
      </div>
    </li>
  );
}
