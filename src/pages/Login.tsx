import { LoginButton } from '../style/Login.styled';
const { VITE_AUTH_URL } = import.meta.env;

const Login = () => {
  return <LoginButton href={VITE_AUTH_URL}>Login With Spotify 🎧</LoginButton>;
};

export default Login;
