import { useNavigate } from 'react-router-dom';
import { MenuBars, MenuBarButton } from '../style/MenuBar.styled';

const MenuBar = () => {
  const navigate = useNavigate();

  const moveToPlaylistHandler = () => {
    navigate('/playlist');
  };

  const moveToMypageHandler = () => {
    navigate('/mypage');
  };

  const moveToHomeHandler = () => {
    navigate('/home');
  };

  return (
    <MenuBars>
      <li onClick={moveToHomeHandler}>
        <MenuBarButton>HOME</MenuBarButton>
      </li>
      <li onClick={moveToPlaylistHandler}>
        <MenuBarButton>Playlist</MenuBarButton>
      </li>
      <li onClick={moveToMypageHandler}>
        <MenuBarButton>Me</MenuBarButton>
      </li>
    </MenuBars>
  );
};

export default MenuBar;
