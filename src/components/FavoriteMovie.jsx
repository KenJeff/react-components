import { useState, useEffect } from "react";

export default function FavoriteMovie() {
  const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;

  const [favoriteMovie, setFavoriteMovie] = useState(null);
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch movies`);
        }

        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);

  function saveFavorite(movie) {
    localStorage.setItem("favoriteMovie", JSON.stringify(movie));
    setFavoriteMovie(movie);
  }

  function removeFavorite() {
    localStorage.removeItem("favoriteMovie");
    setFavoriteMovie(null);
  }

  return (
    <>
      <h1>Favorite Movie</h1>

      {favoriteMovie ? (
        <div>
          <h2 style={{ fontSize: "0.95rem", margin: 0 }}>
            {favoriteMovie.title}
          </h2>
          <p
            style={{
              fontSize: "0.75rem",
              color: "#888",
              margin: 0,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {favoriteMovie.overview}
          </p>
          <button onClick={removeFavorite}>Remove Favorite</button>
        </div>
      ) : (
        <p>No Favorite</p>
      )}

      {loading && <p>Loading movies...</p>}
      {error && <p>Something went wrong: {error.message}</p>}

      {movies &&
        movies.map((movie) => (
          <div key={movie.id}>
            <h2 style={{ fontSize: "0.95rem", margin: 0 }}>{movie.title}</h2>
            <button
              onClick={() =>
                saveFavorite({ title: movie.title, overview: movie.overview })
              }
            >
              Save Favorite Movie
            </button>
          </div>
        ))}
    </>
  );
}
