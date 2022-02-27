import './App.css'
import React from 'react';
import  ReactDOM  from 'react-dom';
import {Routes,Route} from 'react-router-dom';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Cards from './Components/Cards'
function App() {
  return (
  <Routes>
      <Route path='/signup' element={<Login/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/cards' element={<Cards/>}></Route>
  </Routes>
     
   
  );
}

export default App;
