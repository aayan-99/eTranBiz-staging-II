import React from 'react'
import SecondaryHeroSection from '@/app/components/global/SecondaryHeroSection'
import Typeanimation from '@/app/components/company/Typeanimation'
import TextHeading from '@/app/components/global/TextHeading'
import { companyPageData } from '@/app/data/companyPageData'
import Image from 'next/image'
import whyUsImage from '@/app/assets/images/companypage/whyus.webp'
import OurStatement from '@/app/components/company/OurStatement'
import ValueCard from '@/app/components/company/ValueCard'
import ValueCardSmall from '@/app/components/global/ValueCardSmall'
import SecondaryButton from '../components/global/SecondaryButton'
import CaseStudyCarousal from '../components/landingpage/CaseStudyCarousal'
import redFlag from '@/app/assets/icons/redFlag.svg'

const Company = () => {

    const { title, about, industries, values, heroImage, heroContent, typeWriterTextSection, timeline } = companyPageData;

    const { para1, para2, para3, goal, header: aboutHeader } = about;

    const { constant, variableWords } = typeWriterTextSection;


    const { header: valuesHeader, valuesData } = values;

    return (
        <div>
            <SecondaryHeroSection title={title} content={heroContent} image={heroImage} />
            <div className='px-[2.5rem] md:px-[10rem] xl:px-[18rem] text-white pb-32 py-20'>
                <h1 className='text-[25px] sm:text-[30px] md:text-[40px]'>{constant}</h1>
                <Typeanimation typedStrings={variableWords} />
                <div className='py-24 mb-20'>
                    <TextHeading headingText={aboutHeader} />
                    <div className='lg:w-[90%] pt-7'>
                        <p className='text-lg mb-10'>{para1}</p>
                        <p className='text-lg mb-10'>{para2}</p>
                        <h1 className='text-4xl lg:text-5xl'>{para3}</h1>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex flex-col lg:flex-row gap-10 lg:gap-0'>
                        {
                            goal?.map((data, i) => (
                                <OurStatement key={data?.id} index={i} id={data?.id} title={data?.title} content={data?.content} />
                            ))
                        }
                    </div>
                </div>
                <div className='w-full py-40'>
                    <TextHeading headingText={`INDUSTRIES`} />
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-5'>
                        {
                            industries?.map((data) => (
                                <ValueCardSmall key={data?.id} title={data?.title} id={data?.id} />
                            ))
                        }
                    </div>
                </div>
                <div className='mt-10 text-white h-[60vh] text-3xl'>
                    <div className='w-full '>
                        <TextHeading headingText={`TIMELINE`} />
                    </div>
                    <div className='pl-10 mt-5 text-center'>
                        <div className='w-[2px] bg-gray-800 h- rounded-full flex flex-col gap-32 justify-between items-center py-10'>
                            {
                                timeline?.map((data) => (
                                    <div className='relative w-2 h-2 bg-white rounded-full hover:bg-transparent border-2 transition-all duration-300 ease-in-out group' key={data?.id}>
                                        <div className='absulute translate-x-10 flex items-center gap-6 -translate-y-10 text-left w-[700px]'>
                                            <div className='w-fit'>
                                                <Image src={redFlag?.src} width={20} height={20} alt='Red flag' />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <h1 className='group-hover:text-[#CEFF00] text-[30px] group-hover:text-[40px] transition-all duration-300 ease-in-out'>{data?.year}</h1>
                                                <h1 className='min-w-[500px] text-[18px] leading-none'>{data?.content}</h1>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='mb-32'>
                <CaseStudyCarousal />
            </div>
            <div className='w-full px-[2.5rem] md:px-[10rem] xl:px-[18rem]'>
                <div className='w-full py-24'>
                    <TextHeading headingText={valuesHeader} styles='mb-10' />
                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {
                            valuesData?.map((data) => (
                                <ValueCard key={data?.id} id={data?.id} title={data?.title} content={data?.content} iconDark={data?.iconDark} iconWhite={data?.iconWhite} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='w-full pt-24 pb-52'>
                <div className='w-full py-10 md:py-20 px-[2.5rem] md:px-[10rem] xl:px-[18rem] bg-[color:var(--secondary-color)]'>
                    <div className='w-full md:w-[60%] flex flex-col justify-center items-start'>
                        <TextHeading headingText='MEET THE TEAM' styles='mb-4' />
                        <div className='mb-5'>
                            <p className='text-white'>Our team is comprised of individuals with roots in ERP, Oracle Technologies, and professional services.Our singular mission is to utilise our vast domain and industry knowledge to help our clients uncover the capabilities of Oracle Applications, bringing in substantial business value.</p>
                        </div>
                        <SecondaryButton title='KNOW MORE ABOUT US' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Company