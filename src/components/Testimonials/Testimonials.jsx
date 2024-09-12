import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import TestimonialsCard from '../TestimonialsCard/TestimonialsCard';
import Heading from '../Heading/Heading';

const testimonials = [
  {
    name: 'Jena Karlis',
    role: 'Store Owner',
    text: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
    image: '/assets/testimonials/testimonials-1.jpg',
  },
  {
    name: 'Matt Brandon',
    role: 'Freelancer',
    text: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
    image: '/assets/testimonials/testimonials-2.jpg',
  },
  {
    name: 'John Larson',
    role: 'Entrepreneur',
    text: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
    image: '/assets/testimonials/testimonials-3.jpg',
  },
  {
    name: 'Jane Doe',
    role: 'Designer',
    text: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
    image: '/assets/testimonials/testimonials-4.jpg',
  },
  {
    name: 'John Doe',
    role: 'Businessman',
    text: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
    image: '/assets/testimonials/testimonials-5.jpg',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visibleItems = [];
    for (let i = 0; i < 3; i++) {
      visibleItems.push(testimonials[(activeIndex + i) % testimonials.length]);
    }
    return visibleItems;
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollLeft = containerRef.current.scrollLeft;
      const containerWidth = containerRef.current.clientWidth;
      const newIndex = Math.round(scrollLeft / containerWidth);
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    if (isMobile && containerRef.current) {
      containerRef.current.scrollTo({
        left: activeIndex * containerRef.current.clientWidth,
        behavior: 'smooth',
      });
    }
  }, [activeIndex, isMobile]);

  return (
    <Container className="my-5 py-5">
      <Heading title={'Testimonials'} />
      <div className="container justify-content-center align-items-center position-relative">
        {isMobile ? (
          <div
            ref={containerRef}
            className="d-flex overflow-auto"
            onScroll={handleScroll}
            style={{
              scrollSnapType: 'x mandatory',
              gap: '1rem',
              scrollBehavior: 'smooth', 
              height:'55vh'
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-100"
                style={{
                  scrollSnapAlign: 'center',
                }}
              >
                <TestimonialsCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        ) : (
          <Row className="justify-content-center">
            {getVisibleTestimonials().map((testimonial, index) => (
              <Col key={index} md={4} className="d-flex justify-content-center">
                <TestimonialsCard testimonial={testimonial} />
              </Col>
            ))}
          </Row>
        )}
        
        <div className="d-flex justify-content-center mt-5 pt-5">
          {testimonials.map((_, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`mx-1 rounded-circle pagination-dot ${index === activeIndex ? 'active' : ''}`}
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: index === activeIndex ? 'black' : 'grey',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;
