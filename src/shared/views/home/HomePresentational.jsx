import React from 'react';
import './home.scss';
import BudgetView from '../BudgetView';
import SpendView from '../SpendView'
const Home = (props) => (
  <div id="home-wrapper">
    {(props.tabSelected === 0)
    ? <BudgetView /> 
    : <SpendView />}
  </div>
);

export default Home;
