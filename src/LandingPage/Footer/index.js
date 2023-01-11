import React from "react";
import "./index.css";
import styled from "styled-components";
import {FaDiscord, FaInstagram, FaYoutube} from "react-icons/fa"
const Footer = () => {
  return (
    <div id="Foot">
    <Wrapper>
      <section className="contact-short">
        <div className="contact">
          <div>
            <h1>LINQUESTER</h1>
          </div>
          <div>
            <button>Get started</button>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="footer-about">
            <h3>LINQUESTER</h3>
            <p>
              lorem2ndcjds whvn cnwuLV O BVUWOAVR 
            </p>
            <div className="footer-contact">
           <h3>Call Us</h3>
           <h3>+91 123456789</h3>
        </div>
          </div>
          
          <div className="footer-subscribed">
            <h3>Subscribe to get latest info abt technologies</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <div>
             <button>Subscribe</button></div>
            </form>
            
          </div>
          <div className="footer-social">
                <h3>Follow Us</h3>
                <div className="footer-social-icons">
                 <div>
                    <a><FaDiscord className="icons"/></a>
                 </div>
                 <div>
                    <a><FaInstagram className="icons"/></a>
                 </div>
                 <div>
                    <a><FaYoutube className="icons"/></a>
                 </div>
                </div>
        </div>
        </div>
        
      </footer>
    </Wrapper></div>
  );
};
const Wrapper = styled.section``;

export default Footer;
