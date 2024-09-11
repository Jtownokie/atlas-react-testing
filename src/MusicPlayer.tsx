// Music Player Component
import CurrentlyPlaying from "./components/CurrentlyPlaying";
import Playlist from "./components/Playlist";
import { createContext } from "react";
import { SongObject } from "./components/Playlist";
import { PuffLoader } from "react-spinners";
import { useSongSelect } from "./hooks/useSongSelect";
import { usePlaylistData } from "./hooks/usePlaylistData";
import { useShuffleToggle } from "./hooks/useShuffleToggle";

export type AppContextType = {
  data: [SongObject] | undefined;
  currentSong: number | undefined;
  handleSongSelect: (id: number) => void;
  shuffle: boolean;
  handleShuffleToggle: () => void;
};

export const AppContext = createContext<AppContextType>({
  data: undefined,
  currentSong: undefined,
  handleSongSelect: () => {},
  shuffle: false,
  handleShuffleToggle: () => {},
});

export function MusicPlayer() {
  const { data, loading } = usePlaylistData();
  const { currentSong, handleSongSelect } = useSongSelect();
  const { shuffle, handleShuffleToggle } = useShuffleToggle();

  if (loading) {
    return (
      <div className="m-auto">
        <PuffLoader color="#fddc5c" size={250} />
      </div>
    );
  }

  return (
    <AppContext.Provider
      value={{
        data,
        currentSong,
        handleSongSelect,
        shuffle,
        handleShuffleToggle,
      }}
    >
      <div className="mx-auto flex h-full w-full max-w-4xl flex-col rounded-lg bg-burgundy shadow-xl md:flex-row">
        <CurrentlyPlaying />
        <Playlist />
      </div>
    </AppContext.Provider>
  );
}
