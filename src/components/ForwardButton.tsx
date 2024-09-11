import { AppContext } from "../MusicPlayer";
import { useContext } from "react";

export function ForwardButton() {
  const { currentSong, handleSongSelect, shuffle } = useContext(AppContext);
  const disableButton = currentSong === 9 && !shuffle;

  if (currentSong === undefined) {
    return;
  }

  const getNextSong = () => {
    if (shuffle) {
      let randomSong;

      do {
        randomSong = Math.floor(Math.random() * 10);
      } while (randomSong === currentSong);

      return randomSong;
    } else {
      return currentSong + 1;
    }
  };

  return (
    <button
      disabled={disableButton}
      className="inline-flex h-10 w-10 items-center justify-center text-sm font-medium"
      onClick={() => handleSongSelect(getNextSong())}
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
          d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
        />
      </svg>
    </button>
  );
}
