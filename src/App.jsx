import { useState } from "react";
import Cursor from "./components/Cursor";
import Header from "./components/Header";

const App = () => {
  const [scaling, setscaling] = useState(false);
  return (
    <div className="app">
      <Cursor scaling={scaling} />
      <Header></Header>
    </div>
  );
};

export default App;