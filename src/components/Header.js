import React from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
import {Link } from "react-scroll";
import Button from './Button';
import Logo from "../assets/images/logo.png";

const Header = () => {
    return ( 
        <nav className="flex flex-row justify-between w-full h-16">
            <img  src={Logo} alt="hero background" className="w-48 h-48 -mt-10" />
            <ul className="flex flex-row flex-grow-0.5 justify-evenly items-center sm:visible invisible text-white font-bold uppercase">
                <li><a  className="hover:underline">Home</a></li>
                <li><Link  
                className="hover:underline cursor-pointer"
                to="about"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={1000}
                delay={1000}
                isDynamic={true}
                ><a>About</a></Link></li>
                <li><Link  
                className="hover:underline cursor-pointer"
                to="footer"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={1000}
                delay={1000}
                isDynamic={true}
                ><a>Location</a></Link></li>
            </ul>
            <div className="visible sm:hidden self-center cursor-pointer pr-4">
                <a>
                    <GiHamburgerMenu color="#0BE1D4"/>
                </a>
            </div>
            <Link 
            className="flex-end mr-12 uppercase font-bold self-center sm:visible invisible"
            to="contact"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={50}
            duration={1000}
            delay={1000}
            isDynamic={true}
            >
                <Button title="Contact"/>
            </Link>
        </nav>
     );
}
 
export default Header;