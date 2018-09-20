export function budgetData(state = {}, action) {
    console.log('Budget Data: ',state)
    switch (action.type) {
      case 'SUBMIT_BUDGET_DATA_SUCCESS':
        console.log('Action: ',action)
        return action.data;
  
      default:
        return state;
    }
  }