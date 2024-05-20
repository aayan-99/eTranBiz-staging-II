import SecondaryHeroSection from '@/app/components/global/SecondaryHeroSection'
import ServicePageHeader from '@/app/components/services/common/ServicePageHeader';
import CaseStudyCarousal from '@/app/components/landingpage/CaseStudyCarousal';
import OracleServicesList from '@/app/components/services/common/OracleServicesList';
import { technologyTransformationData } from '@/app/data/serviceData'
import React from 'react'
import Dropdown from '@/app/components/services/common/DropDown';

const page = () => {

  const { pageTitle, heroImage, title, about, extraAboutText, oracleServices, otherSolutions } = technologyTransformationData;

  return (
    <div>
      <SecondaryHeroSection title={pageTitle} image={heroImage} content='' />
      <div className='w-full px-[2.5rem] md:px-[10rem] xl:px-[18rem] py-10'>
        <ServicePageHeader header={title} about={about} extraAbout={extraAboutText} />
      </div>
      <div>
        <OracleServicesList oracleServices={oracleServices} />
      </div>
      <div className='my-32 w-full px-[2.5rem] md:px-[10rem] xl:px-[18rem]'>
        <Dropdown dataArray={otherSolutions} />
      </div>
      <div className='mb-52'>
        <CaseStudyCarousal />
      </div>
    </div>
  )
}

export default page