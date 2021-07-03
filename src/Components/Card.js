import React from 'react';

const Card = (props) => {
    return ( 
        <div className="card">
          <div className="card_inner">
            <div className="card_header">
              <p className="card_title">{props.title}</p>
            </div>
            <h2 className="card_content">{props.content}</h2>
          </div>
        </div>
     );
}
 
export default Card;