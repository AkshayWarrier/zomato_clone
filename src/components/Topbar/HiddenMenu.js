import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs, faPlus } from '@fortawesome/free-solid-svg-icons';
import react from 'react';
import './HiddenMenu.css';

const HiddenMenu = () => {
    return(
        <div className="hidden-menu">
            <div className = "sec detect-location">
            <FontAwesomeIcon className="detect" icon = {faLocationCrosshairs}/>
            <p>Detect current location</p>
            </div>
            <div className = "sec add-location">
            <FontAwesomeIcon className="detect" icon = {faPlus}/>
            <p>Add location</p>
            </div>
        </div>
    );

}
export default HiddenMenu;