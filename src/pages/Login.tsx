import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToken, useGetToken } from '../store/store';
import { LoginButton } from '../style/Login.styled';

const { VITE_AUTH_URL } = import.meta.env;

const Login = () => {
  const token = useToken();
  const getToken = useGetToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('accessToken') !== null) {
      getToken(localStorage.getItem('accessToken') as string);
    }
    if (token) {
      navigate('/home');
    }
    console.log(token);
  }, [token]);

  return <LoginButton href={VITE_AUTH_URL}>Login With Spotify 🎧</LoginButton>;
};

export default Login;
