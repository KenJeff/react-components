////Build a simple step counter. It should track a number of steps,
// have an add button that increases steps by 1,
// a reset button that sets steps back to 0, and display a message that says 'Goal reached!' when steps hit 10.
import { useState } from "react";

export default function StepCounter() {
  const [steps, setSteps] = useState(0);

  return (
    <>
      <h1>{steps}</h1>
      {steps >= 10 && <h1>Goal Reached!</h1>}
      <button
        onClick={() => {
          setSteps(steps + 1);
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          setSteps(0);
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          if (steps > 0) {
            setSteps(steps - 1);
          }
        }}
      >
        Subtract
      </button>
    </>
  );
}
