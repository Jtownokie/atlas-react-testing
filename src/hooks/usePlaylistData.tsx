import { useEffect, useState } from "react";

export function usePlaylistData() {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist",
    )
      .then((response) => {
        return response.json();
      })
      .then((apiData) => {
        setData(apiData);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return { data, loading };
}
