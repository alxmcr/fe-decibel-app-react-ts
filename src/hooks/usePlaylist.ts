import React from 'react';
import { LoadingStates } from '../@enums/appEnums';
import { PlaylistData } from '../@types/serviceTypes';
import { PlaylistService } from '../@services/PlaylistService';

export default function usePlaylist(idPlaylist = '') {
  const [playlist, setPlaylist] = React.useState<PlaylistData | null>(null);
  const [errorPlaylist, setErrorPlaylist] = React.useState<Error | null>(null);
  const [statusPlaylist, setStatusPlaylist] = React.useState(LoadingStates.IDLE);

  React.useEffect(() => {
    const fetchPlaylist = async (id = '') => {
      try {
        setStatusPlaylist(LoadingStates.PENDING);
        // call to service
        const service = new PlaylistService();
        const responsePlaylist = await service.findPlaylistById(id);
        setPlaylist(responsePlaylist);
        // Success
        setStatusPlaylist(LoadingStates.SUCCESS);
      } catch (error) {
        if (error instanceof Error) {
          setErrorPlaylist(error);
        }
      }
    };

    fetchPlaylist(idPlaylist);
  }, [idPlaylist]);

  return { playlist, statusPlaylist, errorPlaylist };
}
