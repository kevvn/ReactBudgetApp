export function tabSelected(state = {}, action) {
    switch (action.type) {
      case 'MAIN_PAGE_TAB_SELECTED':
        return action.tabValue;
  
      default:
        return state;
    }
  }