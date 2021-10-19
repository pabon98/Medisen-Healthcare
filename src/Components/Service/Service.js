import React from 'react';
import './Service.css'

const Service = (props) => {
    const{image,name,price,facility,servicetime,description} = props.service
    return (
        <div className="col-md-4 service">
            <div className="card mb-2" style={{"width": "20rem"}}>
  <img src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{description.slice(0,80)}</p>
    <p>Price:{price}</p>
    <p>Facility:{facility}</p>
    <p>Servicetime:{servicetime}</p>
    <a href="#visit" className="btn btn-primary px-4 py-2">Visit</a>
  </div>
</div>
        </div>
    );
};

export default Service;