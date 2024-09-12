import React from 'react'
import InfoDetailsCard from '../InfoDetailsCard/InfoDetailsCard'
import { FaUserDoctor } from 'react-icons/fa6'
import { FaAward, FaRegHospital } from 'react-icons/fa'
import { HiBeaker } from 'react-icons/hi'

const InfoDetails = () => {
  return (
    <div className='container p-5'>
        <div className="row d-flex">
            <div className="col-md-3 col-12">
                <InfoDetailsCard icon={<FaUserDoctor size={40} className="me-3 custom-color" />} number={25} text={'Doctors'} />
            </div>
            <div className="col-md-3 col-12">
                <InfoDetailsCard icon={<FaRegHospital size={40} className="me-3 custom-color" />} number={15} text={'Departments'} />
            </div>
            <div className="col-md-3 col-12">
                <InfoDetailsCard icon={<HiBeaker size={45} className="me-3 custom-color" />} number={8} text={'Research Labs'} />
            </div>
            <div className="col-md-3 col-12">
                <InfoDetailsCard icon={<FaAward size={40} className="me-3 custom-color" />} number={150} text={'Awards'} />
            </div>
            
        </div>
    </div>
  )
}

export default InfoDetails