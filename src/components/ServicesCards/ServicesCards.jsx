import React from 'react'
import Heading from '../Heading/Heading'
import ServicesCard from '../ServicesCard/ServicesCard'
import { FaHeartbeat, FaIdBadge, FaTablets } from 'react-icons/fa'

const ServicesCards = () => {
  return (
    <div className=' container my-5 py-3'>
        <Heading title={'Services'} />
        <div className="row">
            <div className="col-md-4 col-12 px-5 my-2 text-center">
                <ServicesCard icon={<FaHeartbeat size={80} className='custom-color mb-4 p-4 rounded-circle shadow-lg' />}
                title={'Lorem ipsum'} 
                />
            </div>
            <div className="col-md-4 col-12 px-5 my-2 text-center">
                <ServicesCard icon={<FaHeartbeat size={80} className='custom-color mb-4 p-4 rounded-circle shadow-lg' />}
                title={'Lorem ipsum'} 
                />
            </div>
            <div className="col-md-4 col-12 px-5 my-2 text-center">
                <ServicesCard icon={<FaIdBadge size={80} className='custom-color mb-4 p-4 rounded-circle shadow-lg' />}
                title={'Lorem ipsum'} 
                />
            </div>
            <div className="col-md-4 col-12 px-5 my-2 text-center">
                <ServicesCard icon={<FaHeartbeat size={80} className='custom-color mb-4 p-4 rounded-circle shadow-lg' />}
                title={'Lorem ipsum'} 
                />
            </div>
            <div className="col-md-4 col-12 px-5 my-2 text-center">
                <ServicesCard icon={<FaTablets size={80} className='custom-color mb-4 p-4 rounded-circle shadow-lg' />}
                title={'Lorem ipsum'} 
                />
            </div>
            <div className="col-md-4 col-12 px-5 my-2 text-center">
                <ServicesCard icon={<FaHeartbeat size={80} className='custom-color mb-4 p-4 rounded-circle shadow-lg' />}
                title={'Lorem ipsum'} 
                />
            </div>
        </div>
    </div>
  )
}

export default ServicesCards