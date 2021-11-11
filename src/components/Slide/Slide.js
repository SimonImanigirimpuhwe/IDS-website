import React from 'react';
import Carousel, {autoplayPlugin, arrowsPlugin, slidesToShowPlugin} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Card from "../Card";


const Slides = ({arrowLeft, arrowRight, data }) => {

    return (
        <Carousel
            plugins={[
                'infinite',
            {
                resolve: autoplayPlugin,
                options: {
                interval: 5000,
                }
            },
            {
                resolve: slidesToShowPlugin,
                options: {
                 numberOfSlides: data.length > 3 ? 3 : data.length,
                },
              },
            {
                resolve: arrowsPlugin,
                options: {
                  arrowLeft: arrowLeft,
                  arrowRight: arrowRight,
                  addArrowClickHandler: true,
                }
              }
            ]} 
            animationSpeed={1000}
            breakpoints={{
                640: {
                  plugins: [
                   {
                     resolve: slidesToShowPlugin,
                     options: {
                      numberOfSlides: 1
                     }
                   },
                 ]
                },
              }}
        >
            {data.map((item, index) => (
                  <Card img={item.img} title={item.title} content={item.content} key={index}/>
            ))}
        </Carousel>
    )
}


export default Slides