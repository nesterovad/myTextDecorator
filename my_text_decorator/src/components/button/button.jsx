import React from "react";

import './button.css';

function Button(props){

    if(props.theme === 'light'){
        return (
            <div className="lightButton" onClick={props.action}>
                <p className="label">{props.text}</p>
            </div>
        )
    }else{
        return (
            <div className="darkButton" onClick={props.action}>
                <p className="label">{props.text}</p>
            </div>
        )
    }
    
}

export default Button;