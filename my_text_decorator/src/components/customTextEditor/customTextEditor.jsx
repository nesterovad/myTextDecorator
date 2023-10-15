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

    function onClick(openTag, closeTag){
        let [start, end] = getSelectedText();
        let editedText;
        if (val.substring(start, start + openTag.length) === openTag){
            editedText = val.substring(0, start) + val.substring(start, end).replace(openTag, '').replace(closeTag, '') + val.substring(end);
        }else{
            editedText = val.substring(0, start) + openTag + val.substring(start, end) + closeTag + val.substring(end);
        }
        setVal(editedText);
        props.onChange(editedText);
    }

    function onBold(){
       onClick(Tags.boldOpen, Tags.boldClose);
        
    }
    
    function onItalic(){
        onClick(Tags.italicOpen, Tags.italicClose);
    }

    function onUnderlined(){
        onClick(Tags.underlineOpen, Tags.underlineClose);
    }

    function onCrossed(){
        onClick(Tags.crossOpen, Tags.crossClose);
    }

    function onHeader(){
        onClick(Tags.headerOpen, Tags.headerClose);

    }

    function onCenter(){
        onClick(Tags.centerOpen, Tags.centerClose);
    }

    function onRight(){
        onClick('<p align="right">', '</p>');

    }

    function onLeft(){
        onClick('<p align="left">', '</p>');
    }

    function onList(){
        let [start, end] = getSelectedText();
        let parsedText = val.substring(start, end).split(/\r?\n/);
        let items = '';
        parsedText.forEach(function (item) {
            if(item){
            items = items + Tags.listItemOpen + item + Tags.listItemClose;
            }
        });
        let editedText = val.substring(0, start) + Tags.listOpen + items + Tags.listClose + val.substring(end);
        setVal(editedText);
        props.onChange(editedText);
    }

    function onOrder(){
        let [start, end] = getSelectedText();
        let parsedText = val.substring(start, end).split(/\r?\n/);
        let items = '';
        parsedText.forEach(function (item) {
            if(item){
            items = items + Tags.listItemOpen + item + Tags.listItemClose;
            }
        });
        let editedText = val.substring(0, start) + Tags.orderOpen + items + Tags.orderClose + val.substring(end);
        setVal(editedText);
        props.onChange(editedText);
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
                <textarea className="editorFieldDark" placeholder="Enter your text here and stylize it">

                </textarea>
            </div>
        )
    }

    

    return renderThemedEditor();
    
}

export default CustomTextEditor;