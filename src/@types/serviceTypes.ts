export interface SongData {
  id: string;
  name: string;
  singer: string;
  duration: string;
  songMP3Url: string;
  albumCoverUrl: string;
  attribution: NCSAttributionData;
}

export type SongInPlaylistData = SongData & {
  position: number;
};

export interface PlaylistData {
  id: string;
  songs: SongInPlaylistData[];
}

export interface NCSAttributionData {
  songName: string;
  musicProvidedBy: string;
  linkDownload: string;
  linkWatch: string;
}
