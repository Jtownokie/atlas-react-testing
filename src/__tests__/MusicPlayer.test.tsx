import { render, screen, waitFor } from "@testing-library/react";
import { expect, test, describe, vi } from "vitest";
import { MusicPlayer } from "../MusicPlayer";
import { AppContext } from "../MusicPlayer";

describe("Test MusicPlayer Component", () => {
  test("Renders items from API call", async () => {
    const mockData = [
      {
        "id": 1,
        "title": "Painted in Blue",
        "artist": "Soul Canvas",
        "genre": "Neo-Soul",
        "duration": "5:55",
        "cover": "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/images/albumn4.webp"
      },
      {
        "id": 2,
        "title": "Tidal Drift",
        "artist": "Echoes of the Sea",
        "genre": "Ambient",
        "duration": "8:02",
        "cover": "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/images/albumn6.webp"
      },
    ];

    const mockContext = {
      data: mockData,
      currentSong: 0,
      handleSongSelect: vi.fn(),
      shuffle: false,
      handleShuffleToggle: vi.fn()
    };

    render(
      <AppContext.Provider value={mockContext}>
        <MusicPlayer />
      </AppContext.Provider>
    );

    await waitFor(() => {
      const songTitles = screen.getAllByText("Painted in Blue");
      expect(songTitles.length).toBe(2);
      expect(songTitles[0]).toBeInTheDocument();
      expect(songTitles[1]).toBeInTheDocument();
    });
  });
});
