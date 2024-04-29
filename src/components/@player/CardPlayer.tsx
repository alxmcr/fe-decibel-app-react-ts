import React from 'react';
import { PlayerDataContext, PlayerDispatchContext } from '../../providers/PlayerProvider/PlayerContext';
import { setIsPlayableAction } from '../../store/@actions-creators/playerActions';
import FooterCardPlayer from './FooterCardPlayer';
import HeaderCardPlayer from './HeaderCardPlayer';
import PlayerSongInfo from './player-song-info/PlayerSongInfo';

export default function CardPlayer() {
  const player = React.useContext(PlayerDataContext);
  const dispatchPlayer = React.useContext(PlayerDispatchContext);

  // Loaded audio data
  React.useEffect(() => {
    const handleIsPlayable = () => {
      setIsPlayableAction(dispatchPlayer, true);
    };

    player.audioToPlay?.addEventListener('loadeddata', handleIsPlayable);

    // Clean up the event listener when the component unmounts
    return () => {
      player.audioToPlay?.removeEventListener('loadeddata', handleIsPlayable);
    };
  }, [player, dispatchPlayer]);

  return (
    <article className="flex h-[668px] w-[320px] flex-col justify-between gap-4 rounded-lg border bg-white p-4 md:h-[700px] md:w-[360px]">
      <HeaderCardPlayer />
      <PlayerSongInfo />
      <FooterCardPlayer />
    </article>
  );
}
