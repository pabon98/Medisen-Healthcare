import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../images/banner.png'
import bg from '../../images/banner_bg.png.webp'
import './Banner.css'

const Banner = () => {
    return (
        <div style={{backgroundImage: `url(${bg})`}} className="banner">
          <div className="row d-flex justify-content-center align-items-center p-4">
          
            <div className="col-md-6">
                <p>Welcome to Medicare</p>
              <h1 className="fs-1 mx-4">
                We are always here <br /> for your better care<br /> 
              </h1>
              <Link to="/login">
              <button className="border-0 rounded px-3 py-3 mt-3">Make an Appointment</button>
              </Link>
            </div>
            <div className="col-md-6">
            <img className="w-75" src={banner} alt="" />
            </div>
          </div>
        </div>
      );
};

export default Banner;