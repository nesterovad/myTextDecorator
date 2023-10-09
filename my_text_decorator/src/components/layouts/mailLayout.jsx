import React, { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

import { Header } from "../header";
import { Switcher } from "../switcher";
import { CustomTextEditor } from "../customTextEditor";
import { Button } from "../button";

import './layouts.css';

function MainLayout(){
    const [theme, setTheme] = useState('light');
    const [editorMode, setEditorMode] = useState('Quil');
    const [editorVal, setEditorVal] = useState('');
    const [showingText, setShowingText] = useState(false);

    const modules = {
        toolbar: [
            [{'header': [1, 2, false]}],
            ['bold', 'italic', 'underline', 'strike', 'blokquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['clean']
        ],
    };

    const formats = ['header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent'];

    function onThemeChange(){
        if (theme === 'light'){
            setTheme('dark');
        }else{
            setTheme('light');
        }
    }

    function onAutostyle(){

    }

    function onShow(){
        setShowingText(true);
    }

    function onExport(){

    }

    function renderLight(){
        return (
            <div className="mainLight">
                <Header theme={theme} onTheme={onThemeChange}/>
                <div className="container">
                    <Switcher theme={theme} onChangeMode={setEditorMode}/>
                    {renderEditor()}
                    <div className="buttonBlock">
                        <div style={{float: "left"}}>
                            <Button theme={theme} action={onAutostyle} text='Autostyle'/>
                        </div>
                        <div style={{float: "left"}}>
                            <Button theme={theme} action={onShow} text='Show'/>
                        </div>
                        <div style={{float: "right"}}>
                            <Button theme={theme} action={onExport} text='Export in txt'/>
                        </div>
                        
                    </div>
                    {renderText()}
                </div>
            </div>
        )
        
    }

    function renderDark(){
        return (
            <div className="mainDark">
                <Header theme={theme} onTheme={onThemeChange}/>
                <div className="container">
                    <Switcher theme={theme} onChangeMode={setEditorMode}/>
                    {renderEditor()}
                    <div className="buttonBlock">
                    <div style={{float: "left"}}>
                            <Button theme={theme} action={onAutostyle} text='Autostyle'/>
                        </div>
                        <div style={{float: "left"}}>
                            <Button theme={theme} action={onShow} text='Show'/>
                        </div>
                        <div style={{float: "right"}}>
                            <Button theme={theme} action={onExport} text='Export in txt'/>
                        </div>
                    </div>
                    {renderText()}
                </div>
            </div>
        )
    }

    function getQillTheme(){
        if (theme === 'light'){
            return (
                {
                    height: '500px',                
                }
            )
        }else{
            return (
                {
                    height: '500px',
                    backgroundColor: '#222225',
                    border: '1px solid #717183',
                    color: '#D9D9D9'
                }
            )
        }
    }

    function renderEditor(){
        if (editorMode === 'Quil'){
            return (
                <ReactQuill theme='snow' value={editorVal} onChange={setEditorVal} placeholder="Enter your text here and stylize it" modules={modules} formats={formats}
                    style={getQillTheme()}
                />
            )
        }else{
            return (
                <CustomTextEditor theme={theme} onChange={setEditorVal}/>
            )
        }
    }

    function renderText(){
        if (showingText)
            return (
                    <div>
                        <p style={{color: '#9A9A9A'}}>
                            {editorVal}
                        </p>
                        
                    </div>
                )
    }
    

    if(theme === 'light'){
        return renderLight();
    }else{
        return renderDark();
    }
}

export default MainLayout;