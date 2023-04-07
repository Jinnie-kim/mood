import { useEffect, useState } from 'react';
import { useToken, useGetToken } from '../store/store';
import { getPlaylist, getPlaylistItem } from '../api/playlist';
import { PlaylistLayout, Playlists, PlaylistItem } from '../style/Playlist.styled';

const PlayList = () => {
  const token = useToken();
  const getToken = useGetToken();
  const [playlist, setPlaylist] = useState<Playlist>();
  const [playlistItem, setPlaylistItem] = useState<PlaylistItem>();

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

  const getPlaylistId = (e: React.MouseEvent) => {
    // console.log(e.target.id);
    const playlist_id = e.target.id;
    getPlaylistItem(token as string, '26OQ5aqXVhEABAY2fLbNeA');
  };

  return (
    <PlaylistLayout>
      <h1>Playlist</h1>
      <Playlists>
        {playlist?.items.map((item) => {
          return (
            <PlaylistItem key={item.id} id={item.id} onClick={getPlaylistId}>
              {item.name}
            </PlaylistItem>
          );
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
