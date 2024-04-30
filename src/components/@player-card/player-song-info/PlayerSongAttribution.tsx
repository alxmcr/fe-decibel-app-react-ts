import React from 'react';
import { PlaylistDataContext } from '../../../providers/PlaylistProvider/PlaylistContext';

export default function PlayerSongAttribution() {
  const { currentSongPlaying } = React.useContext(PlaylistDataContext);

  if (currentSongPlaying === null || currentSongPlaying === undefined) {
    return null;
  }

  return (
    <p className="text-center text-sm text-perano-300">
      <span>{`Music provided by: `}</span>
      <a href={currentSongPlaying.attribution.linkDownload} className="underline underline-offset-4">
        {currentSongPlaying.attribution.musicProvidedBy}
      </a>
    </p>
  );
}
