// Song Title Component
import { useContext } from "react";
import { AppContext } from "../MusicPlayer";

export default function SongTitle() {
  const { data, currentSong } = useContext(AppContext);

  // Check if context is undefined
  if (!data || currentSong === undefined) {
    return;
  }

  const currentSongObject = data[currentSong];

  return (
    <div>
      <h2 className="mb-2 text-2xl font-bold text-gold">
        {currentSongObject.title}
      </h2>
      <p className="mb-4 text-base text-cyan">{currentSongObject.artist}</p>
    </div>
  );
}
