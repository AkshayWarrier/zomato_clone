import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Restraunt.css";

const Restraunt = (props) => {
    return (
        <div className="restraunt">
            <img src={props.image} alt="restraunt-pic" />
            <div className="text-container">
                <p className="restraunt-name">{props.name}</p>
                <div className="rating-box">
                    <p className="rating">{props.rating}</p>
                    <FontAwesomeIcon className="star" icon={faStar} />
                </div>
            </div>
            
            <div className="text-container two">
                <p className="tags">{props.tags}</p>
                <p className = "price">250₹ for one</p>
            </div>

            
        </div>
    );
}

export default Restraunt;