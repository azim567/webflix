import React from 'react';
import Card from './Cards';
import data from './Data';
import './index.css';

function App() {
  return (
    <div className="container">

    <div className="topnav">
      <p className="site-name">WebFlix</p>
      <button>Sign In</button>
    </div>

    <div className="header-banner">
      <h1>Unlimited movies, TV <br />shows and more.</h1>
      <p>Watch anywhere. Cancel anytime.</p>
      <p className="short-desc">Ready to watch? Create or restart your membership.</p>
      <button>Watch Now</button>
    </div>

    <div className="movie-content">

      {
        data.map(item =>
          <Card key={item.id}
            name={item.name}
            image={item.image}
            category={item.category}
            url={item.link} />
        )
      }

    </div>

    <div className="footer">Designed by {"❤️"} Azeem Siddiqui @ <a href="https://thecodingshef.com" >TheCodingShef</a></div>

  </div>
  );
}

export default App;
