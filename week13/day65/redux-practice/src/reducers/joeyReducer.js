import {
  CHANGE_HEIGHT,
  CHANGE_WEIGHT,
  CHANGE_NAME,
} from "../action-types/joeyExampleActionTypes";
const initalState = { name: "joey", weight: "170", height: "6ft 2in" };

const joey = (state = initalState, action) => {
  switch (action.type) {
    case CHANGE_HEIGHT:
      return { ...state, height: "6ft 9in" };
    case CHANGE_WEIGHT:
      return { ...state, weight: "225" };
    case CHANGE_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

export default joey;
