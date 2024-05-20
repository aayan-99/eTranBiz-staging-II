'use client'

import React from 'react'
import Slider from 'react-slick'
import PrimaryButton from '@/app/components/global/PrimaryButton'
import CaseStudyCarousalCard from '@/app/components/landingpage/CaseStudyCarousalCard'
import { caseStudyCarousalData } from '@/app/data/landingPageData'
import TextHeading from '@/app/components/global/TextHeading'

const CaseStudyCarousal = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
    };

    return (
        <div className='w-full px-[2.5rem] md:px-[10rem] xl:px-[18rem] pt-[50px] md:pt-[110px] pb-[60px]'>
            <div className='relative z-0'>
                <TextHeading headingText='OUR CASE STUDIES' />
                <Slider {...settings} className='py-8'>
                    {
                        caseStudyCarousalData?.map((data) => (
                            <div key={data?.id} className='mr-4'>
                                <CaseStudyCarousalCard title={data?.title} content={data?.content} image={data?.image?.src} sub_title={data?.sub_title} />
                            </div>
                        ))
                    }
                </Slider>
                <div className=''>
                    <PrimaryButton title='View all case studies' />
                </div>
            </div>
        </div>
    )
}

export default CaseStudyCarousal