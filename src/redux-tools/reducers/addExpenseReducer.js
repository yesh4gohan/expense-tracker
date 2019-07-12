import { ADD_NEW_EXPENSE, GET_ALL_EXPENSES } from "../actions/actionTypes";
const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_NEW_EXPENSE:
      return { ...state, expenses: [...state.expenses, payload] };

    case GET_ALL_EXPENSES:
      return {
        ...state,
        expenses: payload
      };
    default:
      return state;
  }
};
