import SecondaryHeroSection from '@/app/components/global/SecondaryHeroSection'
import TextHeading from '@/app/components/global/TextHeading';
import CaseStudyCarousal from '@/app/components/landingpage/CaseStudyCarousal';
import Dropdown from '@/app/components/services/common/DropDown';
import ImageDropdown from '@/app/components/services/common/ImageDropdown';
import ServicePageHeader from '@/app/components/services/common/ServicePageHeader';
import { cloudTransformation } from '@/app/data/serviceData'
import Image from 'next/image';
import React from 'react'

const page = () => {

  const { pageTitle, heroImage, title, about, ourGuidance, services, specializedServices } = cloudTransformation;

  return (
    <div>
      <SecondaryHeroSection title={pageTitle} image={heroImage} content='' />
      <div className='w-full px-[2.5rem] md:px-[10rem] xl:px-[18rem] py-10'>
        <ServicePageHeader header={title} about={about} />
        <div className='w-full pt-32 pb-28'>
          <div className='w-full flex flex-col lg:flex-row items-center gap-20'>
            <div>
              <Image src={ourGuidance?.image?.src} width={1200} height={300} alt='Person Image' />
            </div>
            <div className='text-white'>
              <h1 className='text-3xl mb-5'>{ourGuidance?.title}</h1>
              <div className='flex flex-col gap-3'>
                {
                  ourGuidance?.about?.map((data, i) => (
                    <p key={i} className={`${i <= 0 ? 'text-sm mb-3' : 'text-xs'}`}>{i > 0 ? <span className='text-xs mr-2'>●</span> : null}{data}</p>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
        <div className='w-full py-32'>
          <Dropdown dataArray={services} />
        </div>
        <div className='py-32'>
          <TextHeading headingText={`SPECIALIZED SERVICES`} styles='ml-8' />
          <div className='mt-12 flex flex-col gap-5'>
            {
              specializedServices?.map((data) => (
                <ImageDropdown key={data?.id} title={data?.title} content={data?.about} contentAbout={data?.contentAbout} />
              ))
            }
          </div>
        </div>
      </div>
      <div className='pb-52'>
        <CaseStudyCarousal />
      </div>
    </div>
  )
}

export default page