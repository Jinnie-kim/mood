import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { tokenAction } from '../store/token-slice';
import useAuth from '../hooks/useAuth';

const code = new URLSearchParams(window.location.search).get('code');

const Loading = () => {
  const accessToken = useAuth(code!);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  localStorage.setItem('accessToken', accessToken);
  dispatch(tokenAction.getToken(accessToken));

  useEffect(() => {
    if (accessToken) navigate('/home');
  }, [accessToken]);

  return <h1>Loading... 🧜🏻‍♀️</h1>;
};

export default Loading;
