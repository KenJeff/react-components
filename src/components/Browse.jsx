import { useState, useEffect } from "react";

export default function Browse() {
  const [input, setInput] = useState("");

  useEffect(() => {
    document.title = input;
  }, [input]);

  return (
    <>
      <h1>Current input: </h1>
      {input}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
    </>
  );
}
