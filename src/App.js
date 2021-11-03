import './App.css';
import Banner from './Banner';
import Nav from './Nav';
import request from './request';
import Row from './Row';

function App() {
  return (
    <div className="App">
      {/* var */}
      <Nav />
      <Banner />
      {/* banner */}
     <Row title="NETFLIX ORIGINALs" fetchURL={request.fetchNetflixOriginals} isLargRow />
     <Row title="Trending Now" fetchURL={request.fetchTrending}  />
     <Row title="Top Rated" fetchURL={request.fetchTopRated}  />
     <Row title="Action Movies" fetchURL={request.fetchActionMovies}  />
     <Row title="Comedy Movies" fetchURL={request.fetchComedyMovies}  />
     <Row title="Horror Movies" fetchURL={request.fetchHorrorMovies}  />
     <Row title="Romance Movies" fetchURL={request.fetchRomanceMovies}  />
     <Row title="Documentaries" fetchURL={request.fetchTrending}  />
    </div>
  );
}

export default App;
