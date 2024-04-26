import React from 'react';
import { LoadingStates } from '../@enums/appEnums';
import { SongService } from '../@services/SongService';
import { SongData } from '../@types/serviceTypes';

export default function useSong(idSong = '') {
  const [song, setSong] = React.useState<SongData | null>(null);
  const [errorSong, setErrorSong] = React.useState<Error | null>(null);
  const [statusSong, setStatusSong] = React.useState(LoadingStates.IDLE);

  React.useEffect(() => {
    const fetchSong = async (id = '') => {
      try {
        setStatusSong(LoadingStates.PENDING);
        // call to service
        const service = new SongService();
        const responseSong = await service.findSongById(id);
        setSong(responseSong);
        // Success
        setStatusSong(LoadingStates.SUCCESS);
      } catch (error) {
        if (error instanceof Error) {
          setErrorSong(error);
        }
      }
    };

    fetchSong(idSong);
  }, [idSong]);

  return { song, statusSong, errorSong };
}
