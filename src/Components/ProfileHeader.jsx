import React from 'react';
import header from '../image.jpg'
import ProfileAvatar from './Avatar';

export default function ProfileHeader(props){
    return (
        <header className='flex_col'>
            <div class="head_image_div">
                <img src={header} alt="header_image" />
            </div>
            <main className='flex'>
                <ProfileAvatar></ProfileAvatar>
            </main>
            
           
        </header>
    )
}