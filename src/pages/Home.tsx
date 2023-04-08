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
      getTopTracks(token, 'short_term').then((res) => {
        setTopTracks(res.items as TopTracks[]);
      });
      return;
    }
    if (localStorage.getItem('accessToken') !== null) {
      getToken(localStorage.getItem('accessToken') as string);
    }
  }, [token]);

  const getShortTermTopArtists = () => {
    getTopArtists(token as string, 'short_term').then((res) => {
      setTopArtists(res.items as TopArtists[]);
    });
  };

  const getMidTermTopArtists = () => {
    getTopArtists(token as string, 'medium_term').then((res) => {
      setTopArtists(res.items as TopArtists[]);
    });
  };

  const getLongTermTopArtists = () => {
    getTopArtists(token as string, 'long_term').then((res) => {
      setTopArtists(res.items as TopArtists[]);
    });
  };

  const getShortTermTopTracks = () => {
    getTopTracks(token as string, 'short_term').then((res) => {
      setTopTracks(res.items as TopTracks[]);
    });
  };

  const getMidTermTopTracks = () => {
    getTopTracks(token as string, 'medium_term').then((res) => {
      setTopTracks(res.items as TopTracks[]);
    });
  };

  const getLongTermTopTracks = () => {
    getTopTracks(token as string, 'long_term').then((res) => {
      setTopTracks(res.items as TopTracks[]);
    });
  };

  return (
    <ToppageLayout>
      <h1>My Listening History</h1>
      <TopItemLayout>
        {/* Top Artists */}
        <TopItemBox>
          <h1>Top Artists</h1>
          <TermButtonBox>
            <TermButton onClick={getShortTermTopArtists}>Last 1 month</TermButton>
            <TermButton onClick={getMidTermTopArtists}>Last 6 month</TermButton>
            <TermButton onClick={getLongTermTopArtists}>All Time</TermButton>
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
            <TermButton onClick={getShortTermTopTracks}>Last 1 month</TermButton>
            <TermButton onClick={getMidTermTopTracks}>Last 6 month</TermButton>
            <TermButton onClick={getLongTermTopTracks}>All Time</TermButton>
          </TermButtonBox>
          <TopItemLists>
            {topTracks?.map((topTrack) => {
              return <TopItemList key={topTrack.id}>{topTrack.name}</TopItemList>;
            })}
          </TopItemLists>
        </TopItemBox>
      </TopItemLayout>
    </ToppageLayout>
  );
};

export default Home;
