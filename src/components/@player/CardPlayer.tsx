import FooterCardPlayer from './FooterCardPlayer';
import HeaderCardPlayer from './HeaderCardPlayer';
import PlayerSongAttribution from './PlayerSongAttribution';
import PlayerSongInfo from './PlayerSongInfo';

export default function CardPlayer() {
  return (
    <article className="flex h-[668px] w-[320px] flex-col justify-between gap-4 rounded-lg border bg-white p-4 md:h-[700px] md:w-[360px]">
      <HeaderCardPlayer />
      <PlayerSongInfo />
      <FooterCardPlayer />
      <PlayerSongAttribution />
    </article>
  );
}
