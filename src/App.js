import React from 'react';

import Game from './game';
import Home from './home'
import './App.css' ;


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const App  =()=>{

     
     
  return(
  
   <Router>
      

  <div>

    <Link to ="/game" >THE GAME BOARD </Link>
    <Link to="/" >LOGIN</Link>
    <Routes>
    <Route path="/"element={<Game/>}/>
    <Route path="/game"element={<Home/>}/>
  </Routes>
  </div>

  </Router>
  
  )
}
export default App