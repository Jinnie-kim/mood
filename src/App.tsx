import { RouterProvider } from 'react-router-dom';
import { routers } from './router';
import './App.css';

function App() {
  return (
    <section className="App">
      <RouterProvider router={routers} />
    </section>
  );
}

export default App;
