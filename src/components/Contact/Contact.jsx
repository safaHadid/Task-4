import React from 'react';
import Heading from '../Heading/Heading';
import { CiLocationOn } from 'react-icons/ci';
import { BsEnvelope } from 'react-icons/bs';
import { IoCallOutline } from 'react-icons/io5';

const Contact = () => {
  return (
    <div className="my-5">
      <div className="text-center mb-4">
        <Heading title="Contact" />
      </div>
      <img src="/assets/map.png" alt="Map" className="img-fluid" />

      <div className="container">
        <div className="row d-flex align-items-stretch mt-5">
        <div className="col-12 col-lg-6 d-flex flex-column mb-2">
          <div className="p-4 shadow w-100 text-center mb-4">
            <CiLocationOn size={50} className="mb-3 custom-color border-dotted rounded-circle p-2" />
            <p className="mb-1 fw-bold">Address</p>
            <p className="mb-0">A108 Adam Street, New York, NY 535022</p>
          </div>
          <div className="row g-4">
            <div className="col-12 col-md-6 d-flex align-items-stretch">
              <div className="p-4 shadow w-100 text-center">
                <IoCallOutline size={50} className="mb-3 custom-color border-dotted rounded-circle p-2" />
                <p className="mb-1 fw-bold">Call Us</p>
                <p className="mb-0">+1 5589 55488 55</p>
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex align-items-stretch">
              <div className="p-4 shadow w-100 text-center">
                <BsEnvelope size={50} className="mb-3 custom-color border-dotted rounded-circle p-2" />
                <p className="mb-1 fw-bold">Email Us</p>
                <p className="mb-0">info@example.com</p>
              </div>
            </div>
          </div>
        </div>

          <div className="col-11 col-lg-6 mx-auto d-flex flex-column justify-content-center p-4 shadow">
            <div className="w-100">
              <div className="d-flex gap-3 justify-content-center align-items-center mb-4">
                <input type="text" placeholder="Your Name" className="form-control border border-light-subtle rounded-0 fw-light p-2" />
                <input type="email" placeholder="Your Email" className="form-control border border-light-subtle rounded-0 fw-light p-2" />
              </div>
              <input type="text" placeholder="Subject" className="form-control border border-light-subtle rounded-0 fw-light w-100 mb-3 p-2" />
              <textarea rows="4" className="form-control border border-light-subtle rounded-0 fw-light w-100 mb-4 p-2" placeholder="Message"></textarea>
              <div className="d-flex justify-content-center">
                <button className="custom-bg-1 text-white border-0 rounded py-2 px-3">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
