import React,{Component} from 'react';

import './styles.css';

import Header from './components/Header';

import Routes from './routes';

import Main from './pages/main';

const App = () =>(

  <div className="app">
    <Header/>
    <Routes/>
  </div>
 
   
);

export default App;
