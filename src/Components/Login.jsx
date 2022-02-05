import React from "react";
import AuthButtons from "./AuthButtons";
import InputBox from "./InputBox";

export default function Login() {
  return <div className="login_div">
      <h1 className="main_heading">
          Find Your Simran
      </h1>
      <div className="sign_up">Sign Up</div>
      <h1 className="heading">Login to Your Account</h1>
      <p className="tagline">Where Developers meet Developers</p>
    
    <AuthButtons medium="Google"></AuthButtons>
    <AuthButtons medium="Github"></AuthButtons>
    <AuthButtons medium="LinkedIn"></AuthButtons>
    <InputBox type="text" placeholder="Username/Email"/>
    <InputBox type="password" placeholder="Password"/>
  </div>;
}
