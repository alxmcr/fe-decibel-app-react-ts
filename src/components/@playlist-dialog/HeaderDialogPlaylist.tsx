import Icon30x30ArrowBack from '../@icons/30x30/Icon30x30ArrowBack';

export default function HeaderDialogPlaylist() {
  const closeDialogPlaylist = () => {};

  return (
    <header className="relative flex h-[110px] w-full items-center justify-center border text-perano-300">
      <button className="absolute left-5 hover:text-perano-600" onClick={closeDialogPlaylist}>
        <Icon30x30ArrowBack />
      </button>
      <h3 className="text-center text-[1.35rem] font-semibold text-perano-600">Playlist</h3>
    </header>
  );
}
