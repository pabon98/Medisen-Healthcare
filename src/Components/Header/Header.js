import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Banner from '../Banner/Banner';
import './Header.css'
const Header = () => {
const {user,logOut}=useAuth();
    return (
      
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top collapseOnSelect expand='lg' ">
        <div className="container-fluid hd">
          <a className="navbar-brand mx-5 " href="/">
          Medisen Healthcare
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent Nav_menu"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <NavLink
             
                className="Nav_link"
                to="/home"
                activeClassName="selected"
              >
                
                Home
              </NavLink>
            
              </li>
              <li className="nav-item">
              <NavLink
                className="Nav_link"
                to="/services"
                activeClassName="selected"
              >
                Services
              </NavLink>
              </li>
              <li className="nav-item">
              <NavLink
              
                className="Nav_link"
                to="/doctors"
                activeClassName="selected"
              >
                Doctors
              </NavLink>
              </li>
              <li className="nav-item">
              <NavLink
             
                className="Nav_link"
                to="/contact"
                activeClassName="selected"
              >
                Contact
              </NavLink>
              </li>
              
              <li className="nav-item mx-3 text-white">
              
              Signin as :{user?.displayName}
              
              </li>
              
            </ul>
          
            <form className="d-flex flex-fill mx-5">

              {
                user.email?
                <button
                onClick={logOut}
                className="btn btn btn-outline-danger position-absolute top-50 end-0 translate-middle-y mx-5"
                type=""
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
              
              >
               Logout
              </button>:
             <NavLink to='/login'>
                <button
                className="btn btn btn-outline-light position-absolute top-50 end-0 translate-middle-y mx-5"
                type=""
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
              
              >
               Login
              </button>
               </NavLink>}
            </form>
          
          </div>
        </div>
     </nav>
     <div>
       <Banner></Banner>
     </div>
     
        </div>
  
    );
};

export default Header;