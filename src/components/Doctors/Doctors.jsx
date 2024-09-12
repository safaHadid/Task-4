import React from 'react'
import Heading from '../Heading/Heading'
import DoctorCard from '../DoctorCard/DoctorCard'

const Doctors = () => {
  return (
    <div className='custom-bg py-3'>
        <Heading title={'Doctors'} />
        <div className="container">
        <div className="row pb-5">
            <div className="col-11 col-md-3 mb-3 mx-auto ">
                <DoctorCard image={'/assets/doctors/doctors-1.jpg'} name={'Walter White'} job={'Chief Medical'} />
            </div>
            <div className="col-11 col-md-3 mb-3 mx-auto ">
                <DoctorCard image={'/assets/doctors/doctors-2.jpg'} name={'Sarah Jhonson'} job={'Anesthesiologist'} />
            </div>
            <div className="col-11 col-md-3 mb-3 mx-auto ">
                <DoctorCard image={'/assets/doctors/doctors-3.jpg'} name={'William Anderson'} job={'Cardiologist'} />
            </div>
            <div className="col-11 col-md-3 mb-3 mx-auto ">
                <DoctorCard image={'/assets/doctors/doctors-4.jpg'} name={'Amanda Jepson'} job={'Neurosurgeon'} />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Doctors