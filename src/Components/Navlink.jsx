import React from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
export default function Navlink(props) {
  return (
    <NavLink to={props.link} className={({isActive})=>{
      return isActive?'active link_div flex':'link_div flex'
  }}>
      <div className='flex'>
        {props.icon}
        <p className='link_text'>{props.linkText}</p>
      </div>
    </NavLink>
  )
}
