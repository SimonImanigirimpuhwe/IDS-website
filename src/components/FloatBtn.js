import React from 'react';
import NextBtn from "../assets/icons/next.svg"

const FloatBtn = ({arrow, width, height, bgColor}) => {
    return ( 
        <div className={`bg-${bgColor} flex items-center justify-center rounded-full shadow-md w-${width} h-${height} hover:bg-${bgColor === "primary"? "blue-300": "teal-200"} cursor-pointer`}>
            <img src={arrow} alt={`${arrow} icon`} className="w-4 h-4"/>
        </div>
     );
}
 
export default FloatBtn;

FloatBtn.defaultProps = {
    bgColor: "white",
    arrow: NextBtn,
    width: 8,
    height: 8
}