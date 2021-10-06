import React from 'react';
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Card from "../Card";
// import FloatBtn from "../FloatBtn";
// import PrevBtn from "../../assets/icons/previous.svg"


const Slides = ({arrowLeft, arrowRight, data }) => {
    console.log(data.length)
    return (
        <Carousel
            autoPlay={5000}
            infinite
            arrowLeft={arrowLeft}
            arrowRight={arrowRight}
            slidesPerPage={data.length > 3 ? 3 : data.length}
            slidesPerScroll={1}
            addArrowClickHandler
        >
            {data.map((item, index) => (
                  <Card img={item.img} title={item.title} content={item.content} key={index}/>
            ))}
        </Carousel>
    )
}


export default Slides