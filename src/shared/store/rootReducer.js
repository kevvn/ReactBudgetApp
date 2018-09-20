import { combineReducers } from 'redux';
// import reducers from pages here
import { tabSelected } from '../components/Header/HeaderReducer'
import { budgetData } from '../views/BudgetView/budgetViewReducers'
export default combineReducers({
  // list all imported reducers here
  tabSelected,
  budgetData
});
