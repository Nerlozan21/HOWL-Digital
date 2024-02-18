import React from "react";
import "../styles/FooterStyles.css";

const Footer = () => {
  return (
    <div className="ftr-main-ctr">
      <div className="top-cntr">
        <h2>
          Ready to accelerate your business? 
          <a href="">Let's talk.</a>
        </h2>
      </div>
      <div className="footer-cntr">
        <div className="up-cntr">
          <div className="txt-cntr">
            <p>Keep track of <br />the wolves</p>
            <img src="../assets/feedArrow.png" alt="" srcset="" />
          </div>
          <div className="img-cntr">
            <img
              src="../assets/footer1.jpg"
              alt=""
              srcset=""
              height={200}
              width={200}
            />
            <img
              src="../assets/footer2.jpg"
              alt=""
              srcset=""
              height={200}
              width={200}
            />
            <img
              src="../assets/footer3.jpg"
              alt=""
              srcset=""
              height={200}
              width={200}
            />
          </div>
        </div>
        <div className="btm-cntr">
          <div className="redrkt-cntr">
            <p>PRESS</p>
            <p>CAREERS</p>
            <p>JOIN THE PACK</p>
          </div>
          <div className="inpt-cntr">
            <input
              type="text"
              placeholder="Signup for to our newsletter"
              className="inpt-field"
            />
          </div>
          <div className="btm-text-cntr">
            <p>
              All rights reserved Designed, developed & powered by HOWL Digital
              Agency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
