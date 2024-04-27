import { PlayerStatus } from '../../@enums/appEnums';
import Icon30x30Playlist from '../@icons/30x30/Icon30x30Playlist';

export default function HeaderCardPlayer() {
  const statusPlayer: PlayerStatus = PlayerStatus.NOW_PLAYING;
  const openDialogPlaylist = () => {};

  return (
    <header className="relative flex h-[110px] items-center justify-center border p-2">
      <button className="absolute left-0 text-perano-300" onClick={openDialogPlaylist}>
        <Icon30x30Playlist />
      </button>
      <h3 className="text-center text-[1.35rem] font-semibold text-perano-300">{statusPlayer}</h3>
    </header>
  );
}
