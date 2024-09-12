import React from 'react'
import Heading from '../Heading/Heading'
import GallerySlider from '../GallerySlider/GallerySlider'

const Gallery = () => {
  return (
    <div className='my-5 pb-5 pt-2'>
        <Heading title={'Gallery'} />
        <GallerySlider />
    </div>
  )
}

export default Gallery