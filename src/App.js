import './App.css';
import Header from './Header';
import Genre from './Genre';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Header />
      <Genre />
    </div>
  );
}

export default App;
