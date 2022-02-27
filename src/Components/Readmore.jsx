import React,{useState} from 'react'
import { Typography } from '@mui/material';

export default function Readmore(props) {
  const [readMore, setreadMore] = useState(false);
  const displayData=props.text.substring(0,11);
  return (

    <div>
       <Typography variant="body2">
          
          {readMore?props.text:displayData}
         <p className='read_more_link' onClick={()=>{
        setreadMore((prev)=>{
          return !prev;
          });
      }}>
        {readMore?'Read Less':'Read More'} 
      </p>
        </Typography>
     
      
    </div>
    
  )
}
