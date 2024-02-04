import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const [incrementBy, setIncrementBy] = useState(1);

  function handleClick() {
    setCount(count + incrementBy);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  function increaseIncrement() {
    setIncrementBy(incrementBy + 1);
  }

  return (
    <div>
      <h1>Count value is: {count}</h1>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <h1>We are incrementing the value by: {incrementBy}</h1>
      <button onClick={increaseIncrement}>Increase Increment</button>
    </div>
  );
}
