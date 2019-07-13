import {API} from 'aws-amplify';
const api = "expense-tracker";

let today = new Date(Date.now());
let dd = today.getDate();
let mm = today.getMonth() + 1; //January is 0!

let yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd;
} 
if (mm < 10) {
  mm = '0' + mm;
} 
let date = dd + '/' + mm + '/' + yyyy;

export const fetchSingleExpense = id => {
  let myInit = {
    response:true
  }
  return API.get(api,`/expenses/${id}`,myInit)
  .then(res=>(res.data))
  .catch(err=>console.log(err))
}

export const fetchAllExpenses = () => {
  let myInit = {
    response:true
  }
  return API.get(api,`/expenses/all`,myInit)
  .then(res=>(res.data))
  .catch(err=>console.log(err))
}

export const addNewExpense = expense => {
  const payload = {
    body: {
      'expenseId': `expense_${Math.ceil(Math.random()*1000)}`,
      'Category': expense.Category,
      'expName': expense.expName,
      'Amount': expense.Amount,
      'expdate': date,
      'Deleted':false
    }
  }
  return API.post(api,'/expenses',payload)
  .then(res=>(res))
  .catch(err=>console.log(err))
}


export const editExpenseApi = load=> {
  
  console.log(load)
  load.Deleted = load.Deleted ? load.Deleted:false;
  const payload = {
    body: {
      'expenseId': load.expenseId,
      'Category': load.Category,
      'expName': load.expName,
      'Amount': load.Amount,
      'expdate': date,
      'Deleted':load.Deleted
    }
  }
  return API.post(api,'/expenses/edit',payload)
  .then(res=>console.log(res))
  .catch(err=>console.log(err))
}