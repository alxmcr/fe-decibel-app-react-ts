import { PlaylistData } from '../../@types/serviceTypes';

export interface IPlaylistService {
  findPlaylistById(id: string): PlaylistData | null;
}
