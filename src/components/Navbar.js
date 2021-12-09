import {React} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(){
    return (
        <div className = "navbar">
            <div className='header'><h3>Wii Recommend</h3></div>
            <ul className='menu'>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/about'>ABOUT</Link></li>
            </ul> 
        </div>
    );
};

export default Navbar;