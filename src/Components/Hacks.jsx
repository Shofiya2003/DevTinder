import React from 'react'
import { Typography } from '@mui/material'
// Components
import Hack from './Hack'
import ExtendDiv from './ExtendDiv'

export default function Hacks() {
  return (
    <div className='ab' id='transparent_div'>
        <div className='projects_div'>
          <Typography className='section_heading' gutterBottom variant="h5" component="div">
            Hacks
          </Typography>
          <div className='projects flex_col'>
            <Hack></Hack>
            <Hack></Hack>
            <Hack></Hack>
          </div>

        </div>
        <ExtendDiv></ExtendDiv>
    </div>
  )
}
