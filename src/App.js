import './App.css';
import ReactDom from "react-dom"
import { Route, BrowserRouter } from "react-router-dom";
import PlaceHolder from './PlaceHolder';
import Home from './Home';

function App() {
  // function handleClick(e) {
  //   console.log(e.target)
  // }
  return (
    <div>
      <h1 id='header'>Daniel Williams</h1>
      <Route path="/starbucks-caffeine">
        <PlaceHolder />
      </Route>
      <Route path="/crypto-finder">

      </Route>
      <Route path="/wayfarer">

      </Route>

      <Route exact path="/">
        <Home />
      </Route>

      <div id='footer'>
        <p>placeholder1</p>
        <p>placeholder2</p>
        <p>placeHolder3</p>
      </div>
    </div>
  );
}

export default App;
