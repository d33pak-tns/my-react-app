// components/Counter.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../slices/counterSlice"; // Import actions

const Counter = () => {
  const count = useSelector((state) => state.counter.count); // Access the count from the store
  const dispatch = useDispatch(); // Dispatch actions

  return (
    <div className="flex flex-row justify-evenly px-2 py-3">
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment(1))}>Increment</button>
      <button onClick={() => dispatch(decrement(1))}>Decrement</button>
    </div>
  );
};

export default Counter;
