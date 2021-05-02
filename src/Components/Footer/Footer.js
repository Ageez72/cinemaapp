import React from "react";
import "./Footer.scss";
import facebook from "../../imgs/facebook.svg";
import twitter from "../../imgs/twitter.svg";
import instagram from "../../imgs/instagram.svg";

function Footer(props) {
  return (
    <div className="footer">
      <img src={facebook} alt="facebook" className="socialIcon" />
      <img src={twitter} alt="twitter" className="socialIcon" />
      <img src={instagram} alt="instagram" className="socialIcon" />
      <p>© 2021 Cinema App - All Rights Reserved</p>
    </div>
  );
}
export default Footer;
