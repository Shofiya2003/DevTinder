import React,{useState} from 'react'
import axios from 'axios'
import InputBox from './InputBox'


export default function Change() {
    const [password,setPassword]=useState('');
    function getUserInput(e){
        const {name,value}=e.target;
        console.log(value);
        
        if(name==="password"){
          setPassword(value);
        }
      }

      const changePassword=()=>{
        axios.post('http://localhost:5000/api/changePassword',{
            token:localStorage.getItem('token'),
            password:password
          },{
            'Content-type':`application/json`,
          }).then(message=>{
            if(message.data.status==='ok'){
              console.log(message);
            }
          }).catch(err=>{
            console.log(err);
          })
      }
  return (
      <div>
        <InputBox type="password" name="password" placeholder="Password" getUserInput={getUserInput}/>
        <div className="login flex login_page_button" onClick={changePassword}>
            Submit
        </div>
      </div>
    
  )
}
