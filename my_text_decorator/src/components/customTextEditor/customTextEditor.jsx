import React from "react";
import { useState } from "react";
import FormatBoldIcon from '@mui/icons-material/FormatBold';


import './customTextEditor.css';
import TextEditorButton from "./textEditorButton";


function CustomTextEditor(props){
/*TODO:
1. сверстать поле для ввода текста (кнопки стилизации жирный, курсив, заголовок, подчеркнутый, зачеркнутый, списки, отступы, ввод на основе textarea) (in progress)
2. реализовать получение выделенного фрагмента
3. для каждой кнопки реализовать оборачивание в соответствующий тег
4. добавить замену переноса строки на <br>
*/
    const [val, setVal] = useState('');

    function onChange(val){
        setVal(val);
        props.onChange(val);
    }

    function onBold(){

    }
    
    function onItalic(){

    }

    function onUnderlined(){

    }

    function onCrossed(){

    }

    function onHeader(){

    }

    function onList(){

    }

    function onOrder(){

    }

    function onAddIndent(){

    }

    function onDeleteIndent(){

    }

    

    return (
        <div className="textEditor">
            <div className="textEditorHeader">
                <TextEditorButton onClick={onBold} style={{float: 'left'}}>
                    <FormatBoldIcon sx={{fontSize: '15px'}}/>
                </TextEditorButton>
            </div>
            <textarea className="editorField" placeholder="Enter your text here and stylize it">

            </textarea>
        </div>
    )
}

export default CustomTextEditor;