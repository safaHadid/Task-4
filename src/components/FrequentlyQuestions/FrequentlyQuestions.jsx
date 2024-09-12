import React from 'react'
import FeaturedAccordion from '../FeaturedAccordion/FeaturedAccordion'
import Heading from '../Heading/Heading'

const FrequentlyQuestions = () => {
  return (
    <div className='custom-bg py-4'>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-12 col-lg-9'>
                    <Heading title={'Frequently Asked Questions'} body={<FeaturedAccordion/>} />
                </div>
            </div>
         </div>
    </div>
  )
}

export default FrequentlyQuestions