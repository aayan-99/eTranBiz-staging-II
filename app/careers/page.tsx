import React from 'react'
import SecondaryHeroSection from '../components/global/SecondaryHeroSection'
import CareersDropdown from '@/app/components/careers/CareersDropdown'
import { careerData } from '../data/careerPageData'
import careerImage from '@/app/assets/images/careerpage/careerImage.webp'
import arrow from '@/app/assets/icons/arrow.svg'
import Image from 'next/image'

const page = () => {

  const { title, contentTitle, heroImg, heroContent, quality } = careerData;

  return (
    <div className='pb-20'>
      <SecondaryHeroSection title={title} image={heroImg} content={heroContent} />
      <div className='px-[2.5rem] md:px-[10rem] xl:px-[18rem] py-20'>
        <p className='text-2xl mb-8 text-[color:var(--primary-teal)]'>{contentTitle?.split(' ')[0]}
          <span className='text-[#CEFF00] relative mx-1'>
            {contentTitle?.split(' ')[1]}
            <div className='absolute -top-[20px] right-0'>
              <Image src={arrow?.src} width={26} height={26} alt='Arrow' />
            </div>
          </span>
        </p>
        <CareersDropdown />
        <div className='py-40'>
          <h1 className='text-white text-4xl w-[70%]'>Here are some of the <span className='text-[#CEFF00]'>qualities</span> we look for in our team members</h1>
          <div className='mt-10'>
            {
              quality?.map((data, i) => (
                <p key={i} className='text-md text-white'><span className='text-xs mr-2'>●</span> {data}</p>
              ))
            }
          </div>
        </div>
        <div className='mb-40 relative'>
          <div className='relative'>
            <Image src={careerImage?.src} width={1200} height={300} alt='Career Image' />
          </div>
          <div className='absolute left-20 bottom-16 flex flex-col text-white z-10 text-[5rem] leading-[60px] font-[900] tracking-[-0.08em]'>
            <h1 className=''>People</h1>
            <h1 className=''>Innovation</h1>
            <h1 className=''>Technology</h1>
          </div>
        </div>
        <div className='w-full'>
          <h1 className='text-white text-4xl'>If you&apos;re looking for a place to learn & grow, look no further</h1>
          <p className='my-10 text-md text-white'>At eTranBiz, we are committed to helping our employees learn and grow on the job. We offer a range of learning and development opportunities, including:</p>
          <div className='flex flex-col gap-4 text-sm text-white px-10'>
            <p><span className='text-xs mr-2'>●</span> On-the-job training and mentoring</p>
            <p><span className='text-xs mr-2'>●</span> Access to online learning resources and courses</p>
            <p><span className='text-xs mr-2'>●</span> Opportunities to attend conferences and workshops</p>
            <p><span className='text-xs mr-2'>●</span> A supportive and collaborative work environment that encourages knowledge sharing and continuous learning</p>
          </div>
          <p className='my-10 text-md text-white'>If you are looking for a challenging and rewarding career with a company that values its employees, we encourage you to explore the opportunities at eTranBiz. </p>
          <h1 className='text-3xl my-20 text-[#CEFF00]'>Apply today and join our team of dedicated professionals!</h1>
        </div>
      </div>
    </div>
  )
}

export default page