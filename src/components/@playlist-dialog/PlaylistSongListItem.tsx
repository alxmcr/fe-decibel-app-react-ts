import React from 'react';
import { SongInPlaylistData } from '../../@types/serviceTypes';
import {
  PlaylistDataContext,
  PlaylistDispatchContext,
} from '../../providers/PlaylistProvider/PlaylistContext';
import { selectSongToPlayAction } from '../../store/@actions-creators/playlistActions';

type Props = {
  songInPlaylist: SongInPlaylistData;
};

export default function PlaylistSongListItem({ songInPlaylist }: Props) {
  const [isSelectedToPlay, setIsSelectedToPlay] = React.useState(false);
  const { currentSongPlaying } = React.useContext(PlaylistDataContext);
  const dispatchPlaylist = React.useContext(PlaylistDispatchContext);

  const selectSongToPlay = () => {
    selectSongToPlayAction(dispatchPlaylist, songInPlaylist);
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
          className="size-[50px] rounded-full shadow-lg"
        />
        <div className="flex flex-col gap-1">
          <h2 className="text-[1.2rem] font-bold text-black">{songInPlaylist.name}</h2>
          <p>{songInPlaylist.singer}</p>
        </div>
      </div>
      <p>{songInPlaylist.duration}</p>
    </li>
  );
}
