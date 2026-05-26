import { useState } from "react";

import Light from "./Light";

export default function TrafficLight() {
  const [current, setCurrent] = useState("Red");
  return (
    <div>
      <button
        onClick={() => {
          if (current == "Red") {
            setCurrent("Green");
          } else if (current == "Green") {
            setCurrent("Yellow");
          } else {
            setCurrent("Red");
          }
        }}
      >
        Change the light!
      </button>
      <Light current={current} />
    </div>
  );
}
