const initialState = "";

const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_INFO":
      return (state = action.payload);
    default:
      return state;
  }
};
export default userInfo;
