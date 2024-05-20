'use client'

import React, { useEffect, useRef, useState } from 'react'
import SecondaryButton from '@/app/components/global/SecondaryButton'
import Image, { StaticImageData } from 'next/image'
import TextHeading from '@/app/components/global/TextHeading';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Service } from '@/app/types/serviceInterfaces';
import DataListView from '../common/DataListView';


// interface SupportServicesProps {
//     supportServices: Service[];
// }

const SupportServicesList = ({ supportServices }: { supportServices: any[] }) => {

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
            <div className='hidden md:block sticky z-10 top-24 left-[96%] rounded-full'>
                <div className='relative'>
                    <div className='absolute top-0 right-10  bg-[#232323] border border-black w-[5px] h-[80vh] flex flex-col justify-evenly items-center py-3'>
                        {
                            supportServices?.map((data) => (
                                <div key={data?.id} className={`bg-[#ffffff] text-white hover:bg-transparent hover:border-2 border-[#CEFF00] w-2 h-2 rounded-full hover:p-2 font-semibold cursor-pointer transition-all duration-500 ease-in-out relative group ${data?.id === selectedServiceId ? 'text-[#B61313]' : 'opacity-30 hover:opacity-70'}`} onClick={() => handleServiceClick(data?.id)}>
                                    <h1 className='absolute pr-3 right-[100%] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out w-[250px] text-right'>{data?.title}</h1>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='w-full mb-36 px-5 md:px-10'>
                {
                    supportServices?.map((data, i) => (
                        <div id={`service-${data?.id}`} key={data?.id} className='w-[80%] md:w-[70%] lg:w-[60%] mx-auto relative text-white py-20 rounded-2xl mb-10'>
                            <div className='w-full flex justify-center items-center gap-24'>
                                <div className='w-full max-w-[300px]'>
                                    <Image src={data?.tabImage?.src} width={300} height={300} className='w-full object-cover rounded-2xl opacity-70' alt='Service Image' />
                                </div>
                                <div className=' relative z-[5]'>
                                    <h1 className='text-5xl mb-8'>{data?.title}</h1>
                                    <p className='text-md mb-4'>{data?.about}</p>
                                    <div className={`text-md mb-5 ${pathname.includes('technologyTransformation') ? 'grid grid-cols-1 md:grid-cols-2' : ''}`}>
                                        {
                                            data?.services?.map((sub_data: any, sub_i: number) => (
                                                <div className='' key={sub_data?.id}>
                                                    <h1>{i > 0 ? <span className='text-xs mr-2'>●</span> : (<span className='text-sm mr-2'>-</span>)} {sub_data?.service}</h1>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SupportServicesList