import React,{useState} from "react";
import axios from 'axios'
import  { Navigate,Link,useNavigate } from 'react-router-dom'
// React Components
import AuthButtons from "./AuthButtons";
import InputBox from "./InputBox";
import Heading from "./Heading";


// Material UI icons
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function Login() {
  let navigate=useNavigate();
  const [username, setusername] = useState("");
  const [password, setPassword]=useState("");
  const [isSigningUp,setIsSigningUp]=useState(false);
  function getUserInput(e){
    const {name,value}=e.target;
    console.log(value);
    if(name==="username"){
      setusername(value);
    }

    if(name==="password"){
      setPassword(value);
    }
  }

  function sendLogInfo(){
    
    if(isSigningUp){
      console.log("hey");
      axios.post('http://localhost:5000/api/signup',{
        username:username,
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
    else{
        console.log("d");
        axios.post('http://localhost:5000/api/login',{
        username:username,
        password:password
      },{
        'Content-type':`application/json`,
      }).then(message=>{
        console.log(message);
        if(message.data.status==='ok'){
          const {data,token}=message.data;
          console.log(data);
          localStorage.setItem('userid',data);
          localStorage.setItem('token',token);
          navigate(`/profile/${data}`);
        }}).catch(err=>{
        console.log(err);
      })
    }
    
  }

  function signUp(){
      setIsSigningUp((prev)=>{
        return !prev;
      })
  }
  return <div className="login_div flex_col">
    <div className="top_elements flex">
    <Heading/>
      <div className="sign_up flex login_page_button" onClick={signUp}><p>{isSigningUp?`Login`:`Sign up`}</p></div>
    </div>
     <div className="flex_col">
      <h1 className="heading"> {!isSigningUp?`Login to Your Account`:`Create Account`}</h1>
      <p className="tagline">Where Developers meet Developers</p>
     </div>
      
    <div className="login_body flex">
      <div className="input_section flex_col center">
        <InputBox type="text" name="username" placeholder="Username/Email" getUserInput={getUserInput}/>
        <InputBox type="password" name="password" placeholder="Password" getUserInput={getUserInput}/>
        <div className="login flex login_page_button" onClick={sendLogInfo}>
          <p>{!isSigningUp?`Login to Your Account`:`Create Account`}</p>
        </div>
      </div>
      <p>/</p>
      <div className="auth_buttons  flex_col center">
        <AuthButtons medium="Google" icon={<GoogleIcon/>}></AuthButtons>
        <AuthButtons medium="Github" icon={<GitHubIcon/>}></AuthButtons>
        <AuthButtons medium="LinkedIn" icon={<LinkedInIcon/>}></AuthButtons>
    
      </div>
    </div>
   

   

    <p className="forgot_text">Forgot Password</p>
  </div>;
}
