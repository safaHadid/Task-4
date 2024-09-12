import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Hero = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{height:'450px'}}>
      <Carousel.Item>
        <img
          className="d-block w-100 object-fit-cover"
          src="/assets/hero-carousel/hero-carousel-1.jpg"
          alt="First slide"
          style={{height:'450px'}}
        />
        <Carousel.Caption className='p-5 text-black mb-5' style={{backgroundColor: 'rgba(255, 255, 255, 0.75)'}}>
          <h3 className='fw-bold'>Lorem ipsum dolor sit amet</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consectetur veniam, ducimus minus doloribus eius sunt eos voluptatibus atque similique.
          </p>
          <button className='custom-bg-1 border-0 text-white p-2 px-5 rounded'>Read more</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 object-fit-cover"
          src="/assets/hero-carousel/hero-carousel-2.jpg"
          alt="Second slide"
          style={{height:'450px'}}
        />
        <Carousel.Caption className='p-5 text-black mb-5' style={{backgroundColor: 'rgba(255, 255, 255, 0.75)'}}>
          <h3 className='fw-bold'>Lorem ipsum dolor sit amet</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consectetur veniam, ducimus minus doloribus eius sunt eos voluptatibus atque similique.
          </p>
          <button className='custom-bg-1 border-0 text-white p-2 px-5 rounded'>Read more</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 object-fit-cover"
          src="/assets/hero-carousel/hero-carousel-3.jpg"
          alt="Third slide"
          style={{height:'450px'}}
        />
        <Carousel.Caption className='p-5 text-black mb-5' style={{backgroundColor: 'rgba(255, 255, 255, 0.75)'}}>
          <h3 className='fw-bold'>Lorem ipsum dolor sit amet</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consectetur veniam, ducimus minus doloribus eius sunt eos voluptatibus atque similique.
          </p>
          <button className='custom-bg-1 border-0 text-white p-2 px-5 rounded'>Read more</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;
