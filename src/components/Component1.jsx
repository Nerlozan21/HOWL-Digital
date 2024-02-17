import React from "react";
import "../styles/Component1Styles.css";

const Component1 = () => {
  return (
    <div className="cmpt1-cntr">
      <p className="first-txt-cntr">We exist bacause we want to help you navigate and harness the potential of this ever-changing digital landscape.</p>
      <div className="img-cntr">
        <img src="../assets/homeimg-1.jpg" alt="qwewe" className="img1" />
        <img src="../assets/homeimg-2.jpg" alt="dasd" className="img2" />
      </div>
    </div>
  );
};

export default Component1;
