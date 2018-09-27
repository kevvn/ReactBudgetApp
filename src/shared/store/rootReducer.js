import { combineReducers } from 'redux';
// import reducers from pages here
import { tabSelected } from '../components/Header/HeaderReducer'
import { budgetData } from '../views/BudgetView/BudgetViewReducers'
export default combineReducers({
  // list all imported reducers here
  tabSelected,
  budgetData
});
