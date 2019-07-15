
import {AMOUNT_SPENT  } from "../actions/actionTypes";
 
const initialState = {
  spent:0
};

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case AMOUNT_SPENT:
      return { ...state, spent:payload };  

    default:
      return state;
  }
}
