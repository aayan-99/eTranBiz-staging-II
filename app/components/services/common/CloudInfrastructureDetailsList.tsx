'use client'

import React, { useEffect, useRef, useState } from 'react'
import SecondaryButton from '@/app/components/global/SecondaryButton'
import Image, { StaticImageData } from 'next/image'
import { enterpriseApplicationData } from '@/app/data/serviceData';
import TextHeading from '@/app/components/global/TextHeading';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Service } from '@/app/types/serviceInterfaces';


interface AboutOracleProps {
    aboutOracle: {
        id: number;
        title: string;
        content: {
            id: number;
            title: string;
            about: string[];
        }[]
    }[];
}

const CloudInfrastructureDetailsList: React.FC<AboutOracleProps> = ({ aboutOracle }) => {

    const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);

    const handleServiceClick = (serviceId: number) => {
        if (selectedServiceId !== null) {
            setSelectedServiceId(null);
        } else {
            setSelectedServiceId(selectedServiceId);
        }
        setSelectedServiceId(serviceId);
    };

    useEffect(() => {
        if (selectedServiceId !== null) {
            const element = document.getElementById(`oracle-${selectedServiceId}`);
            if (element) {
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = window.pageYOffset + elementPosition - 180; // Set the desired offset value
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    }, [selectedServiceId]);

    return (
        <div className='relative pt-32'>
            <div className='hidden md:block w-[90%] lg:w-[75%] mx-auto sticky z-10 top-24 bg-[#232323] border border-black rounded-full'>
                <div className='w-full flex justify-evenly py-3 px-10'>
                    {
                        aboutOracle?.map((data) => (
                            <h1 key={data?.id} className={`text-[#ffffff] font-semibold cursor-pointer transition-all duration-500 ease-in-out ${data?.id === selectedServiceId ? 'text-[#B61313]' : 'opacity-30 hover:opacity-70'}`} onClick={() => handleServiceClick(data?.id)}>{data?.title}</h1>
                        ))
                    }
                </div>
            </div>
            <div className='text-white w-full flex flex-col pb-6'>
                {
                    aboutOracle?.map((data, index: number) => (
                        <div id={`oracle-${data?.id}`} className={`w-full py-32 ${index === 0 ? 'border-b-2' : ''}`} key={data?.id}>
                            <h1 className='py-10 text-4xl'>{data?.title?.split(' ')[0]} <span className='text-[#CEFF00]'>{data?.title?.split(' ')[1]}</span></h1>
                            <div className='w-full flex flex-col gap-16'>
                                {
                                    data?.content?.map((sub_data) => (
                                        <div className='w-full' key={data?.id}>
                                            <TextHeading headingText={sub_data?.title} />
                                            {
                                                sub_data?.id === 1 ? (
                                                    <div className='w-full text-sm flex flex-col gap-5 mt-5'>
                                                        <h1>{sub_data?.about[0]}</h1>
                                                        <div className='flex items-center gap-7'>
                                                            {
                                                                sub_data?.about?.slice(1)?.map((about_sub_data, i: number) => (
                                                                    <p key={i}><span className='text-xs mr-2 mb-2'>●</span> {about_sub_data}</p>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className='w-full text-sm flex flex-col gap-5 mt-5'>
                                                        {
                                                            sub_data?.about?.map((about_sub_data, i: number) => (
                                                                <p key={i}>{i > 0 ? <span className='text-xs mr-2 mb-2'>●</span> : null}{about_sub_data}</p>
                                                            ))
                                                        }
                                                    </div>
                                                )
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CloudInfrastructureDetailsList