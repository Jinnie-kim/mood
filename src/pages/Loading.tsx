import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetToken } from '../store/store';
import useAuth from '../hooks/useAuth';

const code = new URLSearchParams(window.location.search).get('code');

const Loading = () => {
  const accessToken = useAuth(code!);
  const getToken = useGetToken();
  const navigate = useNavigate();

  localStorage.setItem('accessToken', accessToken);

  getToken(accessToken);

  useEffect(() => {
    if (accessToken) navigate('/home');
  }, [accessToken]);

  return <h1>Loading... 🧜🏻‍♀️</h1>;
};

export default Loading;
