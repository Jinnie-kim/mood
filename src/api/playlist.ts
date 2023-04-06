export const getPlaylist = async (token: string): Promise<Playlist> => {
  const result = await fetch('https://api.spotify.com/v1/me/playlists', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await result.json();
};
