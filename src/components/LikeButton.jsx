import { useState } from "react";

export default function LikeButton() {
  const [count, setCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <>
      <div>
        <button
          onClick={() => {
            if (isLiked) {
              setCount(count + 1);
              setIsLiked(!isLiked);
            } else {
              setIsLiked(!isLiked);
            }
          }}
        >
          {isLiked ? "💔 Unlike" : "❤️ Like"}
        </button>
        <p>Here is the count: {count}</p>
      </div>
    </>
  );
}
