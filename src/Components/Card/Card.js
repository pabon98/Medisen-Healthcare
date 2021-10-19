import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  const { name, image, description,price,id } = props.data;
  return (
  
      <div className="col-md-4">
        <div className="card mx-5 mb-3" style={{ width: "18rem" }}>
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description.slice(0, 100)}</p>
            <h4 className="card-text">Price:{price}</h4>
           <Link to={`/details/${id}`}>
           <button className="btn btn-warning">Details</button>
           </Link>
          </div>
        </div>
      </div>
     
  );
};

export default Card;
