import { useState } from "react";

export function useSongSelect() {
  const [currentSong, setCurrentSong] = useState<number | undefined>(0);

  const handleSongSelect = (id: number) => {
    setCurrentSong(id);
  };

  return { currentSong, handleSongSelect };
}
