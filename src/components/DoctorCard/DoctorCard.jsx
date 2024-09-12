import React from 'react'

const DoctorCard = (props) => {
  return (
    <div>
        <div className="card border-0 shadow" style={{width: "18rem;"}}>
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text custom-f-s fw-light">{props.job}</p>
            </div>
        </div>
    </div>
  )
}

export default DoctorCard