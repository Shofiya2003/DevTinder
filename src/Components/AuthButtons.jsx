import React from "react";


export default function AuthButtons(props) {
  return <div className="auth_button">
      <i>{props.url}</i>
      <p>Login with {props.medium}</p>
      
  </div>;
}
