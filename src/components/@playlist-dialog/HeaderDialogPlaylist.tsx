import Icon30x30ArrowBack from '../@icons/30x30/Icon30x30ArrowBack';

export default function HeaderDialogPlaylist() {
  const closeDialogPlaylist = () => {};

  return (
    <header className="relative flex h-[110px] w-full items-center justify-center border bg-perano-300 text-perano-600">
      <button className="absolute left-5 md:hover:text-light-50" onClick={closeDialogPlaylist}>
        <Icon30x30ArrowBack />
      </button>
      <h3 className="text-center text-[1.35rem] font-semibold text-perano-600">Playlist</h3>
    </header>
  );
}
