import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tokenAction } from '../store/token-slice';
import { getPlaylist, getPlaylistItem } from '../api/playlist';
import { PlaylistLayout, Playlists, PlaylistItem } from '../style/Playlist.styled';

interface tokenType {
  token: { accessToken: string };
}

const PlayList = () => {
  const [playlist, setPlaylist] = useState<Playlist>();
  const [playlistItem, setPlaylistItem] = useState<PlaylistItem>();
  const dispatch = useDispatch();
  const accessToken = useSelector((state: tokenType) => state.token.accessToken);

  useEffect(() => {
    if (accessToken) {
      getPlaylist(accessToken).then((res) => {
        setPlaylist(res);
      });
      return;
    }
    if (localStorage.getItem('accessToken') !== null) {
      dispatch(tokenAction.getToken(localStorage.getItem('accessToken')));
    }
  }, [accessToken]);

  const getPlaylistId = (e: React.MouseEvent) => {
    // console.log(e.target.id);
    // const playlist_id = e.target.id;
    // getPlaylistItem(accessToken as string, '26OQ5aqXVhEABAY2fLbNeA');
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
