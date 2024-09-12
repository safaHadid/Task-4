import React from 'react'
import PricingCard from '../PricingCard/PricingCard'
import Heading from '../Heading/Heading'

const Pricing = () => {
  return (
    <div className='container my-5'>
        <Heading title={'Pricing'} />
        <div className="row justify-content-center mx-auto">
            <div className="col-md-3 col-11 mb-3">
                <PricingCard type={'Free'} price={0} />
            </div>
            <div className="col-md-3 col-11 mb-3">
                <PricingCard type={'Business'} price={19} />
            </div>
            <div className="col-md-3 col-11 mb-3">
                <PricingCard type={'Developer'} price={29} />
            </div>
            <div className="col-md-3 col-11 mb-3">
                <PricingCard type={'Ultimate'} price={49} />
            </div>
        </div>
    </div>
  )
}

export default Pricing