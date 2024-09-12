import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="custom-bg">
      <div className='container'>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-6 justify-content-center py-5 my-5 border-bottom">
          <div className="col-md-4 mb-4 lh-1">
            <p className='fs-3 fw-bold mb-4'>Medicio</p>
            <p className='custom-f-s fw-light'>Lorem ipsum amet.</p>
            <p className='custom-f-s fw-light'>Lorem ipsum sit sit.</p>
            <p>
                <span className="custom-f-sfw-bold">Phone:</span> 
                <span className="value custom-f-s fw-light">+12385836262</span>
            </p>
            <p>
                <span className="fw-bold custom-f-s">Email:</span>
                <span className="value custom-f-s fw-light">info@example.com</span>
            </p>
            <div className=' w-100'>
            <ul className="nav gap-1 d-flex  w-100">
              <li className="nav-item">
                <a href="#" className="nav-link p-0 text-body-secondary  border border-dark-subtle rounded-circle p-2">
                  <FaFacebook size={16} />
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link p-0 text-body-secondary  border border-dark-subtle rounded-circle p-2">
                  <FaTwitter size={16} />
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link p-0 text-body-secondary  border border-dark-subtle rounded-circle p-2">
                  <FaInstagram size={16} />
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link p-0 text-body-secondary  border border-dark-subtle rounded-circle p-2">
                  <FaLinkedin size={16} />
                </a>
              </li>
            </ul>
        </div>
          </div>

          <div className="col mb-5">
            <h5>Useful Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary custom-f-s fw-light">Home</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary custom-f-s fw-light">About Us</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary custom-f-s fw-light">Services</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary custom-f-s fw-light">Terms of service</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary custom-f-s fw-light">Privacy policy</a>
              </li>
            </ul>
          </div>

          <div className="col mb-5">
            <h5>Our Services</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary custom-f-s fw-light">Web Design</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary custom-f-s fw-light">Web Development</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary custom-f-s fw-light">Management</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary custom-f-s fw-light">Marketing</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary custom-f-s fw-light">Graphic Design</a>
              </li>
            </ul>
          </div>

          <div className="col mb-5">
            <h5>Lorem Ipsum</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary custom-f-s fw-light">Dolor Sit</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary custom-f-s fw-light">Amet Consectetur</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary custom-f-s fw-light">Adipisicing Elit</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary custom-f-s fw-light">Facere Esse</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary custom-f-s fw-light">Distinctio Dolores</a>
              </li>
            </ul>
          </div>

          <div className="col mb-5">
            <h5>Lorem Ipsum</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary custom-f-s fw-light">Dolor Sit</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary custom-f-s fw-light">Amet Consectetur</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary custom-f-s fw-light">Adipisicing Elit</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary custom-f-s fw-light">Facere Esse</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary custom-f-s fw-light">Distinctio Dolores</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='pb-2'>
            <p className='text-center custom-f-s'>
                © Copyright <span className='fw-bold'>Medicio</span> All rights reserved
            </p>
            <p className='text-center custom-f-s'>
                Designed by <span className='text-info'>BootstrapMade</span>
            </p>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
