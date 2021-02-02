import logo from './logo.svg';
import Navbar from "./components/Navbar";
import SideHoverbar from "./components/SideHoverbar";
import ServiceCenter from "./components/ServiceCenter";
import cityImg from "./images/davisisland.jpg";   // Need to import the image here for webpack to work
import './App.css';

function App() {
  return (
    <div className="main-color-theme m-0">
      <SideHoverbar />
      <Navbar />
      <div className="image-container">
        <img src={cityImg} alt="A tree on Davis Island overlooking the water" />
      </div>
      <ServiceCenter />
    </div>
  );
}

export default App;
