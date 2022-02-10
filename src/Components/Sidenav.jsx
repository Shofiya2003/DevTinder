import React from 'react'

// Material icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChatIcon from '@mui/icons-material/Chat';
import CodeIcon from '@mui/icons-material/Code';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
// Components
import Navlink from './Navlink'
export default function Sidenav() {
  return (
    <div className='sidenav'>
        <Navlink icon={<DashboardIcon/>} linkText="Dashboard" link="dashboard"></Navlink>
        <Navlink icon={<ChatIcon/>} linkText="Chat" link="chat"></Navlink>
        <Navlink icon={<CodeIcon/>} linkText="Hackathons" link="hackathons"></Navlink>
        <Navlink icon={<AccountCircleIcon/>} linkText="Profile" link="/profile"></Navlink>
        <Navlink icon={<FavoriteIcon/>} linkText="Explore" link="cards"></Navlink>
    </div>
  )
}
