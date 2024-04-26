export type SongNCSAttributionData = {
  songName: string;
  musicProvidedBy: string;
  linkDownload: string;
  linkWatch: string;
};

export interface SongData {
  id: string;
  name: string;
  singer: string;
  duration: string;
  songMP3Url: string;
  albumCoverUrl: string;
  attribution: SongNCSAttributionData;
}

export type SongInPlaylistData = SongData & {
  position: number;
};

export type PlaylistData = {
  id: string;
  songs: SongInPlaylistData[];
};
