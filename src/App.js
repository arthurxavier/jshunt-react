import React, { Component } from "react";

import './stylesDefault.css'

import Header from './components/Header/index';
import Main from './pages/main';
const App = () =>(
  <div className="App">
    <Header />
    <Main />
  </div>
);

export default App;
