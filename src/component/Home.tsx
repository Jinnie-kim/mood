type HomeProp = {
  code: string;
};

export default function Home({ code }: HomeProp) {
  return <p>{code}</p>;
}
