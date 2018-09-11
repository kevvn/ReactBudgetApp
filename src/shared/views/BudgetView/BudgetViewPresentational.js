import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import NestedListView from '../../components/NestedListView';
class BudgetView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rows: {},
      open: false,
      selectedCategory: '',
      inputtedItem: ''
    }
    this.addToBudget = this.addToBudget.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }
  addToBudget(category,item,amount) {
    let thing = {item, amount};
    let {rows} = this.state;
    if(!rows[category]){
      rows = Object.assign({[category]: []},rows)
    }
    console.log(rows)
    rows[category].push(thing)
    localStorage.setItem('rows',JSON.stringify(rows));
    this.setState({rows});
  }

  // handleChange(name){
  //   event => {
  //     this.setState({
  //       [name]: event.target.value
  //     })
  //   }
  // }

  componentDidMount(){
    this.setState({rows: JSON.parse(localStorage.getItem('rows')) || [] });
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
    console.log(this.state)
    return(
      <div>
        BudgetView
        <NestedListView data={this.state.rows} />

        <Button onClick={()=>this.setState({open: true})} variant="fab" color="primary" aria-label="Add">
          <AddIcon />
        </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={() => {this.setState({open: false})}}
        >
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
          }}>
            <Card style={{backgroundColor: '#E0E0E0'}}>
              <div style={{margin: '.125em'}}>
              <TextField
                id="select-category"
                select
                label="Category"
                style={{
                  marginLeft: 4,
                  marginRight: 4,
                  width: 200,
                }}
                value={this.state.selectedCategory}
                onChange={(e) => {this.setState({selectedCategory: e.target.value})}}
                SelectProps={{
                  MenuProps: {
                    style: {width: 200},
                  },
                }}
                helperText="Please select a category"
                margin="normal"
              >
                {[{label: 'Groceries',value: 'Groceries'},{label: 'Miscelaneous',value: 'Miscelaneous'}].map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
                
              </TextField>
              <TextField
                id="item"
                label="Item"
                value={this.state.inputtedItem}
                onChange={(e) => this.setState({inputtedItem: e.target.value})}
                type="string"
                
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="number"
                label="Budgeted Amount"
                value={this.state.amount}
                onChange={(e) => this.setState({amount: e.target.value})}
                type="number"
                
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Button variant='contained' onClick={() => this.addToBudget(this.state.selectedCategory,this.state.inputtedItem,this.state.amount)} fullWidth={true} color='primary'>Done</Button>
              </div>
            </Card>
          </div>
        </Modal>
      </div>
    )
  }
}

export default BudgetView;