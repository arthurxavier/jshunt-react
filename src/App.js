import React, { Component } from "react";
import Routes from './routes';

import './stylesDefault.css'

import Header from './components/Header/index';
import Main from './pages/main';
const App = () =>(
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;
