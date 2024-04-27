import { PlaylistAction } from './playlistReducerTypes';

export type PlaylistDispatchContextState = {
  dispatch: React.Dispatch<React.SetStateAction<PlaylistAction>>;
};
