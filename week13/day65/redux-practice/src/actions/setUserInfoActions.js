export const setUserInfo = (dispatch, username, email) => {
  return dispatch({ type: "SET_USER_INFO", payload: { username, email } });
};
