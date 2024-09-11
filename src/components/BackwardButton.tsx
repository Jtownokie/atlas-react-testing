import { useContext } from "react";
import { AppContext } from "../MusicPlayer";

export function BackwardButton() {
  const { currentSong, handleSongSelect, shuffle } = useContext(AppContext);
  const nextSong = !shuffle ? 1 : Math.floor(Math.random() * (8 - 0 + 1) + 0);
  const disableButton = currentSong === 0 ? true : false;

  if (currentSong === undefined) {
    return;
  }

  return (
    <button
      disabled={disableButton}
      className="inline-flex h-10 w-10 items-center justify-center text-sm font-medium"
      onClick={() => handleSongSelect(currentSong - nextSong)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`size-6 fill-gold ${disableButton ? "opacity-50" : ""}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
        />
      </svg>
    </button>
  );
}
