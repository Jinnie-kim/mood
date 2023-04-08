import { css } from '@emotion/react';

export const MainStyle = css`
  :root {
    font-family: sans-serif;
    line-height: 1.5;
    font-weight: 400;
  }

  body {
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
  }

  ul,
  ol,
  li {
    list-style-type: none;
    padding: 0;
  }
`;

export const AppStyle = css`
  #root {
    width: 100vw;
    height: 100vh;
    text-align: center;
    background-color: hsla(0, 100%, 50%, 1);
    background-image: radial-gradient(at 40% 20%, hsla(28, 100%, 74%, 1) 0px, transparent 50%),
      radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355, 100%, 93%, 1) 0px, transparent 50%),
      radial-gradient(at 80% 50%, hsla(340, 100%, 76%, 1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0px, transparent 50%),
      radial-gradient(at 80% 100%, hsla(242, 100%, 70%, 1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 1) 0px, transparent 50%);
  }
`;
