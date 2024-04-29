import Icon50x50PrevSongFilled from '../../@icons/50x50/Icon50x50PrevSongFilled';

export default function PlayerControlsPrevSong() {
  const prevSong = () => {
    console.log('prev song');
  };

  return (
    <button className="text-perano-300" onClick={prevSong}>
      <Icon50x50PrevSongFilled />
    </button>
  );
}
