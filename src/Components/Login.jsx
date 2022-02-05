import React from "react";

// React Components
import AuthButtons from "./AuthButtons";
import InputBox from "./InputBox";

// Material UI icons
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function Login() {
  return <div className="login_div flex_col">
    <div className="top_elements flex">
      <h1 className="main_heading">
          Find Your Simran.
      </h1>
      <div className="sign_up flex"><p>Sign Up</p></div>
    </div>
     
      <h1 className="heading">Login to Your Account</h1>
      <p className="tagline">Where Developers meet Developers</p>
    
    <AuthButtons medium="Google" icon={<GoogleIcon/>}></AuthButtons>
    <AuthButtons medium="Github" icon={<GitHubIcon/>}></AuthButtons>
    <AuthButtons medium="LinkedIn" icon={<LinkedInIcon/>}></AuthButtons>
    <InputBox type="text" placeholder="Username/Email"/>
    <InputBox type="password" placeholder="Password"/>

    <div>
      <p>Login to Your Account</p>
    </div>

    <p>Forgot Password</p>
  </div>;
}
