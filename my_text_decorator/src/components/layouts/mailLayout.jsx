import React, { useState } from "react";

import { Header } from "../header";

import './layouts.css';

function MainLayout(){
    const [theme, setTheme] = useState('light');

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
                <Header theme={theme}/>
            </div>
        )
        
    }

    function renderDark(){
        return (
            <div className="mainDark">
                <Header theme={theme} onTheme={onThemeChange}/>
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