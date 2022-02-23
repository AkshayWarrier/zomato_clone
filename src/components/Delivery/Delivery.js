import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState, animated } from "react";

import "./Delivery.css";

const FoodItem = (props) => {
    return (
        <div className="food-item">
            <img className={props.class} src={props.link} alt="food-pic" />
            <p className="food-name">{props.name}</p>
        </div>
    );
}
            

const Delivery = () => {
    const [foods,setFoods] = useState([0,6]);
    const shiftFoods = (direction) => {
        if(direction === "left"){
            if(foods[0] === 0){
                return;
            }
            setFoods([foods[0]-1,foods[1]-1]);
        }
        else{
            if(foods[1] === 12){
                return;
            }

            setFoods([foods[0]+1,foods[1]+1]);
        }
    }
    const allFoods = [
        <FoodItem class = "pizza" name="Pizza" link={require('./images/peetza.jpg')}/>,
        <FoodItem class = "burger" name="Burger" link={require('./images/borgir.jpg')}/>,
        <FoodItem class = "chicken" name="Chicken" link={require('./images/chicken.jpg')}/>,
        <FoodItem class = "chole" name="Chole Bature" link={require('./images/chole.jpg')}/>,
        <FoodItem class = "paneer" name="Paneer" link={require('./images/paneer.jpg')}/>,
        <FoodItem class = "dosa" name="Dosa" link={require('./images/dosa.jpg')}/>,
        <FoodItem class = "fried" name="Fried Rice" link={require('./images/fried.jpg')}/>,
        <FoodItem class = "idli" name="Idli" link={require('./images/idli.jpg')}/>,
        <FoodItem class = "momo" name="Momo" link={require('./images/momo.jpg')}/>,
        <FoodItem class = "paratha" name="Paratha" link={require('./images/paratha.jpg')}/>,
        <FoodItem class = "roll" name="Roll" link={require('./images/roll.jpg')}/>,
        <FoodItem class = "sandiwch" name="Sandwich" link={require('./images/sandwich.jpg')}/>
    ]
    return(
        <div className="delivery">
            <h1 className="eat">Eat what makes you happy</h1>
            <div className="btn left" onClick={() => {shiftFoods("left")}}>
                <FontAwesomeIcon icon = {faAngleLeft}/>
            </div>
            <div className="food-container">
                {allFoods.slice(foods[0],foods[1])}
            </div>
            <div className="btn right" onClick={() => {shiftFoods("right")}}>
                <FontAwesomeIcon icon = {faAngleRight}/>
            </div>
        </div>
    );
}

export default Delivery
