import { PlaylistData, SongInPlaylistData } from '../../@types/serviceTypes';

export interface IPlaylistService {
  findPlaylistById(id: string): Promise<PlaylistData | null>;
  findSongOnPlaylistById(playlist: PlaylistData, songId: string): Promise<SongInPlaylistData>;
}
