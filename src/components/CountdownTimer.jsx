import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count === 0) return;

    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      {count === 0 && <p>Time is up!</p>}
      <div className="spinner-border " role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </>
  );
}
