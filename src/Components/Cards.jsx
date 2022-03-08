import React from "react";
import  ReactDOM  from "react-dom";
import TinderCard from 'react-tinder-card'
import Card from "./Card";


export default function Cards() {
    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
      }
      
      const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }
      const arr=["Hey","There","Shofiya"];
  return <div className='main_cards flex center'>
  {arr.map(s=>{
    return <Card></Card>
  })}

</div>;
}
