import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const[services,setServices]= useState([])
    useEffect( ()=>{
        fetch('./fakedata.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className="container">
            <h1>Our More Services</h1>
            <div className="row mt-5">
            {
              services.slice(6,12).map(service=>
              <Service
              key={service.key}
              service={service}>    
              </Service>)
            }
            </div>
           
        </div>
    );
};

export default Services;