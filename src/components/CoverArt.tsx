// Cover Art Component
import { useContext } from "react";
import { AppContext } from "../MusicPlayer";

export default function CoverArt() {
  const { data, currentSong } = useContext(AppContext);

  // Check if context is undefined
  if (!data || currentSong === undefined) {
    return;
  }

  const currentSongObject = data[currentSong];

  return (
    <div className="mb-6">
      <img
        className="rounded-md"
        src={currentSongObject.cover}
        alt="Album Cover Placeholder Art"
      ></img>
    </div>
  );
}
