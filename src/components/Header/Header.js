import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBeer, faCutlery, faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import Delivery from '../Delivery/Delivery';
import Restraunts from '../Restaurants/Restraunts';

const Option = (props) => {
    if(props.current === props.id){
        return(
            <div className="option current" id = {props.id} onClick = {props.onClick} >
                <div className='option-icon current' id = {props.id} >
                    <FontAwesomeIcon className = "icon current" icon = {props.icon} id = {props.id}/>  
                </div>
                <p className='option-text current' id = {props.id}>{props.text}</p>
            </div>
        );
    }else{
        return(
            <div className="option" id = {props.id} onClick = {props.onClick} >
                <div className='option-icon' id = {props.id} >
                    <FontAwesomeIcon className = "icon" icon = {props.icon} id = {props.id}/>  
                </div>
                <p className='option-text' id = {props.id}>{props.text}</p>
            </div>
        );
    }
}

const Header = () => {
    const [currentOption, setOption] = useState("o1");

    
    return(
        <>
        <div className="header">
            <p className='loc'>Home / India / Delhi NCR Restaurants</p>
            <div className="options">
                <Option id = "o1" icon = {faMotorcycle} text = "Delivery" current = {currentOption} onClick = {(e) => {setOption(e.target.id)}}/>
                <Option id = "o2" icon = {faCutlery} text = "Dining Out" current = {currentOption} onClick = {(e) => {setOption(e.target.id)}}/>
                <Option id = "o3" icon = {faBeer} text = "Nightlife"  current = {currentOption} onClick = {(e) => {setOption(e.target.id)}}/>
            </div>
        </div>
        {currentOption === "o1" ? () => {<Delivery/>;} : null}
        </>
    );
}

export default Header;

