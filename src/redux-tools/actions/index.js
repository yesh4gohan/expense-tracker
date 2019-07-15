import {ADD_NEW_EXPENSE,GET_ALL_EXPENSES,SET_PATH,EDIT_BUDGET,AMOUNT_SPENT
} from './actionTypes';
import {addNewExpense,fetchAllExpenses,editExpenseApi} from '../../api/api-call';
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

export const editExpense = payload => async dispatch => {
  await editExpenseApi(payload);
  let expenses = await fetchAllExpenses();
  dispatch({
    type:GET_ALL_EXPENSES,
    payload:expenses
  })
}

export const handlePath = myPath => {
  return {
    type:SET_PATH,
    payload:myPath
  }
}

export const updateBudget = budget => {
  return {
    type:EDIT_BUDGET,
    payload:budget
  }
}

export const totalExpense = (expenses) => {
  const expense = calculateExpense(expenses);

  return {
    type:AMOUNT_SPENT,
    payload:expense
  }
}

const calculateExpense = (expenses) => {
  return expenses.reduce((acc,each)=>{

    if(!each.Deleted){
      acc += parseInt(each.Amount);
    }
    return acc;
  },0)
}