import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import { Global } from '@emotion/react';
import { MainStyle } from './style/Global.styled';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <>
    <Global styles={MainStyle} />
    <Provider store={store}>
      <App />
    </Provider>
  </>
  // </React.StrictMode>,
);
