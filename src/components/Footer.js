import React from 'react';
import FacebookIcon from "../assets/icons/facebook-square.svg";
import TwitterIcon from "../assets/icons/twitter-square.svg";
import LinkedIcon from "../assets/icons/linkedin.svg";


const Footer = () => {
    return ( 
        <footer className="bg-tertiary flex flex-col pl-12 pr-12 py-5" id="footer">
            <div className="flex sm:flex-row flex-col sm:justify-between">
                <div className="flex flex-col text-grey">
                    <h1 className="font-bold capitalize">Quick links</h1>
                    <ul className="flex flex-col text-grey pt-4">
                        <li><a href="#home" className="hover:underline">Home</a></li>
                        <li><a href="#about" className="hover:underline">About</a></li>
                        <li><a href="#location" className="hover:underline">Location</a></li>
                    </ul>
                </div>
                <div className="flex flex-col text-grey sm:pt-0 pt-4">
                    <h1 className="font-bold capitalize">Location</h1>
                    <p className="pt-4">Rutsiro, Manihira</p>
                </div>
                <div className="flex flex-col text-grey sm:pt-0 pt-4">
                    <h1 className="font-bold capitalize">Connect with us</h1>
                    <ul className="flex flex-row sm:justify-evenly pt-4">
                        <li className="transform hover:scale-110">
                            <a href="https://facebook.com/iraguhayves">
                                <img src={FacebookIcon} alt="facebook icon"  className="w-6 h-6"/>
                            </a>
                        </li>
                        <li className="transform hover:scale-110">
                            <a href="https://twitter.com/iraguhayves">
                                <img src={TwitterIcon} alt="twitter icon" className="w-6 h-6"/>
                            </a>
                        </li>
                        <li className="transform hover:scale-110">
                            <a href="https://linkedin.com/iraguhayve">
                                <img src={LinkedIcon} alt="linkedin icon" className="w-6 h-6"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="sm:self-center text-grey pt-4">
                <p>©{new Date().getFullYear()}IDS. All rights reserved</p>
            </div>
        </footer>
     );
}
 
export default Footer;