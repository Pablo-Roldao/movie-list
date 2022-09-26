import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "../App.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    getTopRatedMovies(topRatedUrl);
  }, []);

  console.log(topMovies);

  return (
    <>
      <div className="d-flex justify-content-center ">
        <div className="container-fluid text-success bg-dark rounded m-3">
          <h2 className="display-6 text-center ">Melhores filmes</h2>
          <div className="movies-container row filmecard">
            {topMovies.length > 0 &&
              topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;