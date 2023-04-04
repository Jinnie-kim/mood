import { LoginButton } from './Login.styled';

const AUTH_URL =
  'https://accounts.spotify.com/authorize?client_id=6727280b598f42f18646ee89b28a2568&response_type=code&redirect_uri=http://127.0.0.1:5173/&scope=user-read-private%20user-read-email%20ugc-image-upload%20playlist-read-private%20playlist-modify-private%20playlist-modify-public%20user-read-recently-played%20user-top-read%20user-library-modify%20user-library-read';

export default function Login() {
  return <LoginButton href={AUTH_URL}>Login With Spotify 🎧</LoginButton>;
}
