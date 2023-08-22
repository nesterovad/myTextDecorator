import React from "react";

function TextEditorButton(props){
    return (
        <div className="editorButton" onClick={props.onClick}>
            {props.children}
        </div>
    )
}

export default TextEditorButton;