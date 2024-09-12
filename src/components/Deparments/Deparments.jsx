import React, { useState } from 'react';
import Heading from '../Heading/Heading';
import Department from '../Department/Department';

const departmentData = {
  Cardiology: {
    title: 'Cardiology',
    description1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repellat quos tempora minima, esse quisquam.',
    description2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repellat quos tempora minima, esse quisquam.',
    image: '/assets/departments-1.jpg',
  },
  Neurology: {
    title: 'Neurology',
    description1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repellat quos tempora minima, esse quisquam.',
    description2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repellat quos tempora minima, esse quisquam.',
    image: '/assets/departments-2.jpg',
  },
  Hepatology: {
    title: 'Hepatology',
    description1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repellat quos tempora minima, esse quisquam.',
    description2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repellat quos tempora minima, esse quisquam.',
    image: '/assets/departments-3.jpg',
  },
  Pediatrics: {
    title: 'Pediatrics',
    description1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repellat quos tempora minima, esse quisquam.',
    description2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repellat quos tempora minima, esse quisquam.',
    image: '/assets/departments-4.jpg',
  },
  Ophthalmologists: {
    title: 'Ophthalmologists',
    description1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repellat quos tempora minima, esse quisquam.',
    description2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repellat quos tempora minima, esse quisquam.',
    image: '/assets/departments-5.jpg',
  },
};

const Departments = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('Cardiology');

  const handleDepartmentClick = (department) => {
    setSelectedDepartment(department);
  };

  return (
    <div className='container my-5 py-3'>
      <Heading title={'Departments'} />
      <div className="row">
        <div className="col-md-3 col-12 mb-4">
          {Object.keys(departmentData).map((department) => (
            <p
              key={department}
              onClick={() => handleDepartmentClick(department)}
              className={`border-right my-0 py-2 fw-bold custom-f-s ${selectedDepartment === department ? 'custom-color' : ''}`}
              style={{ borderRight: selectedDepartment === department ? '2px solid #3fbbc0' : '2px solid lightgrey', cursor: 'pointer' }}
            >
              {department}
            </p>
          ))}
        </div>

        <Department data={departmentData[selectedDepartment]} />
      </div>
    </div>
  );
};

export default Departments;
