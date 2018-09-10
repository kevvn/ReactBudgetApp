import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import MenuIcon from '@material-ui/icons/Menu';

import './Header.scss';

const Header = (props) => {

  
  return (
  <div styleName="header-wrapper">
    {/* <AppBar position='sticky'> */}
      <BottomNavigation showLabels value={props.tabSelected} > 
        <BottomNavigationAction onClick={ () => props.selectTab(0)} label="Budget" style={{flexBasis:'50%',maxWidth:'50%'}}/>
        <BottomNavigationAction onClick={ () => props.selectTab(1)} label="Spend" style={{flexBasis:'50%',maxWidth:'50%'}}/>
      </BottomNavigation>
    {/* </AppBar> */}
  </div>
)};

export default Header;
