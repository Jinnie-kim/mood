export const getPlaylist = async (token: string): Promise<Playlist> => {
  const result = await fetch('https://api.spotify.com/v1/me/playlists', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await result.json();
};

export const getPlaylistItem = async (token: string, playlist_id: string): Promise<PlaylistItem> => {
  const result = await fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, {
    method: 'GET',
    headers: {
      Auhtorization: `Bearer ${token}`,
    },
  });
  const data = await result.json();
  console.log(data);
  return await result.json();
};
