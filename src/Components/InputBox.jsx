import React,{useState} from "react";

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function InputBox(props) {
    const [isVisible,setisVisible]=useState(false);
  return <div className="login_boxes input flex">
      
      <input name={props.name} type={props.type} placeholder={props.placeholder} onChange={(e)=>{props.getUserInput(e)}}/>
      {/* {props.type==="password" && ((isVisible && <VisibilityIcon/>) || ((!isVisible) && <VisibilityOffIcon/>))} */}
     
  </div>;
}
