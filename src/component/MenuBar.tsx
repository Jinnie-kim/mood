import { MenuBars, MenuBarButton } from './MenuBar.styled';

const MenuBar = () => {
  return (
    <MenuBars>
      <li>
        <MenuBarButton>HOME</MenuBarButton>
      </li>
      <li>
        <MenuBarButton>Playlist</MenuBarButton>
      </li>
      <li>
        <MenuBarButton>Me</MenuBarButton>
      </li>
    </MenuBars>
  );
};

export default MenuBar;
