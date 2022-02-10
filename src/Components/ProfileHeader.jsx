import React from 'react';
import header from '../header.png'
import me from '../me.jpg'
import {Avatar} from '@mui/material'
export default function ProfileHeader(props){
    return (
        <header>
            <div class="head_image_div">
                <img src={header} alt="header_image" />
            </div>
            <div>
                <Avatar alt="Remy Sharp" src={me} sx={{width:56,height:56}}/>
                <h1>{props.name}</h1>
            </div>
           
        </header>
    )
}