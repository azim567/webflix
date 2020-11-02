import React from 'react';
import './index.css';

function Card(props){
    return(
    <div className="Cards">
  
      <div className="card">
  
        <img  src={props.image} alt="movieImg" />
        <div className="desc">
          <p className="category">{props.category}</p>
          <p className="name">{props.name}</p>
          <a href={props.url}><button>Watch now</button></a>
        </div>
  
      </div>
    </div>
    );
  
  }
  

export default Card;