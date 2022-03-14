import React from 'react';

function Home(){

return (
  <div id='mainContainer'>
    <div id='cryptoAppTile'>
      <img className='bottom' src={require("./assets/crypto-app-tile-hover.jpg")}></img>
      <img className='top' src={require("./assets/crypto-app-tile-main.jpg")}></img>
    </div>
    <div id='starbucksAppTile'>
      <img className='bottom' src={require("./assets/starbucks-app-tile-hover.jpg")}></img>
      <img className='top' src={require("./assets/starbucks-app-tile-main.png")}></img>
    </div>
  </div>
);

};

export default Home;