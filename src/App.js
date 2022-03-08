import './App.css'
import React from 'react';
import  ReactDOM  from 'react-dom';
import {Routes,Route} from 'react-router-dom';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Cards from './Components/Cards'
import Onboard from './Components/Onboard'
import Change from './Components/Change';
function App() {
  return (
  <Routes>
      <Route path='/signup' element={<Login/>}></Route>
      <Route path='/profile/:id' element={<Profile/>}></Route>
      <Route path='/cards' element={<Cards/>}></Route>
      <Route path='/change-password' element={<Change/>}></Route>
      <Route path='/onboarding' element={<Onboard/>}></Route>
  </Routes>
     
   
  );
}

export default App;
