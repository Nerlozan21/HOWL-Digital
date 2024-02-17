import { useState } from "react";
import Cursor from "./components/Cursor";
import Header from "./components/Header";
import Component1 from "./components/Component1";
import Clientel from "./components/Clientel";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [scaling, setscaling] = useState(false);
  return (
    // <AnimatePresence>
      <div className="app">
        <Cursor scaling={scaling} />
        <Header></Header>
        <Component1></Component1>
        <img src="../assets/neom-bA32w6lebJg-unsplash.jpg" alt="" sizes="" srcset="" className="home-img"/>
        <Clientel></Clientel>
        <Footer></Footer>
      </div>
    // </AnimatePresence>
  );
};

export default App;
