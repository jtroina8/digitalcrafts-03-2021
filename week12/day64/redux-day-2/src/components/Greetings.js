import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFakeDataToJoe,
  changeGovOfficials,
} from "../actions/greetingActions";

export default function Greetings() {
  const dispatch = useDispatch();
  const fakeData = useSelector((state) => state.fakeData);
  const governmentOfficials = useSelector((state) => state.governmentOfficials);
  return (
    <div>
      <h1>Hello Redux</h1>
      {fakeData.map((data) => (
        <p>{data.userName}</p>
      ))}
      <button
        onClick={() =>
          changeFakeDataToJoe(dispatch)({ type: "INSERT_FAKE_JOE" })
        }
      >
        Change to Joe
      </button>
      {governmentOfficials.map((govOfficial) => (
        <p>{govOfficial}</p>
      ))}
      <button onClick={() => changeGovOfficials(dispatch)}>Add Senator</button>
    </div>
  );
}
