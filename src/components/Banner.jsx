import React from "react";
import "../styles/BannerStyles.css";

const Banner = () => {
  return (
    <div className="cmpt1-cntr">
      <div className="banner-txt-cntr">
        <p className="first-txt-cntr">
          We exist bacause we want to help you navigate and harness the
          potential of this ever-changing digital landscape.
        </p>
        <img src="../assets/homet-banner-tda-scaled--300x104.png" alt="" srcset="" className="bnr-img"/>
        <p className="second-txt-cntr">Its not a game of guesses, its a game of numberswhree growth is the ultimate goal. We leverage cutting edge technology and data driven insights to help you answer questions that answer growth</p>
      </div>
      <div className="img-cntr">
        <img src="../assets/homeimg-1.jpg" alt="qwewe" className="banner-img1" />
        <img src="../assets/homeimg-2.jpg" alt="dasd" className="banner-img2" />
      </div>
    </div>
  );
};

export default Banner;
