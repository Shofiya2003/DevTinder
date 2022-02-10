import './App.css'
import React from 'react';
import  ReactDOM  from 'react-dom';
import {Routes,Route} from 'react-router-dom';
import Login from './Components/Login';
import Profile from './Components/Profile';

function App() {
  return (
  <Routes>
      <Route path='/signup' element={<Login/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
  </Routes>
     
   
  );
}

export default App;
