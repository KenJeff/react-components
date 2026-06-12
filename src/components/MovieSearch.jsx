import { useState } from "react";

const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;

export default function MovieSearch() {
  const [movies, setMovies] = useState(null);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchMovie() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${title}&api_key=${API_KEY}`,
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch movies. Status: ${response.status}`);
      }
      const json = await response.json();
      console.log(json);
      setMovies(json.results);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  function handleClick() {
    fetchMovie();
  }

  return (
    <div>
      <h1>Search</h1>

      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={handleClick}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>There was an issue fetching your data: {error.message}</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        {movies &&
          movies.map((movie) => (
            <div
              className="card"
              key={movie.id}
              style={{
                display: "flex",
                flexDirection: "column",

                borderRadius: "8px",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              <img
                className="card-img-top"
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                style={{ width: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  padding: "0.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                }}
              >
                <h2 style={{ fontSize: "0.95rem", margin: 0 }}>
                  {movie.title}
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
                  {movie.overview}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
