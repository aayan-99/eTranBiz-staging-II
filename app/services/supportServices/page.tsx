import SecondaryHeroSection from '@/app/components/global/SecondaryHeroSection'
import CaseStudyCarousal from '@/app/components/landingpage/CaseStudyCarousal';
import ServicePageHeader from '@/app/components/services/common/ServicePageHeader';
import SupportServicesList from '@/app/components/services/supportServices/SupportServicesList';
import { supportServices } from '@/app/data/serviceData';
import React from 'react'

const page = () => {

    const { pageTitle, heroImage, title, about, servicesList } = supportServices;

    return (
        <div>
            <SecondaryHeroSection title={pageTitle} image={heroImage} content='' />
            <div className='w-full px-[2.5rem] md:px-[10rem] xl:px-[18rem] pt-20'>
                <ServicePageHeader header={title} about={about} />
                <h1 className='text-2xl md:text-3xl lg:text-5xl font-[600] w-[1100px] mx-auto py-40 text-white'><span className='text-[#CEFF00]'>Maximize your ROI</span> & be rest assured your systems are under expert care</h1>
            </div>
            <div className=''>
                <SupportServicesList supportServices={servicesList} />
            </div>
            <div className='pb-52'>
                <CaseStudyCarousal />
            </div>
        </div>
    )
}

export default page