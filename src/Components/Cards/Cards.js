import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Cards.css'

const Cards = () => {
    const[datas,setDatas] = useState([])
    useEffect( ()=>{
        fetch('./fakedata.json')
        .then(res=> res.json())
        .then(data=> setDatas(data))
    },[])
    return (
        <div className="my-5">
            <h1>Explore Our Special Service</h1>
            <br />
            <div className="row ">
                {
                  datas.slice(0,6).map(data=>
                  <Card
                  data={data}
                  key={data.key}
                  ></Card>)
                }
            </div>
            <div className="experience my-5 py-5 text-white">
            <h1>Why Choose The Medisen Clinic</h1>
            <div className="row my-4 py-5">
                <div className="col-md-3">
                <i className="fas fa-book fa-3x"></i>
                 <h2>Easy booking</h2>
                 <p>Booking an appointment at our dental clinic is as easy as doing 2 clicks!</p>
                </div>
                <div className="col-md-3">
                <i className="fas fa-users fa-3x"></i>
                    <h2>Experience</h2>
                    <p>Combined, our 5 Senior Doctors have over <br /> half a century of practical experience. They are ready to put it to action for you!</p>
                </div>
                <div className="col-md-3">
                <i className="far fa-clock fa-3x"></i>
                    <h2>Flexible schedule</h2>
                    <p>We work during all state holidays,<br /> besides working till late during the regular days. In case of emergencies we accept weekend bookings.</p>
                </div>
                <div className="col-md-3">
                <i className="fas fa-thumbs-up fa-3x"></i>
                    <h2>Best price guarantee</h2>
                    <p>Our reasonable prices made thousands <br /> of people smile with a new, beautiful smile, as never before!!</p>
                </div>
            </div>
            </div>

          
            

        </div>
    );
};

export default Cards;