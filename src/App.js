import React from "react";
import { animateScroll as scroll } from "react-scroll";
import Button from "./components/Button";
import FloatBtn from "./components/FloatBtn";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PrevBtn from "./assets/icons/previous.svg";
import UpBtn from "./assets/icons/up.svg";
import { Carousel } from "./components/Slide";
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
            <h1 className="font-bold pb-4 text-2xl">
              Welcome to Iraguha Digital Services!
            </h1>
            <p>
              Providing digital services to people who need them the most,
              enabling access to digital transformation in our communities.
            </p>
            <div className="mt-12 mb-3">
              <a href="#about">
                <Button title="Learn more" bgColor="secondary" width={"2/5"} />
              </a>
            </div>
          </div>
          <div>
            <img src={HeroImage} alt="hero-img" />
          </div>
        </div>
      </div>
      <main className="pb-8">
        <div className="p-12">
          <h1
            className="text-center uppercase py-10 font-bold"
            id="about"
            name="about"
          >
            About iraguha digital services
          </h1>
          <p>
            Iraguha Digital Services helps residents from remote communities
            access online governmental services and other online services.
          </p>
          <br />
          <p>
            Iraguha Digital Services brings tools and expertise needed to allow
            citizens in different communities to benefit from online services.
            It provides access to e-governmental services in a fast, easy, and
            friendly manner to professionals, households, students, and regular
            citizens.
          </p>
        </div>
        <div id="services" name="services">
          <h1 className="text-center uppercase py-5 pt-10 font-bold">
            Services
          </h1>
          <div className="bg-service-fluid bg-contain bg-no-repeat bg-right h-4/6 py-8">
            <div className="mb-12 pl-12 pr-12">
              <Carousel
                arrowLeft={<FloatBtn bgColor="tertiary" arrow={PrevBtn} />}
                arrowRight={<FloatBtn bgColor="tertiary" />}
                data={services}
              />
            </div>
          </div>
          <div
            className="flex flex-col justify-center items-center mb-8 pl-12 pr-12"
            id="contacts"
            name="contacts"
          >
            <h1 className="text-center uppercase py-5 pt-10 font-bold">
              Contact us
            </h1>
            <div className="self-center">
              <p>Would you like to work with us? We respond in realtime:</p>
              <div className="flex flex-row w-16 py-6">
                <img src={PhoneIcon} alt="phone icon" className="w-6 h-6" />
                <p className="pl-6">+250785805857</p>
              </div>
              <div className="flex flex-row w-16">
                <img src={EmailIcon} alt="email icon" className="w-6 h-6" />
                <p className="pl-8">iraguhaivos@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div
        className="fixed bottom-5 right-5 rotate-90"
        onClick={() => scroll.scrollToTop()}
      >
        <FloatBtn bgColor="primary" arrow={UpBtn} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
