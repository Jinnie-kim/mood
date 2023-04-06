import { useEffect, useState } from 'react';
import { useToken, useGetToken } from '../store/store';
import { getPlaylist } from '../api/playlist';
import { PlaylistLayout, Playlists, PlaylistItem } from '../style/Playlist.styled';

const PlayList = () => {
  const token = useToken();
  const getToken = useGetToken();
  const [playlist, setPlaylist] = useState<Playlist>();

  useEffect(() => {
    if (token) {
      getPlaylist(token).then((res) => {
        setPlaylist(res);
      });
      return;
    }
    if (localStorage.getItem('accessToken') !== null) {
      getToken(localStorage.getItem('accessToken'));
    }
  }, [token]);
  return (
    <PlaylistLayout>
      <h1>Playlist</h1>
      <Playlists>
        {playlist?.items.map((item) => {
          return <PlaylistItem key={item.id}>{item.name}</PlaylistItem>;
        })}
      </Playlists>
      <div>
        <div>
          <img src="" alt="" />
          <h1>플레이리스트 제목</h1>
          <p>플레이리스트 설명</p>
        </div>
        <ul>
          <li>플레이리스트 수록곡</li>
        </ul>
      </div>
    </PlaylistLayout>
  );
};

export default PlayList;
