import React, { useState } from "react";
import Heading from "./Heading";

function App() {
  const [count, updateCount] = useState(40);

  return (
    <div>
      <Heading text="Hello World" />
      <Heading text="Hello Universe" />

      <h4>Current count: {count}</h4>
      <button onClick={() => updateCount(count + 1)}>Increment</button>
      <button onClick={() => updateCount(count - 1)}>Decrement</button>
      <button onClick={() => updateCount(40)}>Reset</button>

      {count === 42 && (
        <p>
          You have found the answer to the ultimate question of life, the
          universe, and everything.
        </p>
      )}
    </div>
  );
}

export default App;
