import React,{useState} from 'react'

import InputBox from './InputBox'
import SkillBox from './SkillBox';
import  { Navigate,Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import Heading from './Heading';
export default function Onboard() {
  let navigate=useNavigate();
  const [fullname,setName]=useState('');
  const [skills,setSkills]=useState([]);
  const [skill,setSkill]=useState('');
  const [skillError,setSkillError]=useState(false);
  const [info,setInfo]=useState({});
  const [socialLinks,setsocialLinks]=useState({});
  const getUserInput=(e)=>{
    const {name,value,label}=e.target;
    console.log(name);
    if(name==='skill'){
      setSkillError(false);
      setSkill(value);
    }
    else if(name==='instagram' || name==='twitter' || name==='github' || name==='linkedin'){
      
      setsocialLinks(prev=>{
        return {
          ...prev,
          [name]:value
        }
      });
    }

    else{
      setInfo(prev=>{
        return {
          ...prev,
          [name]:value
        }
      });
    }
  }

  const addSkill=()=>{
  
    if(skill===''){
      setSkillError(true);
      return;
    }

    setSkills(prev=>{
      prev.push(skill);
      return prev;
    });
    setSkill('');
  }

  const submit=()=>{
    const finalInfo={
      userId:localStorage.getItem('userid'),
      ...info,
      socialLinks,
      skills
    }

    axios.post('http://localhost:5000/api/developer',finalInfo).then(response=>{
      if(response.status==='ok'){
        navigate('/profile');
      }
    }).catch(err=>{
      console.log(err);
    })
    console.log(finalInfo);
    
  }
  return (
    <div  className='form_main flex'>
      <div className='form_side'>
        <Heading></Heading>
       
      </div>
     
     <div id='detail_form' className='flex'>
     
     <div className='detail_form flex_col'>
      
      <TextField id="outlined-basic" onChange={getUserInput} name='name'  label="Name" variant="filled" size='normal' margin='normal'/>
      <TextField id="outlined-basic" onChange={getUserInput} name='instituition' label="University" variant="filled" size='normal' margin='normal'/>
      <TextField id="outlined-basic" onChange={getUserInput} name='batch' label="Year of Graduation" variant="filled" size='normal' margin='normal'/>
      <TextField id="outlined-multiline-flexible" name='bio' onChange={getUserInput} rows={4} col={4} multiline label="Bio" variant="filled" margin='normal'/>
      
      {/* <InputBox name="name" type="text" placeholder="Name"></InputBox>
      <InputBox name="instituition" type="text" placeholder="University/College"></InputBox>
      <InputBox name="yog" type="number" placeholder="Year of Graduation"></InputBox>
      
      <InputBox name="name" type="text" placeholder="Name"></InputBox> */}
   </div>

   <div className='detail_form flex_col'>
      
      <TextField id="outlined-basic"  onChange={getUserInput} name='linkedin' label="LinkedIn" variant="filled" size='normal' margin='normal'/>
      <TextField id="outlined-basic" onChange={getUserInput} name='github' label="Github" variant="filled" size='normal' margin='normal'/>
      <TextField id="outlined-basic" onChange={getUserInput} name='twitter' label="Twitter" variant="filled" size='normal' margin='normal'/>
      <TextField id="outlined-basic" onChange={getUserInput} name='instagram'  label="Instagram" variant="filled" size='normal' margin='normal'/>
      <div className='flex_col'>
        {!skillError?
        <TextField onChange={getUserInput} value={skill} id="outlined-basic" helperText='Add a skill' name='skill' label="Skill" variant="filled" size='normal' margin='normal'/>:
        <TextField error id="outlined-error" onChange={getUserInput} name='skill' helperText='Add a skill'  label="Error" variant="filled" size='normal' margin='normal'/>
      }
        
        <Button variant='outlined' id='outlined_button' style={{'marginRight':'5px'}} onClick={addSkill}>Add</Button>
      </div>
      <div className='flex skills'>

        {skills.map(skill=>{
            return <SkillBox skill={skill} ></SkillBox>
        })}
      </div>
      <Button variant='filled' className='login_page_button' style={{'width':'103px'}} onClick={submit}>Let's Go</Button>
     
      
     
   </div>

     </div>
      
    </div>
    
  )
}
