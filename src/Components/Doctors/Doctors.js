import React from 'react';
import doctor1 from '../../images/doctor1.webp'
import doctor2 from '../../images/doctor2.webp'
import doctor3 from '../../images/doctor3.webp'
import doctor4 from '../../images/doctor4.webp'
import doctor6 from '../../images/doctor6.jpg'
import doctor7 from '../../images/doctor7.jpg'
import doctor8 from '../../images/doctor8.jpg'
import doctor10 from '../../images/doctors9.jpg'

const Doctors = () => {
    return (
        <div>
           <h1>Our Doctors</h1>
           <div>
               <div className="row">
                   <div className="col-md-3">
                       <img src={doctor1} alt="" />
                       <h5>DR Adam Billard</h5>
                       <small>Heart Specialist</small>
                   </div>
                   <div className="col-md-3">
                       <img src={doctor2} alt="" />
                       <h5>DR Aderk Adinson</h5>
                       <small>Medicine Specialist</small>
                   </div>
                   <div className="col-md-3">
                       <img src={doctor3} alt="" />
                       <h5>DR Fred Macyard</h5>
                       <small>CHeart Specialist</small>
                   </div>
                   <div className="col-md-3">
                       <img src={doctor4} alt="" />
                       <h5>DR Justin Stuard</h5>
                       <small>Heart Specialist</small>
                   </div>
                   <div className="col-md-3">
                       <img src={doctor6} alt="" />
                       <h5>Robert ward</h5>
                       <small>Cardiology Specialist</small>
                   </div>
                   <div className="col-md-3">
                       <img src={doctor7} alt="" />
                       <h5>Andrew Smith</h5>
                       <small>Neurology Specialist</small>
                   </div>
                   <div className="col-md-3">
                       <img src={doctor8} alt="" />
                       <h5>Carlos Henry</h5>
                       <small>Surgon Specialist</small>
                   </div>
                   <div className="col-md-3">
                       <img width={'370px'} height={'350px'} src={doctor10} alt="" />
                       <h5>Cario marin</h5>
                       <small>Dental Specialist</small>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Doctors;