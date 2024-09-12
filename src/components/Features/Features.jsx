import React from 'react'
import { BiFirstAid } from 'react-icons/bi'
import { FaHandHoldingMedical, FaLungs } from 'react-icons/fa'
import { FaStaffSnake } from 'react-icons/fa6'

const Features = () => {
  return (
    <div>
        <div className="container my-5 pb-3">
            <div className="row">
                <div className="col-md-6 col-12">
                    <img src="/assets/features.jpg" className="img-fluid h-100" />
                </div>
                <div className="col-md-6 col-12 mt-2">
                    <p className='fs-3 fw-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                    <hr className="custom-hr ms-0" />
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores error veritatis quo voluptas in, dolorem qui aut voluptatum assumenda, beatae consequatur ducimus minima maxime sit.</p>

                    <div className="row mt-3 align-items-center">
                        <div className="col-2 text-center "><FaHandHoldingMedical size={55} className='p-2 shadow custom-color' /> </div>
                        <div className="col">
                            <p className='fs-5 fw-bold mb-0 pb-1'>sequi eius</p>
                            <p className='custom-f-s'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur praesentium sequi eius architecto eveniet rerum?</p>
                        </div>
                    </div>
                    <div className="row mt-3 align-items-center">
                        <div className="col-2 text-center"><BiFirstAid size={55} className='p-2 shadow custom-color' /></div>
                        <div className="col">
                            <p className='fs-5 fw-bold mb-0 pb-1'>Lorem, ipsum.</p>
                            <p className='custom-f-s'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur praesentium sequi eius architecto eveniet rerum?</p>
                        </div>
                    </div>
                    <div className="row mt-3 align-items-center">
                        <div className="col-2 text-center"><FaStaffSnake size={55} className='p-2 shadow custom-color' /></div>
                        <div className="col">
                            <p className='fs-5 fw-bold mb-0 pb-1'>dolor sit</p>
                            <p className='custom-f-s'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur praesentium sequi eius architecto eveniet rerum?</p>
                        </div>
                    </div>
                    <div className="row mt-3 align-items-center">
                        <div className="col-2 text-center"><FaLungs size={55} className='p-2 shadow custom-color' /></div>
                        <div className="col">
                            <p className='fs-5 fw-bold mb-0 pb-1'>eveniet rerum</p>
                            <p className='custom-f-s'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur praesentium sequi eius architecto eveniet rerum?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features