import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { tokenAction } from '../store/token-slice';
import { LoginButton } from '../style/Login.styled';

const { VITE_AUTH_URL } = import.meta.env;

interface tokenType {
  token: { accessToken: string };
}

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = useSelector((state: tokenType) => state.token.accessToken);

  useEffect(() => {
    if (localStorage.getItem('accessToken') !== null) {
      dispatch(tokenAction.getToken(localStorage.getItem('accessToken')));
    }
    if (accessToken) {
      navigate('/home');
    }
    console.log(accessToken);
  }, [accessToken]);

  return <LoginButton href={VITE_AUTH_URL}>Login With Spotify 🎧</LoginButton>;
};

export default Login;
