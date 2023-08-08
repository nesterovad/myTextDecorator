import React, { useState } from "react";

import './layouts.css';

function MainLayout(){
    const [theme, setTheme] = useState('dark');

    function renderLight(){
        return (
            <div className="mainLight"></div>
        )
        
    }

    function renderDark(){
        return (
            <div className="mainDark"></div>
        )
    }

    if(theme === 'light'){
        return renderLight();
    }else{
        return renderDark();
    }
}

export default MainLayout;