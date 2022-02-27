import React from 'react'

export default function ExtendDiv(props) {
  return (
    <div className='extend_div flex center' id='transparent_div'>
        <p>See All {props.number} {props.section}</p>
    </div>
  )
}
