import Cards from "../Cards/Cards";
import "./Home.css";
import slide1 from '../../images/slider1.jpg'
import slide2 from '../../images/slider2.jpg'
import slide3 from '../../images/slider3.jpg'

const Home = () => {
  return (
    <div className="slider my-5">

<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item  active">
      <img  src={slide1} className="d-block ms-auto me-auto  w-50 img-fluid" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={slide2} className="d-block ms-auto me-auto w-50 img-fluid" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={slide3} className="d-block ms-auto me-auto w-50 img-fluid" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
     
      <Cards></Cards>
      
    </div>
  );
};

export default Home;
/* 
 <div
        className=" home my-4 row d-flex justify-content-center "
      >
        <div className="container mt-5 me-5 ">
          <h1 className=" mt-4 me-5 heading text-white">
            Your Health is Our Priority
          </h1>
          <br />
          <p style={{fontWeight:"500"}} className="fs-3 mt-3 me-5 text-white fs-2">
            We can help you <br /> by providing proper treatment <br /> if you
            follow us you will be well.
          </p>
          <button className="btn btn-primary px-3 py-2 me-5">Call Us</button>
        </div>
      </div> */
