import React from 'react'
import Sidenav from './Sidenav'
import ProfileHeader from './ProfileHeader'
import ProfileBody from './ProfileBody'
export default function Profile() {
  return (
    <div className='profile flex'>
        
        <Sidenav></Sidenav>
        <main className='main_profile'>
            <ProfileHeader></ProfileHeader>
            <ProfileBody></ProfileBody>
        </main>
        
    </div>
  )
}
