import { flySong } from '../../@mocks/mock-songs';

export default function PlayerSongAttribution() {
  const currentSong = flySong;

  return (
    <p className="text-center text-sm text-perano-300">
      <span>{`Music provided by: `}</span>
      <a href={currentSong.attribution.linkDownload} className="underline underline-offset-4">
        {currentSong.attribution.musicProvidedBy}
      </a>
    </p>
  );
}
