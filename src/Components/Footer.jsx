import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-container" id="footer">
        <h1 className="footer-logo">
          EP Creation<i class="fa-solid fa-camera-retro"></i>
        </h1>
        <p className="copy-right">EP © 2022</p>
        <div className="social-icons">
          <a className="retro" href="https://www.facebook.com/bam.lego.5">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/bitho.modi/" className="retro">
            {" "}
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UC2VRkMJw_IhBZOxyhBGVDGA"
            className="retro"
          >
            <i class="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
    </>
  );
}
export default Footer;
