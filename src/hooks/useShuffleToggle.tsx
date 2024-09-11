import { useState } from "react";

export function useShuffleToggle() {
  const [shuffle, toggleShuffle] = useState<boolean>(false);

  const handleShuffleToggle = () => {
    if (shuffle === false) {
      toggleShuffle(true);
    } else if (shuffle === true) {
      toggleShuffle(false);
    }
  };

  return { shuffle, handleShuffleToggle };
}
