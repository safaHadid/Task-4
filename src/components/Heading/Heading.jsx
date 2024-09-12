import React from 'react'

const Heading = (props) => {
  return (
    <div className='justify-contnet-center my-5'>
        <h2 className='text-center fw-bolder'>{props.title}</h2>
        <hr className='custom-hr' />
        <p className='text-center mb-5 fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, pariatur.</p>
        {props.body}
    </div>
  )
}

export default Heading