import React from 'react'
import {Avatar} from '@mui/material'
import me from '../me.jpg'

export default function ProfileAvatar() {
  return (
    <div className='avatar flex'>
         <Avatar alt="Remy Sharp" src={me} sx={{width:120,height:120}}/>           
    </div>
  )
}
