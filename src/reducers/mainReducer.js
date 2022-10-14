export const INITIAL_STATE = {
  flipped: false,
  signedIn: false,
  signedUp: false,
};

export const mainReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_FLIPPED_STATUS":
      return { ...state, flipped: action.payload };
    case "CHANGE_SIGNED_IN_STATUS":
      return { ...state, signedIn: action.payload };
    case "CHANGE_SIGNED_UP_STATUS":
      return { ...state, signedUp: action.payload };
    default:
      return state;
  }
};
