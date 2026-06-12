import { useEffect, useState } from "react";
import "../assets/RandomJoke.css";

export default function RandomJoke() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    fetchJoke();
  }, []);

  async function fetchJoke() {
    setVisible(false); // reset fade on each new joke
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke",
      );
      if (!response.ok) {
        throw new Error("Failed to fetch joke");
      }
      const data = await response.json();
      setJoke(data);

      setTimeout(() => setVisible(true), 3000); // delay before fade starts
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>Random Joke</h1>

      <button onClick={fetchJoke}>New Joke</button>

      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}

      {joke && (
        <>
          <h2>{joke.setup}</h2>
          <p
            className={`fade-in ${visible ? "visible" : ""}`}
            style={{ minHeight: "1.5rem" }}
          >
            {visible ? joke.punchline : ""}
          </p>
        </>
      )}
    </div>
  );
}
