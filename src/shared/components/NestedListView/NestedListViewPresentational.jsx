import React from 'react';
const NestedListView = (props) =>{

  let {budgetData} = props;
  console.log(props)
  if(budgetData === undefined){
    budgetData = [];
  }
  return (
    <div>
      {Object.keys(budgetData).map(items => {
        let currentCategory = budgetData[items];
        let amount = 0;
        return(<ul>
          {items}
          
            { 
              currentCategory.map( budgetItems =>{
                amount += parseInt(budgetItems.amount,10);
              return (
                <li>
                  {`Item: ${budgetItems.item} Amount: ${budgetItems.amount}`}
                </li>)
            })}
            {`Total ${amount}`}          
      </ul>)})}
    </div>
  );
}
export default NestedListView;