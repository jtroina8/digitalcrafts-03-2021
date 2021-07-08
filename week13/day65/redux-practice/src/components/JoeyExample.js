import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeHeight, changeWeight, changeName } from "../actions/joeyAction";

export default function JoeyExample() {
  const dispatch = useDispatch();
  const height = useSelector((state) => state.joey.height);
  const weight = useSelector((state) => state.joey.weight);
  const name = useSelector((state) => state.joey.name);
  console.log(useSelector((state) => state));
  return (
    <div className="App">
      <h1>{name}</h1>
      <p>{height}</p>
      <p>{weight}</p>
      <input type="text" onChange={(e) => changeName(dispatch, e)} />
      <button onClick={() => changeName(dispatch)}>New Name</button>
      <button onClick={() => changeHeight(dispatch)}>Growth Spurt</button>
      <button onClick={() => changeWeight(dispatch)}>Weight Gain</button>
    </div>
  );
}
