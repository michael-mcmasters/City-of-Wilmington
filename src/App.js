import logo from './logo.svg';
import Navbar from "./components/Navbar";
import cityImg from "./images/davisisland.jpg";   // Need to import the image here for webpack to work
import './App.css';

function App() {
  return (
    <div className="main-color-theme">
      <Navbar></Navbar>
      <img src={cityImg} alt="fdsa" />
    </div>
  );
}

export default App;
