import Icon50x50NextSongFilled from '../../@icons/50x50/Icon50x50NextSongFilled';

export default function PlayerControlsNextSong() {
  const nextSong = () => {
    console.log('next song');
  };

  return (
    <button className="text-perano-300" onClick={nextSong}>
      <Icon50x50NextSongFilled />
    </button>
  );
}
