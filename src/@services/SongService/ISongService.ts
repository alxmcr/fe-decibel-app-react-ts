import { SongData } from '../../@types/serviceTypes';

export interface ISongService {
  findSongById(id: string): SongData | null;
}
