import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navlink(props) {
  return (
    <div>
        {props.icon}
        <NavLink to={props.link} className={({isActive})=>{
            return isActive?'active':undefined
        }}>{props.linkText}</NavLink>
    </div>
  )
}
