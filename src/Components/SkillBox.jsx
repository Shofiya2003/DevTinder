import React from 'react'
import {Button} from '@mui/material'
export default function SkillBox(props) {
  return (
    <Button id='skillbox' variant="contained" disabled>{props.skill}</Button>
    
  )
}
