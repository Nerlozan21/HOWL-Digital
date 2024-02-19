import { useState } from "react";
import Cursor from "./components/Cursor";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Clientel from "./components/Clientel";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [scaling, setscaling] = useState(false);
  return (
      <div className="app">
        <Cursor scaling={scaling} className="cursor"/>
        <Header></Header>
        <Banner></Banner>
        <img src="../assets/neom-bA32w6lebJg-unsplash.jpg" alt="" sizes="" srcset="" className="home-img" loading='lazy'/>
        <Clientel></Clientel>
        <Footer></Footer>
      </div>
  );
};

export default App;
