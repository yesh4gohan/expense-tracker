import {combineReducers} from 'redux';
import Expenses from './addExpenseReducer'
export default combineReducers({
  expenses:Expenses
}); 