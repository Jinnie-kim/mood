import styled from '@emotion/styled';

export const MenuBars = styled.ul`
  display: flex;
  justify-content: space-around;
  min-width: 85%;
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ffffff;
  opacity: 0.85;
  border-radius: 10px;
`;

export const MenuBarButton = styled.button`
  width: fit-content;
  background-color: #fff;
  padding: 5px 10px;
  border: 1px solid #d5d9d9;
  border-radius: 15px;
  box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
  color: #0f1111;
  cursor: pointer;
  &:hover {
    background-color: #f7fafa;
  }
  &:focus {
    color: #ffffff;
    background-color: hsla(343, 100%, 76%, 1);
    border-color: hsla(343, 100%, 76%, 1);
    box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
    outline: 0;
  }
`;
