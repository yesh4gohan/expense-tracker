import {combineReducers} from 'redux';
import Expenses from './addExpenseReducer';
import custom from './customReducers';
import budget from './budgetReducer';
import spent from './spentReducer';

export default combineReducers({
  expenses:Expenses,
  routePath:custom,
  budget:budget,
  spent:spent
}); 