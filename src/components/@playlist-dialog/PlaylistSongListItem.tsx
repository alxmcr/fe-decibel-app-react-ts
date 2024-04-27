import React from 'react';
import { songPlaylist001 } from '../../@mocks/mock-songs-in-playlist';
import { SongInPlaylistData } from '../../@types/serviceTypes';

type Props = {
  song: SongInPlaylistData;
};

export default function PlaylistSongListItem({ song }: Props) {
  const [isSelectedToPlay, setIsSelectedToPlay] = React.useState(false);

  const songIsPlaying = songPlaylist001;
  const selectSongToPlay = () => {};

  React.useEffect(() => {
    setIsSelectedToPlay(songIsPlaying?.id === song.id);
  }, [song.id, songIsPlaying?.id]);

  if (song === null || song === undefined) {
    return null;
  }

  return (
    <li
      className={`${isSelectedToPlay ? 'is-selected-to-play' : 'bg-white text-perano-300'} box-border flex max-h-[160px] items-center justify-between gap-3 rounded-lg border p-3 hover:bg-perano-300 hover:text-white`}
      onClick={selectSongToPlay}
    >
      <div className="flex items-center gap-2">
        <img src={song.albumCoverUrl} alt={song.name} className="size-[50px] rounded-full shadow-lg" />
        <div className="flex flex-col gap-1">
          <h2 className="text-[1.2rem] font-bold text-black">{song.name}</h2>
          <p>{song.singer}</p>
        </div>
      </div>
      <p>{song.duration}</p>
    </li>
  );
}
