import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faLocationDot, faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import HiddenMenu from "./HiddenMenu";
import './Topbar.css'

const Topbar = () => {
    const [hidden, setHidden] = useState({hidden:true});
    const toggleHidden = () => {
        setHidden({hidden:!hidden.hidden});
    }
    return (
        <div className="topbar">
            <img className="logo" src={require('./zomato.png')} alt = "hello"/>
            
            <div className="complete-box">
                <div className="location">
                    <FontAwesomeIcon className="pin" icon = {faLocationDot}/>
                    <input type="text"className="location-entry" placeholder="New Delhi, Delhi"/>
                    <FontAwesomeIcon className="arrow" onClick={toggleHidden} icon = {faCaretDown}/>
                    {hidden.hidden && <HiddenMenu/>}     
                </div>
                <p className="bar">|</p>
                <div className="search-box">
                    <FontAwesomeIcon className="search" icon= {faSearch}/>
                    <input type="text" placeholder="Search for restaurants, cuisines, dishes, etc."/>
                </div>
            </div>

        </div>

    );
}

export default Topbar;