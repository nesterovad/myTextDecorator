import React from "react";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';

import './header.css';

function Header(props){

    function renderThemeIcon(theme, onTheme){
        if (theme === 'light'){
            return (
                <div className="icons">
                    <SettingsOutlinedIcon sx={{fontSize: '40px'}} htmlColor="#E8E8E8" />
                    <NightlightOutlinedIcon sx={{fontSize: '40px'}} htmlColor="#E8E8E8" onClick={onTheme}/>
                </div>
            )
        }else{
            return (
                <div className="icons">
                    <SettingsOutlinedIcon sx={{fontSize: '40px'}} htmlColor="#CEC7F9" />
                    <WbSunnyOutlinedIcon sx={{fontSize: '40px'}} htmlColor="#CEC7F9" onClick={onTheme}/>    
                </div>
            )
        }
    }

    return (
        <div className="header">
            {renderThemeIcon(props.theme, props.onTheme)}
        </div>
    )
}

export default Header;
