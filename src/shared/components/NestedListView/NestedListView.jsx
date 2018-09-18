import React from 'react';
const NestedListView = (props) =>{

  let {data} = props;
  return (
    <div>
      {Object.keys(data).map(items => {
        let currentCategory = data[items];
        return(<ul>
          {items}
            {currentCategory.map( budgetItems =>{
              return (
                <li>
                  {`Item: ${budgetItems.item} Amount: ${budgetItems.amount}`}
                </li>)
            })}          
      </ul>)})}
    </div>
  );
}
export default NestedListView;