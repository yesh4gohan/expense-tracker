import { SET_PATH } from "../actions/actionTypes";
const initialState = {

}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PATH:
      return { ...state, routePath:payload };

      default:
        return state;
    }
};
