import React from 'react';

const Card = ({img, title, content}) => {
    return ( 
        <div className="max-w-xs mx-auto bg-white rounded-xl shadow-xl flex flex-col">
          {img && <img src={img} alt={`${title} card`} />}
          <h3 className="self-center text-secondary py-2">{title}</h3>
          <p className="p-4">{content}</p>
      </div> 
     );
}
 
export default Card;

Card.defaultProps = {
    title: "Card title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}