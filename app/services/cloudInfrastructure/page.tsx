import SecondaryHeroSection from '@/app/components/global/SecondaryHeroSection'
import TextHeading from '@/app/components/global/TextHeading';
import CloudInfrastructureDetailsList from '@/app/components/services/common/CloudInfrastructureDetailsList';
import ImageDropdown from '@/app/components/services/common/ImageDropdown';
import ServicePageHeader from '@/app/components/services/common/ServicePageHeader';
import { cloudInfrustructure } from '@/app/data/serviceData'
import React from 'react'

const page = () => {

    const { pageTitle, heroImage, title, about, aboutOracle } = cloudInfrustructure;

    return (
        <div>
            <SecondaryHeroSection title={pageTitle} image={heroImage} content='' />
            <div className='w-full px-[2.5rem] md:px-[10rem] xl:px-[18rem] py-10'>
                <ServicePageHeader header={title} about={about} />
                <CloudInfrastructureDetailsList aboutOracle={aboutOracle} />
                <div className='w-full pb-40'>
                    <h1 className='text-4xl font-normal text-white'>Contact us today to learn more about our services and how we can help your <span className='text-[#CEFF00]'>business succeed on the Oracle cloud.</span></h1>
                </div>
            </div>
        </div >
    )
}

export default page