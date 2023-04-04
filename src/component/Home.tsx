import useAuth from '../customHook/useAuth';

type HomeProp = {
  code: string;
};

export default function Home({ code }: HomeProp) {
  const accessToken = useAuth(code);
  return <p>{code}</p>;
}
