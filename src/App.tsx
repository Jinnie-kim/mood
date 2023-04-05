import { RouterProvider } from 'react-router-dom';
import { routers } from './router';
import { Global } from '@emotion/react';
import { AppStyle } from './style/Global.styled';

function App() {
  return (
    <>
      <Global styles={AppStyle} />
      <section className="App">
        <RouterProvider router={routers} />
      </section>
    </>
  );
}

export default App;
