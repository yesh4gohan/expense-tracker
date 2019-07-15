
import { EDIT_BUDGET } from "../actions/actionTypes";
 
const initialState = {
  budget:10000
};

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case EDIT_BUDGET:
      return { ...state, budget:payload };  

    default:
      return state;
  }
}
