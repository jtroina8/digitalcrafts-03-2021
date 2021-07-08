export const changeEmail = (dispatch, inputValue) => {
  return dispatch({ type: "SET_EMAIL", payload: inputValue });
};
