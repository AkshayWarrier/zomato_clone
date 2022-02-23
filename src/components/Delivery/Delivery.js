import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState} from "react";
import { useSpring, animated} from 'react-spring'

import "./Delivery.css";
const distance = 190;

const FoodItem = (props) => {
    const anprops = useSpring({
        from : {right:0},
        to : {right:props.offSet*distance}
    })
    return (
        <animated.div id = {props.id} className="food-item" style={{right:anprops.right}}>
            <img className={props.class} src={props.link} alt="food-pic" />
            <p className="food-name">{props.name}</p>
        </animated.div>
    );
}
            

const Delivery = () => {
    const [offSet,setFoods] = useState(0);
    const shiftFoods = (direction) => {
        if(direction === "left"){
            if(offSet !== 0){
                setFoods(offSet - 1);
            }
        }
        else{
            if(offSet !== 6){
                setFoods(offSet + 1);
            }
        }
    }
    const allFoods = [
        <FoodItem id = "f1" offSet = {offSet} class = "pizza" name="Pizza" link={require('./images/peetza.jpg')}/>,
        <FoodItem id = "f2"  offSet = {offSet}  class = "burger" name="Burger" link={require('./images/borgir.jpg')}/>,
        <FoodItem id = "f3"  offSet = {offSet}  class = "chicken" name="Chicken" link={require('./images/chicken.jpg')}/>,
        <FoodItem id = "f4"  offSet = {offSet}  class = "chole" name="Chole Bature" link={require('./images/chole.jpg')}/>,
        <FoodItem id = "f5"  offSet = {offSet}  class = "paneer" name="Paneer" link={require('./images/paneer.jpg')}/>,
        <FoodItem id = "f6"  offSet = {offSet}  class = "dosa" name="Dosa" link={require('./images/dosa.jpg')}/>,
        <FoodItem id = "f7"  offSet = {offSet}  class = "fried" name="Fried Rice" link={require('./images/fried.jpg')}/>,
        <FoodItem id = "f8"  offSet = {offSet}  class = "idli" name="Idli" link={require('./images/idli.jpg')}/>,
        <FoodItem id = "f9"   offSet = {offSet} class = "momo" name="Momo" link={require('./images/momo.jpg')}/>,
        <FoodItem id = "f10"  offSet = {offSet}  class = "paratha" name="Paratha" link={require('./images/paratha.jpg')}/>,
        <FoodItem id = "f11"  offSet = {offSet}  class = "roll" name="Roll" link={require('./images/roll.jpg')}/>,
        <FoodItem id = "f12"  offSet = {offSet}  class = "sandwich" name="Sandwich" link={require('./images/sandwich.jpg')}/>
    ]
    return(
        <div className="delivery">
            <h1 className="eat">Eat what makes you happy</h1>
            <div className="btn left" onClick={() => {shiftFoods("left")}}>
                <FontAwesomeIcon icon = {faAngleLeft}/>
            </div>
            <div className="food-container">
                {allFoods}
            </div>
            <div className="btn right" onClick={() => {shiftFoods("right")}}>
                <FontAwesomeIcon icon = {faAngleRight}/>
            </div>
        </div>
    );
}

export default Delivery
