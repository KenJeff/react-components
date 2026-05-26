/* "Build a text area that tracks how many characters the user has typed and changes the message based on how close they are to the limit."
Requirements:

Track the input value in state. Starting at an empty string
Use useEffect to update a message state based on the character count
Set a limit of 50 characters
Display three different messages based on count:
Below 40 characters → "You have [remaining] characters left"
40 to 49 characters → "Getting close!"
50 characters → "Character limit reached!"

Display the current character count


hint: you will use <textarea> for this and not <input>*/
import { useState } from "react";

export default function CharCounter() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  const getMessage = () => {
    if (count === 50) return "Character limit reached!";
    if (count >= 40) return "Getting close!";
    return `You have ${50 - count} characters left`;
  };

  return (
    <>
      <textarea
        maxLength={50}
        onChange={(e) => {
          setInput(e.target.value);
          setCount(e.target.value.length);
        }}
      ></textarea>
      <h1>{count}</h1>
      <h2>{input}</h2>
      <p>{getMessage()}</p>
    </>
  );
}
