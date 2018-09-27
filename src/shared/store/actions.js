// Add all redux actions here

export const chooseTab = tabValue => ({
    type: 'MAIN_PAGE_TAB_SELECTED',
    tabValue,
  });
  

export const addToBudget = (category,item,amount) =>{
  
  let valid = true;

  console.log("addToBudget",category,item,amount)
  valid = (typeof amount === 'number');
  valid = (typeof item === 'string');
  valid = (typeof category === 'string');
  if(valid){
    return {
      type: 'SUBMIT_BUDGET_DATA_SUCCESS',
      data: {[category]: [{item, amount}]}
    };
  }

  return {
    type: 'SUBMIT_BUDGET_DATA_FAIL',
    rows: []
  }
}