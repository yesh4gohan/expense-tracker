import {combineReducers} from 'redux';
import Expenses from './addExpenseReducer';
import custom from './customReducers';
export default combineReducers({
  expenses:Expenses,
  editModal:custom
}); 