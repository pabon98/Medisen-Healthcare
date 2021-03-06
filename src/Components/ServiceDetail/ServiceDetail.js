import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetail.css'

const ServiceDetail = () => {
    //useparam hook for going another page dynamically
    const{detailsid} = useParams()
    const[data,setData] = useState([])
    useEffect( ()=>{
        fetch("/fakedata.json")
        .then(res=>res.json())
        .then(data=> setData(data))
    },[])
    const exactItem = data.filter(td=> td.id == detailsid)
    console.log(exactItem)
    return (
        <div className="service-detail">
            <h2> Service Detail</h2>
            <img src={exactItem[0]?.image} alt="" />
            <h3>Name: {exactItem[0]?.name}</h3>
            <h4>Description: {exactItem[0]?.description.slice(0,100)}</h4>
            <h3>Price: {exactItem[0]?.price}</h3>
            <h3>Facility: {exactItem[0]?.facility}</h3>
            
        </div>
    );
};

export default ServiceDetail;