import React from "react";

import './layouts.css';

class mainLayout extends Comment{
    constructor(props){
        super(props);
        this.state = {
            theme: 'dark',
            replace: true,
            doubleEnter: true,
        };
    }

    changeTheme(){
        //changes this.state.theme
    }

    changeSettings(){
        //changes this.state.replace and this.state.doubleEnter on returning from setting page
    }

    renderLight(){
        return (
            <div className="mainLight">
                
            </div>
        )
    }

    renderDark(){
        return (
            <div className="mainDark">
            </div>
        )
    }

    render(){
        if (this.state.theme === 'light'){
            return this.renderLight();
        }else{
            return this.renderDark();
        }
    }
}

export default mainLayout;