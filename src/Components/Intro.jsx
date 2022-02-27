import React from 'react'

//Components
import SocialLinks from './SocialLinks'

export default function Intro(props) {
  return (
      
    <div className='about flex'>
        <div className='flex_col'>
            <h1 className='main_heading'>{props.name}</h1>
            <p className='username'>@{props.username}</p>
        </div>
      
        <SocialLinks></SocialLinks>
       
    </div>

   

  )
}
