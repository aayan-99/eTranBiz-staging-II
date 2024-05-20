'use client';

import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import { heroCarousalData } from '@/app/data/landingPageData';

const HeroCarousal = () => {

    const settings = {
        // dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
    };

    return (
        <>
            <div className='hidden md:block'>
                <Slider {...settings}>
                    {
                        heroCarousalData?.map((data) => (
                            <div key={data?.id} className='relative w-full h-[90vh]'>
                                <Image src={data?.image?.src} fill={true} alt='Hero Image' className='z-[70] static max-h-[90vh] object-cover' />
                                <div className='absolute bg-gradient-to-b from-transparent to-[#131313] bottom-0 h-[10vh] right-0 left-0'></div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
            <div className='md:hidden block w-full'>
                <Slider {...settings}>
                    {
                        heroCarousalData?.map((data) => (
                            <div key={data?.id} className='relative w-full h-[90vh]'>
                                <Image src={data?.image?.src} fill={true} alt='Hero Image' className='z-[20] min-h-[60vh] static object-cover' />
                                <div className='absolute bg-gradient-to-b from-transparent to-[#131313] bottom-0 h-[10vh] right-0 left-0 z-[80]'></div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </>
    )
}

export default HeroCarousal