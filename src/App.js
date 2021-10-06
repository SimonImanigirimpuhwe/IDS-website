import React from 'react';
import Button from './components/Button';
import FloatBtn from './components/FloatBtn';
import Footer from './components/Footer';
import Header from './components/Header';
import PrevBtn from "./assets/icons/previous.svg";
import { Carousel } from './components/Slide';
import services from "./constants";
import PhoneIcon from "./assets/icons/phone.svg";
import EmailIcon from "./assets/icons/email.svg";
import HeroImage from "./assets/images/hero-img.svg";


function App() {
  return (
    <div className="flex flex-col box-border">
      <div className="bg-hero-fluid sm:bg-contain sm:bg-no-repeat bg-cover  h-screen flex flex-col">
        <Header />
        <div className="flex md:flex-row flex-col items-center px-12 mt-12">
           <div className="text-white">
              <h1 className="font-bold pb-4 text-2xl">Welcome to Iraguha Digital Services!</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className="mt-12 mb-3">
                <Button title="Learn more about" bgColor="secondary" width={"2/5"}/>
              </div>
           </div>
           <div>
              <img src={HeroImage} alt="hero-img" />
           </div>
        </div>
      </div>
      <main className="pb-8">
        <div className="p-12">
          <h1 className="text-center uppercase py-10 font-bold">About iraguha digital services</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna amo.</p><br/>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div>
          <h1 className="text-center uppercase py-5 pt-10 font-bold">services</h1>
          <div className="bg-service-fluid bg-contain bg-no-repeat bg-right h-4/6 py-8">
              <div className="mb-12 pl-12 pr-12"> 
                <Carousel 
                  arrowLeft={<FloatBtn bgColor="tertiary" arrow={PrevBtn}/>}
                  arrowRight={<FloatBtn bgColor="tertiary"/>}
                  data={services}
                />
              </div>
          </div>
          <div className="flex flex-col justify-center items-center mb-8 pl-12 pr-12">
            <h1 className="text-center uppercase py-5 pt-10 font-bold">Contact us</h1>
            <div className="self-center">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
              <div className="flex flex-row w-16 py-6">
                <img src={PhoneIcon} alt="phone icon" className="w-6 h-6"/>
                <p className="pl-6">+250786338635</p>
              </div>
              <div className="flex flex-row w-16">
                <img src={EmailIcon} alt="email icon" className="w-6 h-6"/>
                <p className="pl-8">iraguhaivos@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
