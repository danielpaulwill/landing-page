import React from 'react';

function Home(){

return (
  <div id='mainContainer'>
    <img className='appsContainer' src="https://lh3.googleusercontent.com/kRDQA7FQdaYiA_hblcNykECcmbAXirot3LtzMdj4Hq4xeg3Z2R9whHSK4AmugcHuWien0GxAJReHW_lTMAZXQQqX4eiyiLsa-3oPii1Pgt_fRfYWdCqgZqttRWbajefQf86ncwg-8b4hX48aT6ZtQx93jV39PMYjrZGpTwjFcPtQEqfbmmEagbmqGfapPuUn9edAUTeZgF5fs3WgjGKLEHs0lwTHOyXDtpMDeD7EPYvwKTUbdM5okYRapjmVtKb2vJssTAiAw25StnNyXHqR09OeECbAwAUqilYTLQ8U-N6LUl9iOe1ncw908F-b5baBpiMQTDWbQQglNygsyzG-JBD6AbnqxoZ0a1GHuXn0A9ndShHZtPzdg3jmIOWr6dpn1Kl2ofo5ABEL0Rxd_rgSpi1l1tvo87iUZhiSyEHWPqvf5d-WsQA1SP7Iel5qHvqKW8vgR-AJhat3_M2yaNvZMSkLeW41qU6V9iXrKWSxoW28NI8gvmTVI1shRSnS83Hb4Ln0oLwiB--qjjDyX5j1gbQ_akSPko4K91zf05pL3R4geIPoh0MmKTgdsfvF7D85KOdPaIeTCRU_gPf-cXDCyMfIw7t0hJSyccsTnQSZzg4tXCDg4rBnxJXS-cyp2K1u0wrjVlQ79p3hr55GgsqCYf5l29Xzx2u2fvIwzVng_WuQZChqSc9v6GfHqoUyndFaQyPlRftz80VajGceXh-aiLJ4=w280-h56-no?authuser=0"></img>
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