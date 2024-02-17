import React from "react";
import "../styles/FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer-cntr">
      <div className="up-cntr">
        <div className="txt-cntr">Keep track of the wolves</div>
        <div className="img-cntr">
          <img src="/src/assets/footer1.jpg" alt="" srcset="" height={200} width={200}/>
          <img src="/src/assets/footer2.jpg" alt="" srcset="" height={200} width={200}/>
          <img src="/src/assets/footer3.jpg" alt="" srcset="" height={200} width={200}/>
        </div>
      </div>
      <div className="btm-cntr">
        <div className="redrkt-cntr">
          <p>PRESS</p>
          <p>CAREERS</p>
          <p>JOIN THE PACK</p>
        </div>
        <div className="inpt-cntr">
          <input type="text" placeholder="Signup for to our newsletter" className="inpt-field"/>
        </div>
        <div className="btm-text-cntr">
          <p>All rights reserved Designed, developed & powered by HOWL Digital Agency.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
