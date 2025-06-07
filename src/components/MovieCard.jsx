import "../css/MovieCard.css";
import "../css/CircularRating.css";          // make sure this already exists
import CircularRating from "./CircularRating";
import { useMovieContext } from "../context/MovieContext";

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);
  const ratingPct = Math.round(movie.vote_average * 10); // TMDb vote → %

  const handleFavClick = (e) => {
    e.preventDefault();
    favorite ? removeFromFavorites(movie.id) : addToFavorites(movie);
  };

  return (
    <div className="modern-movie-card">
      {/* poster */}
      <img
        className="movie-poster-img"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      {/* heart button overlay */}
        <button
            title={favorite ? "Remove from Favorites" : "Add to Favorites"}
            className={`favorite-btn ${favorite ? "active" : ""}`}
                 onClick={handleFavClick}
        >
        ♥
        </button>

      {/* blurred info strip at bottom */}
      <div className="movie-info-blur">
        <div className="info-text">
          <h3>{movie.title}</h3>
          <span>{movie.release_date?.split("-")[0]}</span>
        </div>

        {/* rating badge at right */}
        <div className="info-rating">
          <CircularRating percentage={ratingPct} />
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
