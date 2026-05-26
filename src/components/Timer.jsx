import { useEffect, useState } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((time) => time + 1);
    }, 1000);
    console.log(seconds);
    return () => clearInterval(interval);
  }, [seconds]);
  return <h1>{seconds}</h1>;
}
