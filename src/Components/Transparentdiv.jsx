import React,{useState} from 'react'
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Readmore from './Readmore';
import Typography from '@mui/material/Typography';
export default function Transparentdiv(props) {
  
  return (
    <Card id='transparent_div'>
      <CardContent>
        <Typography className='section_heading' gutterBottom variant="h5" component="div">
          About
        </Typography>
        <Readmore text={props.text}></Readmore>
      </CardContent>
    </Card>
  )
}
