import React from 'react';

const Card = ({img, title, content}) => {
    return ( 
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex flex-col">
          {img && <img src={img} alt={`${title} card`} />}
          <h3 className="self-center text-secondary">{title}</h3>
          <p>{content}</p>
      </div> 
     );
}
 
export default Card;

Card.defaultProps = {
    title: "Card title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}