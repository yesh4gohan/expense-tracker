import { LAUNCH_EDIT_MODAL } from "../actions/actionTypes";
const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LAUNCH_EDIT_MODAL:
      return { ...state, editModal:payload };

    default:
      return state;
  }
};
