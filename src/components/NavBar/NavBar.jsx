import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <>
      <div className="custom-bg-1 py-2 text-white d-md-block d-none">
        <div className="container d-flex justify-content-between align-items-center">
            <div>
                <i className="bi bi-clock me-2"></i> Monday - Saturday, 8AM to 10PM
            </div>
            <div>
                <i className="bi bi-telephone me-2"></i> Call us now +1 5589 55488 55
            </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="/assets/logo.png" alt="Logo" style={{ height: '40px' }} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link  custom-f-s custom-color" href="/">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-f-s" href="/">ABOUT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-f-s" href="/">SERVICES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-f-s" href="/">DEPARTMENTS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link  custom-f-s" href="/">DOCTORS</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle  custom-f-s" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  DROPDOWN
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item  custom-f-s" href="/"></a></li>
                  <li><a className="dropdown-item  custom-f-s" href="/"></a></li>
                  <li><a className="dropdown-item  custom-f-s" href="/"></a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link  custom-f-s" href="/">CONTACT</a>
              </li>
            </ul>
            <button className="btn  custom-f-s custom-bg-1 text-white ms-lg-3">Make an Appointment</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
