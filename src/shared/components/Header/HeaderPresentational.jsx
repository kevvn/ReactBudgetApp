import React from 'react';
import './Header.scss';

const Header = (props) => {

  return (
  <div styleName="header-wrapper">
    <div> 
      <input style={{width: '50%'}} type="button" onClick={ () => props.selectTab(0)} value="Budget"/>
      <input style={{width: '50%'}} type="button" onClick={ () => props.selectTab(1)} value="Spend"/>
    </div>
  </div>
)};

export default Header;
