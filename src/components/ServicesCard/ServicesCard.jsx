import React from 'react'

const ServicesCard = (props) => {
  return (
    <div className='my-3'>
        {props.icon}
        <p className='text-center'>{props.title}</p>
        <hr className='custom-hr' />
        <p className='text-center custom-f-s'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, assumenda hic rerum dolor ipsum atque nulla magni doloribus aliquid excepturi?</p>
    </div>
  )
}

export default ServicesCard