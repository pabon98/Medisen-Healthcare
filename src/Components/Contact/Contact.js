import React from "react";

const Contact = () => {
  return (
    <div>
      <h3>Get In Touch With Us</h3>

      <div className="">
        <form className="row g-3 ms-auto me-auto w-75">
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="inputPassword4" />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="col-12">
            <label for="inputAddress2" className="form-label">
              Enter Message
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Tell Your Problem"
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary px-3 py-2 rounded">
              Submit
            </button>
            <br />
            <br />
            <div className= "text-center">
            <h4>Contact Us</h4>
            <h5> Our Telephone: <i className="fas fa-phone-square-alt"></i> 1 4 500 666 48 58</h5>
            <h5>Email: medisen@yahoo.com</h5>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
