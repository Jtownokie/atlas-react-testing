// Playlist Component
import PlayListItem from "./PlayListItem";
import { AppContext } from "../MusicPlayer";
import { useContext } from "react";

export type SongObject = {
  id: number;
  title: string;
  artist: string;
  genre: string;
  duration: string;
  cover: string;
};

export default function Playlist() {
  const { data, currentSong, handleSongSelect } = useContext(AppContext);

  if (!data || currentSong === undefined) {
    return;
  }

  return (
    <div className="flex w-1/2 flex-col border-t p-6 sm:w-full md:border-l md:border-t-0">
      <h2 className="mb-4 text-lg font-semibold text-gold">Playlist</h2>
      <div className="flex flex-col pr-4">
        {data.map((song: SongObject, index) => (
          <PlayListItem
            key={index}
            title={song.title}
            artist={song.artist}
            songLength={song.duration}
            backgroundColor={currentSong === index ? "bg-light-burgundy" : ""}
            onClick={() => handleSongSelect(index)}
          />
        ))}
      </div>
    </div>
  );
}
