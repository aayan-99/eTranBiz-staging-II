import React from 'react'
import logo_white from '@/app/assets/icons/logo-main-white.svg'
import Image from 'next/image';
import TextSlider from './TextSlider'
import ContactForm from './ContactForm'
import { footerData } from '@/app/data/footerData';
import Link from 'next/link';

function Footer() {

    return (
        <div className='w-full'>
            <div className='w-full flex flex-col xl:flex-row  px-[2.5rem] md:px-[10rem] xl:px-[18rem] gap-20'>
                <div className='xl:w-full flex flex-col justify-center items-staer'>
                    <ContactForm />
                </div>
                <div className='xl:w-full flex justify-start xl:justify-end items-start'>
                    <div className='w-full max-w-[450px] xl:text-right'>
                        <h1 className='text-[25px] text-[color:var(--primary-teal)] font-[800]'>{footerData?.contact?.title}</h1>
                        <h1 className='text-white text-[42px] font-[400] leading-none mt-3'>{footerData?.contact?.sub_title_1}</h1>
                        <h1 className='text-white text-[42px] font-[400] leading-none mb-6'>{footerData?.contact?.sub_title_2}</h1>
                        <div className='text-white text-[18px] flex flex-col gap-2'>
                            <p>{footerData?.contact?.content_1}</p>
                            <p>{footerData?.contact?.content_2}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full pt-[200px]">
                <TextSlider />
            </div>
            <div className='w-full p-5'>
                <div className='w-full rounded-[20px] bg-[color:var(--secondary-color)] px-8 py-6'>
                    <div className='w-full flex flex-col md:flex-row gap-10 md:gap-[150px] mb-10 md:mb-0'>
                        <div>
                            <Image src={logo_white?.src} width={150} height={150} alt='Main logo' />
                        </div>
                        <div className='flex gap-[50px] md:gap-[100px]'>
                            {
                                footerData?.links?.map((data) => (
                                    <div key={data?.id} className='flex flex-col gap-1'>
                                        <h1 className='font-[500] text-[17px] text-white'>{data?.title}</h1>
                                        <div className='flex flex-col'>
                                            {
                                                data?.links?.map((link_data) => (
                                                    <Link href={link_data?.route} key={link_data?.id} className='text-white text-[14px]'>{link_data?.title}</Link>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='w-full flex md:justify-end mb-10 md:mb-0'>
                        <div className='flex flex-col md:text-right'>
                            <h1 className='text-[22px] font-[700] text-white'>{footerData?.subscribe?.header}</h1>
                            <p className='max-w-[350px] text-[15px] text-white'>{footerData?.subscribe?.content}</p>
                        </div>
                    </div>
                    <div className='w-full flex flex-col md:flex-row gap-3 md:gap-0 md:justify-between mt-3 mb-10 md:mb-0'>
                        <div className='w-fit md:w-full flex justify-start items-end gap-4'>
                            {
                                [1,1,1]?.map((data) => (
                                    <div key={data} className='w-4 h-4 bg-gray-400 rounded-full'></div>
                                ))
                            }
                        </div>
                        <div className='w-full flex md:justify-center items-end'>
                            <h1 className='text-white text-[14px] font-[500]'>{footerData?.copyright}</h1>
                        </div>
                        <div className='w-full flex md:justify-end items-center'>
                            <input type="text" className='w-full max-w-[300px] px-3 py-2 rounded-[10px] bg-transparent text-white outline-none border' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer