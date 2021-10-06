import React from 'react';
import Button from './Button';
import Logo from "../assets/images/logo.png"

const Header = () => {
    return ( 
        <nav className="flex flex-row justify-between w-full h-16">
            <img  src={Logo} alt="hero background" className="w-48 h-48 -mt-10" />
            <ul className="flex flex-row flex-grow-0.5 justify-evenly items-center sm:visible invisible text-white font-bold uppercase">
                <li><a href="#home" className="hover:underline">Home</a></li>
                <li><a href="#about" className="hover:underline">About</a></li>
                <li><a href="#location" className="hover:underline">Location</a></li>
            </ul>
            <div className="flex-end mr-12 uppercase font-bold self-center sm:visible invisible">
                <Button title="Contact"/>
            </div>
        </nav>
     );
}
 
export default Header;