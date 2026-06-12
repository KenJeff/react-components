import { shows } from "../data/netflixHelperData";

import {
  getAvailableShows,
  getGenreRecommendations,
  getTopRatedShows,
} from "../lib/netflixHelperFunctions";

export default function Shows() {
  const availableShows = getAvailableShows(shows);
  const topRated = getTopRatedShows(shows);
  const genre = "Comedy";
  const recommend = getGenreRecommendations(shows, genre);

  return (
    <div>
      <div>
        <h1>Available Shows: </h1>
        {availableShows.map((show, index) => (
          <div key={index}>
            <h2>{show.title}</h2>
            <p>Genre: {show.genre}</p>
            <p>Rating: {show.rating}</p>
          </div>
        ))}
      </div>
      <div>
        <h1>Top Rated Shows: </h1>
        {topRated.map((show, index) => (
          <div key={index}>
            <h2>{show.title}</h2>
            <p>Genre: {show.genre}</p>
            <p>Rating: {show.rating}</p>
          </div>
        ))}
      </div>
      <div>
        <h1>Recommended Shows for {genre}: </h1>

        {recommend.map((show, index) => (
          <div key={index}>
            <h2>{show.title}</h2>
            <p>Genre: {show.genre}</p>
            <p>Rating: {show.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
