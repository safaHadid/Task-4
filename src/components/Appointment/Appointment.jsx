import React from 'react';
import Heading from '../Heading/Heading';

const Appointment = () => {
  return (
    <div className="p-5 custom-bg justify-content-center">
      <Heading title={'Make an appointment'} />
      <div className="container p-0 pb-5">
        <div className="d-md-flex d-block gap-4 my-3 justify-content-center">
          <input
            type="text"
            placeholder="Your Name"
            className="w-100 w-md-auto border border-gray py-3 px-5 mb-3 mb-md-0"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-100 w-md-auto border border-gray py-3 px-5 mb-3 mb-md-0"
          />
          <input
            type="number"
            placeholder="Your Number"
            className="w-100 w-md-auto border border-gray py-3 px-5 mb-3 mb-md-0"
          />
        </div>
        <div className="d-md-flex gap-4 my-3 justify-content-center">
          <input
            type="date"
            className="w-100 w-md-auto border border-gray py-3 px-5 mb-3 mb-md-0"
          />
          <select className="w-100 w-md-auto border border-gray py-3 px-5 mb-3 mb-md-0">
            <option value="">Select Department</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
          </select>
          <select className="w-100 w-md-auto border border-gray py-3 px-5 mb-3 mb-md-0">
            <option value="">Select Doctor</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
          </select>
        </div>
        <div className="w-md-75 w-100 mx-auto justify-content-center">
          <textarea
            rows="4"
            className="form-control border border-light-subtle rounded-0 fw-light w-100 mb-4 p-2"
            placeholder="Message"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
