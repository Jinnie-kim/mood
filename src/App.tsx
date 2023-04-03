import './App.css';
import Login from './component/Login';
import Home from './component/Home';
import MenuBar from './component/MenuBar';

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return (
    <section className="App">
      {code ? <Home code={code} /> : <Login />}
      <MenuBar />
    </section>
  );
}

export default App;
