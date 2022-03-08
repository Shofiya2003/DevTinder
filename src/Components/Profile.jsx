import React, { useState,useEffect } from 'react'
import {useLocation, useParams} from 'react-router-dom'
import axios from 'axios'
//Components
import Sidenav from './Sidenav'
import ProfileHeader from './ProfileHeader'
import ProfileBody from './ProfileBody'
import Intro from './Intro'
import About from './About'
import Projects from './Projects'
import Hacks from './Hacks'
export default function Profile() {
  let {id}=useParams();
  const [data,setData]=useState();


  useEffect(()=>{
   
    
    axios.get(`http://localhost:5000/api/developer/${id}`).then(data=>{
      console.log(data);
      setData(data.data.data);
    }).catch(err=>{
      console.log(err);
    })
    
  },[])
  return (

    <>
    {data===undefined?<h1>Loading...</h1>:<div className='profile flex'>
       
    <Sidenav></Sidenav>
  
    
    <main className='main_profile flex_col'>
        <ProfileHeader name={data.name}></ProfileHeader>
        <Intro name={data.name} socialLinks={data.socialLinks}></Intro>
        <About text={data.bio} limit='3'></About>
        <Projects></Projects>
        <ProfileBody></ProfileBody>
        <Hacks></Hacks>
    </main>
    
</div>}

</>
    
  )
}
