import React from 'react';

const Button = ({title, bgColor, width}) => {
    return ( 
        <div className={`bg-${bgColor} rounded-md shadow-md w-${width} h-7 hover:bg-${bgColor === "primary"? "blue-300": "teal-200"} cursor-pointer`}>
            <p className="text-white text-center">{title}</p>
        </div>
     );
}
 
export default Button;

Button.defaultProps = {
    title: "Submit",
    bgColor: "primary",
    width: 24
}