import React from 'react';

import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


export default class NestedListView extends React.Component {
  constructor(){
    super();
    this.state = {open : false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(state => ({ open: !state.open }));
  };

  render() {

      let {data} = this.props;
    return (
    <div>
        {Object.keys(data).map(items => {
        let currentCategory = data[items];
        return(<List
          component="nav"
          subheader={<ListSubheader component="div">{items}</ListSubheader>}
        >
            {currentCategory.map( budgetItems =>{
                console.log(currentCategory)
                console.log(budgetItems)
                return (<ListItem button onClick={this.handleClick}>
            <ListItemText inset primary={`Item: ${budgetItems.item} Amount: ${budgetItems.amount}`} />
            {/* {this.state.open ? <ExpandLess /> : <ExpandMore />} */}
          </ListItem>)
          {/* <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
          <ListItem button>
          <ListItemText inset primary="Starred" />
          </ListItem>
          </List>
        </Collapse> */}
    }
        )}
        </List>)})}
      </div>
    );
  }
}
