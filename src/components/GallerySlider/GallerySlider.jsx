import React, { useEffect, useRef } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';

const GallerySlider = () => {
  const splideRef = useRef(null);

  useEffect(() => {
    const splideInstance = new Splide(splideRef.current, {
      type: 'loop',
      perPage: 5,
      focus: 'center',
      gap: '1rem',
      pagination: true,
      arrows: true,
      breakpoints: {
        1200: {
          perPage: 4,
        },
        992: {
          perPage: 3,
        },
        768: {
          perPage: 1,
        },
      },
    }).mount();

    return () => {
      splideInstance.destroy();
    };
  }, []);

  return (
    <div className="container my-5">
      <div className="splide" ref={splideRef}>
        <div className="splide__track">
          <ul className="splide__list">
            <li className="splide__slide">
              <img src="/assets/gallery/gallery-1.jpg" alt="Slide 1" className="img-fluid w-100" />
            </li>
            <li className="splide__slide">
              <img src="/assets/gallery/gallery-2.jpg" alt="Slide 2" className="img-fluid w-100" />
            </li>
            <li className="splide__slide">
              <img src="/assets/gallery/gallery-3.jpg" alt="Slide 3" className="img-fluid w-100" />
            </li>
            <li className="splide__slide">
              <img src="/assets/gallery/gallery-4.jpg" alt="Slide 4" className="img-fluid w-100" />
            </li>
            <li className="splide__slide">
              <img src="/assets/gallery/gallery-5.jpg" alt="Slide 5" className="img-fluid w-100" />
            </li>
            <li className="splide__slide">
              <img src="/assets/gallery/gallery-6.jpg" alt="Slide 6" className="img-fluid w-100" />
            </li>
            <li className="splide__slide">
              <img src="/assets/gallery/gallery-7.jpg" alt="Slide 7" className="img-fluid w-100" />
            </li>
            <li className="splide__slide">
              <img src="/assets/gallery/gallery-8.jpg" alt="Slide 8" className="img-fluid w-100" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};


export default GallerySlider;
