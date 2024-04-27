import React from 'react';
import CardPlayer from '../components/@player/CardPlayer';
import DialogPlaylist from '../components/@playlist-dialog/DialogPlaylist';
import { PlaylistDataContext } from '../providers/PlaylistProvider/PlaylistContext';
import { LoadingStates } from '../@enums/appEnums';

export default function LayoutHomePage() {
  const { statusPlaylist, errorPlaylist } = React.useContext(PlaylistDataContext);

  if (LoadingStates.PENDING === statusPlaylist) {
    return (
      <main className="flex h-screen items-center justify-center gap-2 bg-perano-200">
        <h1>Loading playlist</h1>
      </main>
    );
  }

  if (LoadingStates.ERROR === statusPlaylist && errorPlaylist !== null) {
    return (
      <main className="flex h-screen items-center justify-center gap-2 bg-perano-200">
        <h1>Ocurred an error</h1>
        <p>{errorPlaylist.message}</p>
      </main>
    );
  }

  return (
    <main className="flex h-screen items-center justify-center gap-2 bg-perano-200">
      <CardPlayer />
      <DialogPlaylist />
    </main>
  );
}
