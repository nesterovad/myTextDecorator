import React from "react";
import { useState } from "react";
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatStrikethroughIcon from '@mui/icons-material/FormatStrikethrough';
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';

import './customTextEditor.css';
import TextEditorButton from "./textEditorButton";

import * as Tags from "../../consts";


function CustomTextEditor(props){
/*TODO:
1. сверстать поле для ввода текста (кнопки стилизации жирный, курсив, заголовок, подчеркнутый, зачеркнутый, списки, отступы, ввод на основе textarea) (done)
2. реализовать получение выделенного фрагмента
3. для каждой кнопки реализовать оборачивание в соответствующий тег
4. добавить замену переноса строки на <br>
*/
    const [val, setVal] = useState('');
    const myref = React.createRef();

    function getSelectedText(){
        let textval = myref.current;
        let start = textval.selectionStart;
        let end = textval.selectionEnd;
       return [start, end];
    }

    function onChange(e){
        setVal(e.target.value);
        props.onChange(val);
    }

    function onBold(){
        let [start, end] = getSelectedText();
        let editedText = val.substring(0, start) + Tags.boldOpen + val.substring(start, end) + Tags.boldClose + val.substring(end);
        setVal(editedText);
        props.onChange(editedText);
        
    }
    
    function onItalic(){
        let [start, end] = getSelectedText();
        let editedText = val.substring(0, start) + Tags.italicOpen + val.substring(start, end) + Tags.italicClose + val.substring(end);
        setVal(editedText);
        props.onChange(editedText);
    }

    function onUnderlined(){
        let [start, end] = getSelectedText();
        let editedText = val.substring(0, start) + Tags.underlineOpen + val.substring(start, end) + Tags.underlineClose + val.substring(end);
        setVal(editedText);
        props.onChange(editedText);
    }

    function onCrossed(){
        let [start, end] = getSelectedText();
        let editedText = val.substring(0, start) + Tags.crossOpen + val.substring(start, end) + Tags.crossClose + val.substring(end);
        setVal(editedText);
        props.onChange(editedText);
    }

    function onHeader(){
        let [start, end] = getSelectedText();
        let editedText = val.substring(0, start) + Tags.headerOpen + val.substring(start, end) + Tags.headerClose + val.substring(end);
        setVal(editedText);
        props.onChange(editedText);

    }

    function onCenter(){

    }

    function onRight(){

    }

    function onLeft(){

    }

    function onList(){

    }

    function onOrder(){

    }

    function onAddIndent(){

    }

    function onDeleteIndent(){

    }

    function renderThemedEditor(){
        if (props.theme === 'light') {
            return renderLidhtEditor();
        }else return renderDarkEditor();
    }

    function renderLidhtEditor(){
        return (
            <div className="textEditorLight">
                <div className="textEditorHeader">
                    <TextEditorButton onClick={onBold} >
                        <FormatBoldIcon sx={{fontSize: '30px'}} htmlColor="#E8E8E8"/>
                    </TextEditorButton>

                    <TextEditorButton onClick={onItalic} >
                        <FormatItalicIcon sx={{fontSize: '30px'}} htmlColor="#E8E8E8"/>
                    </TextEditorButton>

                    <TextEditorButton onClick={onUnderlined} >
                        <FormatUnderlinedIcon sx={{fontSize: '30px'}} htmlColor="#E8E8E8"/>
                    </TextEditorButton>

                    <TextEditorButton onClick={onCrossed} >
                        <FormatStrikethroughIcon sx={{fontSize: '30px'}} htmlColor="#E8E8E8"/>
                    </TextEditorButton>

                    <TextEditorButton onClick={onHeader} >
                        <FormatSizeIcon sx={{fontSize: '30px'}} htmlColor="#E8E8E8"/>
                    </TextEditorButton>

                    <TextEditorButton onClick={onList} >
                        <FormatListBulletedIcon sx={{fontSize: '30px'}} htmlColor="#E8E8E8"/>
                    </TextEditorButton>

                    <TextEditorButton onClick={onOrder} >
                        <FormatListNumberedIcon sx={{fontSize: '30px'}} htmlColor="#E8E8E8"/>
                    </TextEditorButton>

                    <TextEditorButton onClick={onAddIndent}>
                        <FormatIndentIncreaseIcon sx={{fontSize: '30px'}} htmlColor="#E8E8E8"/>
                    </TextEditorButton>

                    <TextEditorButton onClick={onDeleteIndent}>
                        <FormatIndentDecreaseIcon sx={{fontSize: '30px'}} htmlColor="#E8E8E8"/>
                    </TextEditorButton>

                    <TextEditorButton onClick={onLeft}>
                        <FormatAlignLeftIcon sx={{fontSize: '30px'}} htmlColor="#E8E8E8"/>
                    </TextEditorButton>

                    <TextEditorButton onClick={onCenter}>
                        <FormatAlignCenterIcon sx={{fontSize: '30px'}} htmlColor="#E8E8E8" />
                    </TextEditorButton>

                    <TextEditorButton onClick={onRight}>
                        <FormatAlignRightIcon sx={{fontSize: '30px'}} htmlColor="#E8E8E8" />
                    </TextEditorButton>
                </div>
                <textarea className="editorField" placeholder="Enter your text here and stylize it" ref={myref} onChange={onChange} value={val}>

                </textarea>
            </div>
        )
    }

    function renderDarkEditor(){
        return (
            <div className="textEditorDark">
                <div className="textEditorHeader">
                    <TextEditorButton onClick={onBold} >
                        <FormatBoldIcon sx={{fontSize: '30px'}} htmlColor="#E8E8E8"/>
                    </TextEditorButton>

                    <TextEditorButton onClick={onItalic} >
                        <FormatItalicIcon sx={{fontSize: '30px'}} htmlColor="#E8E8E8"/>
                    </TextEditorButton>

                    <TextEditorButton onClick={onUnderlined} >
                        <FormatUnderlinedIcon sx={{fontSize: '30px'}} htmlColor="#E8E8E8"/>
                    </TextEditorButton>

                    <TextEditorButton onClick={onCrossed} >
                        <FormatStrikethroughIcon sx={{fontSize: '30px'}} htmlColor="#E8E8E8"/>
                    </TextEditorButton>

                    <TextEditorButton onClick={onHeader} >
                        <FormatSizeIcon sx={{fontSize: '30px'}} htmlColor="#E8E8E8"/>
                    </TextEditorButton>

                    <TextEditorButton onClick={onList} >
                        <FormatListBulletedIcon sx={{fontSize: '30px'}} htmlColor="#E8E8E8"/>
                    </TextEditorButton>

                    <TextEditorButton onClick={onOrder} >
                        <FormatListNumberedIcon sx={{fontSize: '30px'}} htmlColor="#E8E8E8"/>
                    </TextEditorButton>

                    <TextEditorButton onClick={onAddIndent}>
                        <FormatIndentIncreaseIcon sx={{fontSize: '30px'}} htmlColor="#E8E8E8"/>
                    </TextEditorButton>

                    <TextEditorButton onClick={onDeleteIndent}>
                        <FormatIndentDecreaseIcon sx={{fontSize: '30px'}} htmlColor="#E8E8E8"/>
                    </TextEditorButton>
                </div>
                <textarea className="editorFieldDark" placeholder="Enter your text here and stylize it">

                </textarea>
            </div>
        )
    }

    

    return renderThemedEditor();
    
}

export default CustomTextEditor;