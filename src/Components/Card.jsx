import React from "react";
import  ReactDOM  from "react-dom";
import TinderCard from 'react-tinder-card'


export default function Card() {
    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
      }
      
      const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }
      const arr=["Hey","There","Shofiya"];
  return <div style={{position:"relative"}}>
    {arr.map(s=>{
      return <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>
      <div style={{margin:"30px",position:"absolute",top:"0",left:"0"}}>
        <h1>{s}</h1>
      </div>
    </TinderCard>
    })}

  </div>;
}
