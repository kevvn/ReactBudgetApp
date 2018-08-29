import { combineReducers } from 'redux';
// import reducers from pages here
import { dataFetch, dataIsLoading, dataHasErrored, sortData } from '../views/home/homeReducers';

export default combineReducers({
  // list all imported reducers here
  dataFetch,
  dataIsLoading,
  dataHasErrored,
  sortData,
});
