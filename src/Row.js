import movieTrailer from "movie-trailer";
import React, { useEffect, useState } from "react";
import Youtube from "react-youtube";
import axios from "./axios";
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchURL, isLargRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("")

  // A snippet of code which runs based on a specific condition/varaible
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);
const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    autoplay: 1,
  }
}

const handleClick = (movie) => {
  if(trailerUrl) {
    setTrailerUrl("")
  }else {
    movieTrailer(movie?.title || movie?.name || movie?.original_name)
    .then(url => {
      const urlParams = new  URLSearchParams(new URL(url).search)
      setTrailerUrl(urlParams.get('v'));
    })
    .catch(err => {
      console.log(err);
    } )
  }
}

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {/* sevelar row poster_(s) */}
        {movies.map((movie) => (
          <img
          key={movie.id}
          onClick={() => handleClick(movie)}
            className={`row_poster ${isLargRow && 'row_posterLarge'}`}
            src={`${base_url}${isLargRow? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
