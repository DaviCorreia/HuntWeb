import React,{Component} from 'react';

import './styles.css';

import Main from './pages/main';

import Header from './components/Header';

const App = () =>(

  <div className="app">
    <Header/>
    <Main/>
  </div>
 
   
);

export default App;
