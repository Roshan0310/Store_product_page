import React from "react";
import boss from "../assets/boss.png";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { BsBrowserChrome } from "react-icons/bs";

const Footer = () => {
  return (
    <footer id="contact">
      <div>
        <img src={boss} alt="Founder" />

        <h2>ROSHAN K</h2>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a
            href="https://www.linkedin.com/in/roshan-k-468288231/"
            target="blank"
          >
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/Roshan0310" target="blank">
            <AiFillGithub />
          </a>
          <a href="mailto:roshanrosh0310@gmail.com">
            <AiFillMail />
          </a>
          <a
            href="https://roshan0310.github.io/Roshan-portfolio/"
            target="blank"
          >
            <BsBrowserChrome />
          </a>
        </article>
      </aside>
      <a href="#home" id="arrow">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
