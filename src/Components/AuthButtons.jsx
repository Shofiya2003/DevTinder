import React from "react";


export default function AuthButtons(props) {
  return <div className="auth_button login_boxes flex">
      {props.icon}
      <p>Login with {props.medium}</p>
      
  </div>;
}
