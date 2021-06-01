import {
  INSERT_FAKE_JOE,
  CHANGE_GOV_OFFICIAL,
  REMOVE_SINGING_MAN,
} from "../action-types/action-types";

const initialState = {
  fakeData: [{ userName: "CharyAntosko", height: "8ft" }],
  governmentOfficials: ["Mayor", "VP", "Secretary of Treasury"],
  celebrities: [
    { name: "Elton John" },
    { name: "Ashton Kutcher" },
    { name: "Kelly Clarkson" },
  ],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_FAKE_JOE:
      return { ...state, fakeData: [{ username: "Joe", height: "7.1" }] };
    case CHANGE_GOV_OFFICIAL:
      return {
        ...state,
        governmentOfficials: [...state.governmentOfficials, "Senator"],
      };
    case REMOVE_SINGING_MAN:
      const newCelebs = state.celebrities.filter(
        (celebrity) => celebrity.name !== "Elton John"
      );
      return {
        ...state,
        celebrities: newCelebs,
      };
    default:
      return state;
  }
};
