import React from 'react'

//Components
import Transparentdiv from './Transparentdiv'

export default function About(props) {
  return (
    <div className='ab'>
        <Transparentdiv text={props.text} 
        limit='10'/>

    </div>
  )
}
