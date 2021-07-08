import React from "react";
import { changeUserName } from "../actions/userNameActions";
import { changeEmail } from "../actions/changeEmailActions";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../actions/setUserInfoActions";

export default function InputForm() {
  const username = useSelector((state) => state.userName);
  const email = useSelector((state) => state.email);
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        placeHolder="username"
        onChange={(e) => changeUserName(dispatch, e.target.value)}
      />
      <input
        type="text"
        placeHolder="email"
        onChange={(e) => changeEmail(dispatch, e.target.value)}
      />
      <button onClick={() => setUserInfo(dispatch, username, email)}>
        Submit
      </button>
    </div>
  );
}
