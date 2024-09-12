import React from 'react';
import Heading from '../Heading/Heading';
import { IoCheckmarkDone } from 'react-icons/io5';
import { FaPlay } from 'react-icons/fa';

export const AboutUs = () => {
  return (
    <div className='my-5'>
      <Heading title="About Us" />
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12 position-relative">
            <img src="/assets/about.jpg" alt="About Us" className="img-fluid" />
            <div className='d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle'>
                <FaPlay size={60} className="fs-2 p-4 custom-bg-1 rounded-circle text-white" />
            </div>
          </div>
          <div className="px-2 col-md-6 col-12 mt-3">
            <p className='fs-3 fw-bold'>Lorem ipsum, dolor sit amet dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate illum amet molestias dignissimos assumenda ipsum.</p>
            <div className='d-flex'>
            <IoCheckmarkDone size={20} className='mx-2 custom-color'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='d-flex'>
            <IoCheckmarkDone size={20} className='mx-2 custom-color'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='d-flex'>
            <IoCheckmarkDone size={20} className='mx-2 custom-color'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores provident animi amet aperiam eaque quis velit necessitatibus repudiandae ipsum corrupti.</p>

          </div>
        </div>
      </div>
    </div>
  );
};
