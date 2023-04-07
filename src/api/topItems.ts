export const getTopArtists = async (token: string, term: string): Promise<TopItems> => {
  const result = await fetch(`https://api.spotify.com/v1/me/top/artists?limit=10&time_range=${term}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await result.json();
};

export const getTopTracks = async (token: string, term: string): Promise<TopItems> => {
  const result = await fetch(`https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=${term}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await result.json();
  console.log(data);
  return await result.json();
};
