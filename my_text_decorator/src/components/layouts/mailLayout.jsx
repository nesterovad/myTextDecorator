import React, { useState } from "react";

import { Header } from "../header";
import { Switcher } from "../switcher";

import './layouts.css';

function MainLayout(){
    const [theme, setTheme] = useState('light');
    const [editorMode, setEditorMode] = useState('Quil');

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
    

    if(theme === 'light'){
        return renderLight();
    }else{
        return renderDark();
    }
}

export default MainLayout;