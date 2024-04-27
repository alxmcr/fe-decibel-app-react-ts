import { flySong } from '../../@mocks/mock-songs';

export default function PlayerSongInfo() {
  const currentSong = flySong;

  return (
    <div className="flex flex-col items-center gap-2">
      <img
        src={currentSong.albumCoverUrl}
        alt={currentSong.name}
        className="h-[250px] w-full rounded-lg shadow-lg md:h-[300px]"
      />
      <div>
        <h1 className="text-center text-[1.5rem] font-semibold text-perano-600">{currentSong.name}</h1>
        <h2 className="text-center text-gray-500">{currentSong.singer}</h2>
      </div>
    </div>
  );
}
