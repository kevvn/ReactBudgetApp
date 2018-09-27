import React from 'react';

import NestedListViewContainer from '../../components/NestedListView';
class BudgetView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      selectedCategory: 'Groceries',
      inputtedItem: '',
      amount: 0
    }
    // this.handleChange = this.handleChange.bind(this);

  }


  componentDidMount(){
    if(typeof window !== 'undefined'){
      

    //   var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

    //   // Open (or create) the database
    //   var open = indexedDB.open("MyDatabase", 1);

    //   // Create the schema
    //   open.onupgradeneeded = function() {
    //     var db = open.result;
    //     var store = db.createObjectStore("MyAppStore", {keyPath: "id"});
    //   };

    //   open.onsuccess = function() {
    //     // Start a new transaction
    //     var db = open.result;
    //     var tx = db.transaction("MyAppStore", "readwrite");
    //     var store = tx.objectStore("MyAppStore");
    //     // var index = store.index("BudgetIndex");

    //     // Add some data
    //     store.put({id: 1, budget: {category: "Groceries", title: "Apples",limit: 20}});
    //     store.put({id: 2, budget: {category: "Groceries", title: "Chicken",limit: 40}});
    //     // Close the db when the transaction is done

    //     var getCategory = store.getAll();
    //     getCategory.onsuccess = () =>{
    //       getCategory.result.forEach(element => {
    //         console.log(element)
    //         rows.push(
    //           <div>
    //             {"Item: " + element.budget.title + " Budget: " + element.budget.limit } 
    //           </div>)
    //       });
    //       that.setState({rows})
    //     }
    //     tx.oncomplete = function() {
    //       db.close();
    //     };
    //   }
    }

  }
  render(){
    const { addToBudget } = this.props;
    console.log(this.state)
    return(
      <div>
        BudgetView
        <NestedListViewContainer />

        <button onClick={()=>this.setState({open: true})}>  
          +
        </button>
        {(this.state.open) ?
        <div
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            height: '200px',
            width: '300px',
            margin: '-100px 0 0 -150px'
          }}>
            <div style={{backgroundColor: '#E0E0E0'}}>
              <div >
                <form >
                  <select
                    id="select-category"
                    label="Category"
                    value={this.state.selectedCategory}
                    onChange={(e)=>this.setState({selectedCategory: e.target.value})}
                  >
                    {[{label: 'Groceries',value: 'Groceries'},{label: 'Miscellaneous',value: 'Miscellaneous'}].map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                    
                  </select>
                  <input
                    id="item"
                    label="Item"
                    value={this.state.inputtedItem}
                    onChange={(e) => this.setState({inputtedItem: e.target.value})}
                    type="text"
                    placeholder={'Item'}
                  />
                  <input
                    id="number"
                    label="Budgeted Amount"
                    value={this.state.amount}
                    placeholder={'Amount'}
                    onChange={(e) => this.setState({amount: e.target.value})}
                    type="number"
                  />
                  <input type={'button'} value={'Submit'} onClick={() => {this.setState({open: false}); addToBudget(this.state.selectedCategory,this.state.inputtedItem,this.state.amount)}}/>
                </form>
              </div>
            </div>
          </div>
        </div> : null}
      </div>
    )
  }
}

export default BudgetView;