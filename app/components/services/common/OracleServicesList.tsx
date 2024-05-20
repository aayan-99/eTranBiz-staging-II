'use client'

import React, { useEffect, useRef, useState } from 'react'
import SecondaryButton from '@/app/components/global/SecondaryButton'
import Image, { StaticImageData } from 'next/image'
import { enterpriseApplicationData } from '@/app/data/serviceData';
import TextHeading from '@/app/components/global/TextHeading';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Service } from '@/app/types/serviceInterfaces';


interface OracleServicesProps {
    oracleServices: Service[];
}

const OracleServicesList: React.FC<OracleServicesProps> = ({ oracleServices }) => {

    const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);

    const pathname = usePathname();

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
            const element = document.getElementById(`service-${selectedServiceId}`);
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
        <div className='relative'>
            <div className='w-full flex justify-center items-center pb-10'>
                <TextHeading headingText={`Enterprise Applications Supported`} />
            </div>
            <div className='hidden md:block w-[90%] lg:w-[75%] mx-auto sticky z-10 top-24 bg-[#232323] border border-black rounded-full'>
                <div className='w-full flex justify-evenly py-3 px-10'>
                    {
                        oracleServices?.map((data) => (
                            <h1 key={data?.id} className={`text-[#ffffff] font-semibold cursor-pointer transition-all duration-500 ease-in-out ${data?.id === selectedServiceId ? 'text-[#B61313]' : 'opacity-30 hover:opacity-70'}`} onClick={() => handleServiceClick(data?.id)}>{data?.title}</h1>
                        ))
                    }
                </div>
            </div>
            <div className='w-full pt-20 pb-10 mb-36 px-5 md:px-10'>
                {
                    oracleServices?.map((data) => (
                        <div id={`service-${data?.id}`} key={data?.id} className='w-full relative text-white py-20 md:py-36 rounded-2xl mb-10'>
                            <div className='w-[85%] lg:w-[70%] xl:w-[60%] mx-auto relative z-[5]'>
                                <h1 className='text-5xl mb-8'>{data?.title}</h1>
                                <p className='text-md mb-4'>{data?.about}</p>
                                <div className={`text-md mb-5 ${pathname.includes('technologyTransformation') ? 'grid grid-cols-1 md:grid-cols-2' : ''}`}>
                                    {
                                        data?.services?.map((sub_data, sub_i) => (
                                            <div className='' key={sub_data?.id}>
                                                <h1>{ pathname.includes('technologyTransformation') ? <span className='text-xs mr-2'>●</span> : (<>{sub_i + 1}.</>) } {sub_data?.service}</h1>
                                            </div>
                                        ))
                                    }
                                </div>
                                <p className='text-white text-md my-4'>{data?.conclusion}</p>
                                {data?.route ? <Link href={data?.route}><SecondaryButton title='READ MORE' /></Link> : null}
                            </div>
                            <div className='w-full h-full absolute top-0 left-0 z-0'>
                                <Image src={data?.tabImage?.src} fill={true} className='w-full h-full object-cover rounded-2xl opacity-70' alt='Service Image' />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default OracleServicesList