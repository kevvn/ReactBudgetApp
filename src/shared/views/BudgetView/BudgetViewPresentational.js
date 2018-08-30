import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

class BudgetView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rows: [],
      open: false
    }
    this.addToBudget = this.addToBudget.bind(this);
  }
  addToBudget(category,item,amount) {
    let newRow = this.state.rows;
    newRow.push({item,amount})
    this.setState({rows: newRow})
  }

  componentDidMount(){
    var rows = [];
    var that = this;
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
        {this.state.rows.map((element)=>{
          return (
            <div> Item {element.item} Amount {element.amount} </div>
          )
        })}
        <Button onClick={()=>this.setState({open: true})} variant="fab" color="primary" aria-label="Add">
          <AddIcon />
        </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={() => {this.setState({open: false})}}
        >
          <div style={getModalStyle()} style={{
    position: 'absolute',
    width: 50,
    backgroundColor: 'white',
    boxShadow: 5,
    padding: 4,
  }}>
            Text
          </div>
        </Modal>
      </div>
    )
  }
}

export default BudgetView;