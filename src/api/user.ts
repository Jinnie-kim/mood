export const getUserProfile = async (token: string): Promise<UserProfile> => {
  const result = await fetch('https://api.spotify.com/v1/me', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await result.json();
};

export const isValidToken = async (token: string): Promise<boolean> => {
  const result = await fetch('https://api.spotify.com/v1/me', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (result.status === 200) {
    return true;
  } else {
    return false;
  }
};
