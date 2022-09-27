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
      <div className="d-flex justify-content-center text-success">
        <div className="container-fluid bg-dark rounded m-4 p-3 row d-flex justify-content-center">
          <h2 className="display-6 text-center ">Melhores Filmes</h2>
            {topMovies.length > 0 && topMovies.map((movie) =>
              <MovieCard key={movie.id} movie={movie} />
            )}
        </div>
      </div>
    </>
  );
};

export default Home;