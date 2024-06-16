import React from "react";
import logo from '../../Assets/logo.png'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import MessageIcon from '@mui/icons-material/Message';
import FacebookIcon from '@mui/icons-material/Facebook';
import "./Fotter.css";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="firstcontainer">
        <div className="contactinfo">
          <div className="logo">
            <img src={logo} alt="logo"/>
            <p>SERIK</p>
            </div>
        </div>
        <ul className="footer_links">
            <li>Company</li>
            <li>Products</li>
            <li>Office</li>
            <li>About</li>
            <li>Contact</li>

        </ul>

        <div className="social_icons">
          <WhatsAppIcon fontSize="medium" />
          <InstagramIcon fontSize="medium" />
          <MessageIcon fontSize="medium" />
          <FacebookIcon fontSize="medium" />
        </div>
      </div>
      <div className="footer-line"></div>
      <div className="secondcontainer">
        <p>@Copyright 2024, Serik E-commerce</p>
      </div>
    </div>
  );
};

export default Footer;