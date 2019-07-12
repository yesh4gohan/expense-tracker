import {ADD_NEW_EXPENSE,GET_ALL_EXPENSES,LAUNCH_EDIT_MODAL} from './actionTypes';
import {addNewExpense,fetchAllExpenses} from '../../api/api-call';
export const addNewExpenseAction = expense => async dispatch => {
  let newExpense = await addNewExpense(expense);
  dispatch({
    type:ADD_NEW_EXPENSE,
    payload:newExpense
  })
}

export const getAllExpenses = () => async dispatch => {
  let expenses = await fetchAllExpenses();
  dispatch({
    type:GET_ALL_EXPENSES,
    payload:expenses
  })
}

export const launchEditModal = val => {
  return {
    type:LAUNCH_EDIT_MODAL,
    payload:val
  }
}