import React, { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

import { Header } from "../header";
import { Switcher } from "../switcher";
import { CustomTextEditor } from "../customTextEditor";

import './layouts.css';

function MainLayout(){
    const [theme, setTheme] = useState('light');
    const [editorMode, setEditorMode] = useState('Quil');
    const [editorVal, setEditorVal] = useState('');

    function onThemeChange(){
        if (theme === 'light'){
            setTheme('dark');
        }else{
            setTheme('light');
        }
    }

    function renderLight(){
        return (
            <div className="mainLight">
                <Header theme={theme} onTheme={onThemeChange}/>
                <div className="container">
                    <Switcher theme={theme} onChangeMode={setEditorMode}/>
                    {renderEditor()}
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
                </div>
            </div>
        )
    }

    function renderEditor(){
        if (editorMode === 'Quil'){
            return (
                <ReactQuill theme='snow' value={editorVal} onChange={setEditorVal} placeholder="Enter your text here and stylize it"/>
            )
        }else{
            return (
                <CustomTextEditor theme={theme} onChangeText={setEditorVal}/>
            )
        }
    }
    

    if(theme === 'light'){
        return renderLight();
    }else{
        return renderDark();
    }
}

export default MainLayout;