import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Counter(props) {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter</h1>
      <p>{counter}</p>
      <button>Plus 1</button>
      <button>Minus 1</button>
    </div>
  );
}
