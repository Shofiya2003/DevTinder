import React from 'react'
import TinderCard from 'react-tinder-card'
import { Typography } from '@mui/material'
import ProfileAvatar from './Avatar'
import SkillBox from './SkillBox'
import Heading from './Heading'
import Intro from './Intro'
import { Button } from '@mui/material'
const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
  }
  
  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  }
export default function Card() {
    const skills=["Backend","Frontend","CSS","MongoDB"];
  return (
    <TinderCard className='card_second_div' onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>
      <div className=''>
        <div className='card flex_col'>
            <div className='intro flex_col'>
                    <ProfileAvatar></ProfileAvatar>
                    <Intro name="Shofiya Bootwala" username="Bootwala Shofiya"></Intro>
                    <div className='flex' style={{'marginBottom':'10px'}}>
                        <Button variant='outlined' id='outlined_button' style={{'marginRight':'5px'}}>Know More</Button>
                        <Button variant='filled' className='login_page_button'>Follow</Button>
                    </div>
                   
                  
                   
            </div>
           
            
           
            <div className='flex skills'>
            {skills.map(skill=>{
                    return <SkillBox skill={skill} ></SkillBox>
                })}
            </div>
               

            
            
        </div>
      </div>
    </TinderCard>
  )
}
