import Dropdown from '@/app/components/services/common/DropDown';
import SecondaryHeroSection from '@/app/components/global/SecondaryHeroSection'
import TextHeading from '@/app/components/global/TextHeading';
import { enterpriseApplicationData } from '@/app/data/serviceData'
import React from 'react'
import OracleServicesList from '@/app/components/services/common/OracleServicesList';
import CaseStudyCarousal from '@/app/components/landingpage/CaseStudyCarousal';
import ValueCardSmall from '@/app/components/global/ValueCardSmall';
import ServicePageHeader from '@/app/components/services/common/ServicePageHeader';
import Scope from '@/app/components/services/technologyTransformation/Scope';

const page = () => {

  const { pageTitle, heroImage, title, about, industryData, functionalAreas, oracleServices } = enterpriseApplicationData;

  console.log(oracleServices);

  return (
    <div>
      <SecondaryHeroSection title={pageTitle} image={heroImage} content='' />
      <div className='px-[2.5rem] md:px-[10rem] xl:px-[18rem] py-10'>
        <ServicePageHeader header={title} about={about} />
        <div className='w-full my-32'>
          <TextHeading headingText={industryData?.title} />
          <p className='text-md text-white'>{industryData?.about}</p>
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-4'>
            {
              industryData?.industries?.map((data) => (
                <ValueCardSmall key={data?.id} id={data?.id} title={data?.title} />
              ))
            }
          </div>
        </div>
        <div className='w-full my-36'>
          <h1 className='font-[700] text-[20px] uppercase text-[color:var(--primary-teal)]'><span className='text-[color:var(--neon)]'>Functional</span> Areas</h1>
          <div className='py-10'>
            <Dropdown dataArray={functionalAreas?.areas} />
          </div>
        </div>
      </div>
      <OracleServicesList oracleServices={oracleServices} />
      <div className='py-32 px-[2.5rem] md:px-[10rem] xl:px-[18rem]'>
        <Scope />
      </div>
      <div className='mb-52'>
      <CaseStudyCarousal />
      </div>
    </div>
  )
}

export default page