import SecondaryHeroSection from '@/app/components/global/SecondaryHeroSection';
import CaseStudyCarousal from '@/app/components/landingpage/CaseStudyCarousal';
import DataListView from '@/app/components/services/common/DataListView';
import Dropdown from '@/app/components/services/common/DropDown';
import ServicePageHeader from '@/app/components/services/common/ServicePageHeader';
import ImageHeader from '@/app/components/services/professionalServices/ImageHeader';
import { professionalServices } from '@/app/data/serviceData'
import Image from 'next/image';
import React from 'react'

const page = () => {

  const { pageTitle, heroImage, title, about, services, staffing } = professionalServices;

  return (
    <div>
      <SecondaryHeroSection title={pageTitle} image={heroImage} content='' />
      <div className='w-full px-[2.5rem] md:px-[10rem] xl:px-[18rem] py-10'>
        <ServicePageHeader header={title} />
        <div className='pt-32'>
          <ImageHeader title={about?.title} image={about?.image?.src} content={about?.content} />
        </div>
        <div className='pb-40 pt-20'>
          <Dropdown dataArray={services} />
        </div>
        <div className='pb-32 pt-14'>
          <ImageHeader title={staffing?.title} image={staffing?.image?.src} content={about?.content} />
          <div className='my-20 flex items-start justify-center text-justify'>
            {
              staffing?.types?.map((data, i) => (
                <div key={data?.id} className={`${i === 0 ? 'border-r-[0.5px] pr-20' : 'border-l-[0.5px] pl-20'} w-full h-full`}>
                  <DataListView title={data?.title} titleStyle={`text-4xl ${i === 0 ? 'text-white' : 'text-[#CEFF00]'}`} about={data?.content} />
                </div>
              ))
            }
          </div>
          <div className='text-md text-white text-justify'>
            <h1>{staffing?.conclusion}</h1>
          </div>
        </div>
        <div className='w-full pt-12 pb-32 text-white flex flex-col gap-4'>
          <h1 className='text-4xl font-normal'>Bottom Line</h1>
          <p className='text-md'>Our consulting services are tailored to meet the unique needs of each client. We work closely with our clients to understand their business goals and challenges, and then develop and implement customized solutions that help them achieve their objectives.</p>
        </div>
      </div>
      <div className='mb-44'>
        <CaseStudyCarousal />
      </div>
    </div>
  )
}

export default page