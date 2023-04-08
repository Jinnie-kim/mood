import { useEffect, useState } from 'react';
import { useToken, useGetToken } from '../store/store';
import { getTopArtists, getTopTracks } from '../api/topItems';
import { ToppageLayout, TopItemLayout, TopItemBox, TopItemLists, TopItemList, TermButtonBox, TermButton } from '../style/Home.styled';

const Home = () => {
  const token = useToken();
  const getToken = useGetToken();
  const [topArtists, setTopArtists] = useState<TopArtists[]>();
  const [topTracks, setTopTracks] = useState<TopTracks[]>();

  useEffect(() => {
    if (token) {
      getTopArtists(token, 'short_term').then((res) => {
        setTopArtists(res.items as TopArtists[]);
      });
      getTopTracks(token, 'short_term');
      return;
    }
    if (localStorage.getItem('accessToken') !== null) {
      getToken(localStorage.getItem('accessToken') as string);
    }
  }, [token]);

  return (
    <ToppageLayout>
      <h1>My Listening History</h1>
      <TopItemLayout>
        {/* Top Artists */}
        <TopItemBox>
          <h1>Top Artists</h1>
          <TermButtonBox>
            <TermButton>Last 1 month</TermButton>
            <TermButton>Last 6 month</TermButton>
            <TermButton>All Time</TermButton>
          </TermButtonBox>
          <TopItemLists>
            {topArtists?.map((topArtist) => {
              return <TopItemList key={topArtist.id}>{topArtist.name}</TopItemList>;
            })}
          </TopItemLists>
        </TopItemBox>
        {/* Top Tracks */}
        <TopItemBox>
          <h1>Top Tracks</h1>
          <TermButtonBox>
            <TermButton>Last 1 month</TermButton>
            <TermButton>Last 6 month</TermButton>
            <TermButton>All Time</TermButton>
          </TermButtonBox>
          <TopItemLists>
            <TopItemList>Hello - 소향</TopItemList>
            <TopItemList>Until I found you - stephen sanchez, em beihold</TopItemList>
            <TopItemList>Kiwi - Harry Styles</TopItemList>
            <TopItemList>가을 - Darin</TopItemList>
            <TopItemList>As it was - Harry styles</TopItemList>
            <TopItemList>그대라는 시 - 태연</TopItemList>
            <TopItemList>Music for a sushi restaurant - Harry styles</TopItemList>
            <TopItemList>Late Night talking - Harry styles</TopItemList>
            <TopItemList>Hard to love - blackpink</TopItemList>
            <TopItemList>Love of my life - harry styles</TopItemList>
          </TopItemLists>
        </TopItemBox>
      </TopItemLayout>
    </ToppageLayout>
  );
};

export default Home;
