'use client'

import React from 'react'
import ServiceCard from './ServiceCard'
import Slider from 'react-slick';
import TextHeading from '../global/TextHeading';
import { servicesList } from '@/app/data/serviceData';

function ServicesLanding() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  return (
    <div className='pt-[50px] pb-[100px] px-10 md:px-[7rem]'>
      <TextHeading headingText='PRIMARY SERVICES' textPosition='center' />
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-4 mt-24 justify-center gap-4 justify-items-center'>
        {
          servicesList?.primaryServices?.map((data) => (
            <div className='w-fit pr-4' key={data?.id}>
              {
                data?.route ? (
                  <ServiceCard id={data?.id} title={data?.title} image={data?.image} route={data?.route} content={data?.content} />
                ) : null
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ServicesLanding