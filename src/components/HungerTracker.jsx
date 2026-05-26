import { useEffect, useState } from "react";

export default function HungerTracker() {
  const [hungerLevel, setHungerLevel] = useState("Neutral");

  useEffect(() => {
    console.log("Check that hunger level!");
  }, [hungerLevel]);
  return (
    <div>
      <button
        onClick={() => {
          setHungerLevel("Full");
        }}
      >
        Full
      </button>
      <button
        onClick={() => {
          setHungerLevel("Neutral");
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          setHungerLevel("Hungry");
        }}
      >
        Hungry
      </button>

      <p>Here is your current state of hunger: {hungerLevel}</p>
    </div>
  );
}
