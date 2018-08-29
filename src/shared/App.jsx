import React from 'react';
import Router from './Router';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.scss';

const App = () => (
  <div id="App">
    {/* Add Header/footer component that should persist for all views outside the router */}
    <Header />
    <Router />
    <Footer />
  </div>
);

export default App;
