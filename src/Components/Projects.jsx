import React from 'react'

import { Typography } from '@mui/material'

// Componenets
import Project from './Project'
import ExtendDiv from './ExtendDiv'
export default function Projects() {
  return (
      <div className='flex_col ab' id='transparent_div'>
        <div className='projects_div'>
          <Typography className='section_heading' gutterBottom variant="h5" component="div">
            Projects
          </Typography>
          <div className='projects flex'>
              <Project pname='Project 1' description='lotrmjdf'></Project>
              <Project pname='Project 1' description='lotrmjdf'></Project>
              <Project pname='Project 1' description='lotrmjdf'></Project>
          </div>
        </div>
      <ExtendDiv></ExtendDiv>

      </div>
    
  )
}
