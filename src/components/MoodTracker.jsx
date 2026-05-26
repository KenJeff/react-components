/*"Build a mood tracker that lets a user cycle through three different moods."
Requirements:

Track the current mood with state — starting at "😊 Happy"
A button that cycles through three moods in order: "😊 Happy" → "😐 Neutral" → "😢 Sad" → back to "😊 Happy"
Display the current mood on the screen


Back at 8:15
[7:55 PM]hint:
const [mood, setMood] = useState("😊 Happy")
[7:56 PM]hint: your button onClick function will use an if statement, and if else statement, and an else statement */
import { useState } from "react";

export default function MoodTracker() {
  const [mood, setMood] = useState("😊 Happy");
  return (
    <div>
      <button
        onClick={() => {
          if (mood == "😊 Happy") {
            setMood("😐 Neutral");
          } else if (mood == "😐 Neutral") {
            setMood("😢 Sad");
          } else {
            setMood("😊 Happy");
          }
        }}
      >
        Change My Mood!
      </button>
      <p>Current mood: {mood}</p>
    </div>
  );
}
