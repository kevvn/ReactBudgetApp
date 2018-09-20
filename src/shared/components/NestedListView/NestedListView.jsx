import React from 'react';
const NestedListView = (props) =>{

  let {data} = props;
  return (
    <div>
      {Object.keys(data).map(items => {
        let currentCategory = data[items];
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