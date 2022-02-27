import React, { useEffect } from 'react'
import {useLocation} from 'react-router-dom'

//Components
import Sidenav from './Sidenav'
import ProfileHeader from './ProfileHeader'
import ProfileBody from './ProfileBody'
import Intro from './Intro'
import About from './About'
import Projects from './Projects'
import Hacks from './Hacks'
export default function Profile(props) {
  const location=useLocation();
  // useEffect(()=>{
  //   console.log(location.state.username);
  // })
  return (
    
    <div className='profile flex'>
      
        <Sidenav></Sidenav>
      
        
        <main className='main_profile flex_col'>
            <ProfileHeader name="Shofiya Bootwala"></ProfileHeader>
            <Intro name="Shofiya Bootwala" username="Bootwala Shofiya"></Intro>
            <About text='skjdfk' limit='3'></About>
            <Projects></Projects>
            <ProfileBody></ProfileBody>
            <Hacks></Hacks>
        </main>
        
    </div>
  )
}
