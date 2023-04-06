import styled from '@emotion/styled';

export const PlaylistLayout = styled.section`
  width: 1000px;
  height: 600px;
  margin: 0 auto;
  border: 1px solid hsla(242, 100%, 70%, 1);
  border-radius: 20px;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.44);
`;

export const Playlists = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const PlaylistItem = styled.li`
  width: fit-content;
  height: fit-content;
  padding: 5px;
  border: 1px solid hsla(340, 100%, 76%, 1);
  border-radius: 20px;
  box-shadow: -2px 1px 5px 0px rgba(0, 0, 0, 0.75);
  cursor: pointer;
`;
