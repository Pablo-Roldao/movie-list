import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";

const imagesURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card bg-black m-2 p-2 rounded text-center col" id="movie-card">
      <img src={imagesURL + movie.poster_path} alt={movie.title}  className="img-fluid rounded" width="200px" id="movie-card-img" />
      <h3 className="display-6">{movie.title}</h3>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`} className="link link-success text-decoration-none">Detalhes</Link>}
    </div>
  );
};

export default MovieCard;