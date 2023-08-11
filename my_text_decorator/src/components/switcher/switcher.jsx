import React, { useState } from "react";

import './switcher.css';

function Switcher(props){
    const [selected, setSelected] = useState('Quil');

    function renderSwitcher(theme, onChangeMode){
        if (theme === 'light'){
            return (
                <div className="lightSwitcher">
                    {renderLightButtons(onChangeMode)}
                </div>
            )
        }else{
            return (
                <div className="darkSwitcher">
                    {renderDarkButtons(onChangeMode)}
                </div>
            )
        }
    }

    function renderLightButtons(onChangeMode){
        if (selected === 'Quil'){
            return (
                <>
                    <div className="leftButton" onClick={() => {setSelected('Quil'); onChangeMode('Quil')}}>
                        <div className="lightActiveButton">
                            <p className="lightActiveText">Quil</p>
                        </div>
                    </div>
                    <div className="rightButton" onClick={() => {setSelected('Custom'); onChangeMode('Custom')}}>
                        <div className="lightPassiveButton">
                            <p className="lightPassiveText">Custom</p>
                        </div>
                    </div>
                </>               
            )
        }else{
            return (
                <>
                    <div className="leftButton" onClick={() => {setSelected('Quil'); onChangeMode('Quil')}}>
                        <div className="lightPassiveButton">
                            <p className="lightPassiveText">Quil</p>
                        </div>
                    </div>
                    <div className="rightButton" onClick={() => {setSelected('Custom'); onChangeMode('Custom')}}>
                        <div className="lightActiveButton">
                            <p className="lightActiveText">Custom</p>
                        </div>
                    </div>
                </>               
            )
        }
    }

    function renderDarkButtons(onChangeMode){
        if (selected === 'Quil'){
            return (
                <>
                    <div className="leftButton" onClick={() => {setSelected('Quil'); onChangeMode('Quil')}}>
                        <div className="darkActiveButton">
                            <p className="darkActiveText">Quil</p>
                        </div>
                    </div>
                    <div className="rightButton" onClick={() => {setSelected('Custom'); onChangeMode('Custom')}}>
                        <div className="darkPassiveButton">
                            <p className="darkPassiveText">Custom</p>
                        </div>
                    </div>
                </>               
            )
        }else{
            return (
                <>
                    <div className="leftButton" onClick={() => {setSelected('Quil'); onChangeMode('Quil')}}>
                        <div className="darkPassiveButton">
                            <p className="darkPassiveText">Quil</p>
                        </div>
                    </div>
                    <div className="rightButton" onClick={() => {setSelected('Custom'); onChangeMode('Custom')}}>
                        <div className="darkActiveButton">
                            <p className="darkActiveText">Custom</p>
                        </div>
                    </div>
                </>               
            )
        }
    }

    return (
        <div className="switcher">
            {renderSwitcher(props.theme, props.onChangeMode)}
        </div>       
    )
}

export default Switcher;