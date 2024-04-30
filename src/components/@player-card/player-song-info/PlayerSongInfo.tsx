import React from 'react';
import { PlaylistDataContext } from '../../../providers/PlaylistProvider/PlaylistContext';

export default function PlayerSongInfo() {
  const { currentSongPlaying } = React.useContext(PlaylistDataContext);

  if (currentSongPlaying === null || currentSongPlaying === undefined) {
    return null;
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <img
        src={currentSongPlaying.albumCoverUrl}
        alt={currentSongPlaying.name}
        className="h-[250px] w-full rounded-lg shadow-lg md:h-[300px]"
      />
      <div>
        <h1 className="text-center text-[1.5rem] font-semibold text-perano-600">{currentSongPlaying.name}</h1>
        <h2 className="text-center text-gray-500">{currentSongPlaying.singer}</h2>
      </div>
    </div>
  );
}
