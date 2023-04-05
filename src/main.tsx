import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TokenProvider } from './store/store';
import { Global } from '@emotion/react';
import { MainStyle } from './style/Global.styled';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <>
    <Global styles={MainStyle} />
    <TokenProvider>
      <App />
    </TokenProvider>
  </>
  // </React.StrictMode>,
);
