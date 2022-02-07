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
      <div className="sign_up flex login_page_button"><p>Sign Up</p></div>
    </div>
     <div className="flex_col">
      <h1 className="heading">Login to Your Account</h1>
      <p className="tagline">Where Developers meet Developers</p>
     </div>
      
    <div className="login_body flex">
      <div className="input_section flex_col center">
        <InputBox type="text" placeholder="Username/Email"/>
        <InputBox type="password" placeholder="Password"/>
        <div className="login flex login_page_button">
          <p>Login to Your Account</p>
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
