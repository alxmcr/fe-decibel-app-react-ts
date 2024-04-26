export type SongData = {
  id: string;
  name: string;
  singer: string;
  duration: string;
  songMP3Url: string;
  albumCoverUrl: string;
  attribution: NCSAttributionData;
};

export type SongInPlaylistData = {
  song: SongData;
  position: number;
};

export type PlaylistData = {
  id: string;
  songs: SongInPlaylistData[];
};

export type NCSAttributionData = {
  songName: string;
  musicProvidedBy: string;
  linkDownload: string;
  linkWatch: string;
};
