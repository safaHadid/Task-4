import React from 'react'

const InfoDetailsCard = (props) => {
  return (
    <div>
        <div className='shadow-lg border-0 p-4 my-5' style={{width: '18rem;'}}>
            <div className="d-flex align-items-center">
                {props.icon}
                <div>
                    <p className="fw-bold fs-1 mb-0">{props.number}</p>
                    <p className="mb-0">{props.text}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoDetailsCard