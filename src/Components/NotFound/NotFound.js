import React from 'react';
import { Link } from 'react-router-dom';
import errorpage from '../../images/404 page.jpg'

const NotFound = () => {
    return (
        <div>
            <h2>Error 404!!! No result found.Please Try Again</h2>
            <img src={errorpage} alt="" />
            <br />
            <Link to="/home">
            <button className="btn btn-info px-3 py-2 my-3 rounded">Go Back Home</button>
            </Link>
        </div>
    );
};

export default NotFound;