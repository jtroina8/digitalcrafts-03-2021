export const changeHeight = (dispatch) => {
  return dispatch({ type: "CHANGE_HEIGHT" });
};

export const changeWeight = (dispatch) => {
  return dispatch({ type: "CHANGE_WEIGHT" });
};

export const changeName = (dispatch, e) => {
  return dispatch({ type: "CHANGE_NAME", payload: e.target.value });
};
