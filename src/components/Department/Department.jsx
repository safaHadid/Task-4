import React from 'react';

const Department = ({ data }) => {
  const { title, description1, description2, image } = data;

  return (
    <>
      <div className="col-md-6 col-12 mb-4">
        <p className='fs-4 fw-bold text-lightgrey'>{title}</p>
        <p>{description1}</p>
        <p>{description2}</p>
      </div>
      <div className="col-md-3 col-12 mb-4">
        <img src={image} alt={title} className='object-fit-cover img-fluid' />
      </div>
    </>
  );
};

export default Department;
