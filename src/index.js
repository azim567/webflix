import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import data from './Data';
import Card from './Cards';




ReactDOM.render(
  <div className="container">

    <div className="topnav">
      <p>WebFlix</p>
      <button>Sign In</button>
    </div>

    <div className="header-banner">
      <h1>Unlimited movies, TV <br />shows and more.</h1>
      <p>Watch anywhere. Cancel anytime.</p>
      <p className="short-desc">Ready to watch? Enter your email to create or restart your membership.</p>
      <button>Watch Now</button>
    </div>

    <div className="movie-content">

      {
        data.map(item =>
          <Card name={item.name}
            image={item.image}
            category={item.category}
            url={item.link} />
        )
      }

    </div>

    <div className="footer">Designed by Azeem Siddiqui @ <a href="https://thecodingshef.com" >TheCodingShef</a></div>

  </div>,
  document.getElementById('root')
);

