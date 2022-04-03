import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="mt-2">
          <div className="footer-container">
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <div className="left-container text-start">
                    <i className="fas fa-heartbeat fa-2x "></i>
                    <span className="fs-2 ms-1 text-dark">Medisen</span>
                    <p className="mt-4 ">
                      <small>
                        Healthy food and healthy lifestyle can keep you safe from diseases!{" "}
                        <br />
                        Medisen care give you <br /> best medcines and treatment for your healthy life.
                      </small>
                      <p className="mt-4 ">
                        <i className="fab fa-facebook-square fa-2x"></i>
                        <i className="fab fa-instagram-square fa-2x ms-3"></i>
                        <i className="fab fa-twitter-square fa-2x ms-3"></i>
                      </p>
                    </p>
  
                    <p className="mt-5">
                      <small>Medisen © . All rights reserved.</small>
                    </p>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="footer-menu-container">
                    <ul>
                      <Link to="/home" className="footer-menu">
                        <li>Home</li>
                      </Link>
                      <Link to="/services" className="footer-menu">
                        <li>Services</li>
                      </Link>
                      <Link to="/doctors" className="footer-menu">
                        <li>Doctors</li>
                      </Link>
                      <Link to="/contact" className="footer-menu">
                        <li>Contact</li>
                      </Link>
                    </ul>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="right-footer-container">
                    <h3>Sign up for the registration</h3>
                    <input
                      className="footer-input"
                      type="text"
                      placeholder="Enter Email"
                    />
                    <button className="p-2 my-2">Registration</button>
                    <div className="phone d-flex align-items-center justify-content-center mt-4">
                      <div className="foter-phone-icon"></div>
                      <div>
                        <h5>
                          <i className="fas fa-phone-square-alt"></i> +1 4 500 666
                          48 58
                        </h5>
                      </div>
                    </div>
                    <div className="map d-flex align-items-center justify-content-center">
                      <div className="foter-phone-icon"></div>
                      <div>
                        <p>
                          160 Broadway, New York, NY 10038,
                          <br /> 110 3rd Avenue, New York, Ny 200
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="reserved">
              <hr />
              <p>© 2021 Medisen, All Rights Reserved. Design By Hasin Anjum Pabon</p>
            </div>
          </div>
        </div>
      );
};

export default Footer;