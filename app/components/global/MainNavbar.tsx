'use client'

import React, { useState } from 'react'
import logo from '@/app/assets/icons/logo-main-white.svg';
import Link from 'next/link';
import Image from 'next/image';
import downPointer from '@/app/assets/icons/down-pointer-white.svg'
import { navData } from '@/app/data/navData';
import PrimaryButton from './PrimaryButton';

const Navbar = () => {

    const [activeLinkId, setActiveLinkId] = useState<number | null>(null);

    const [activeServiceIndex, setActiveServiceIndex] = useState<number | null>(null);

    return (
        <div className='w-full hidden md:block fixed top-0 bg-gradient-to-b from-black to-transparent z-20'>
            <div className='w-full flex items-center pl-12 pr-6 py-6 relative'>
                <div className='relative z-10'>
                    <Link href={`/`}><Image src={logo?.src} width={200} height={200} alt='Main Logo' /></Link>
                </div>
                <div className='w-full flex gap-10 items-center px-14'>
                    {
                        navData?.map((data) => (
                            <div key={data?.id} onMouseEnter={() => data?.id === 1 || data?.id === 2 ? setActiveLinkId(data?.id) : null} onMouseLeave={() => setActiveLinkId(null)} className='relative'>
                                <Link href={data?.route}><h1 className='text-[14px] text-white flex items-center font-medium gap-1.5 hover:text-[color:var(--secondary-yellow)] relative z-10'>{data?.title} {data?.id === 1 || data?.id === 2 ? <Image src={downPointer?.src} width={8} height={8} className='mt-[2px]' alt='Main Logo' /> : null} </h1></Link>
                                <div className={`w-full overflow-hidden fixed top-0 z-0 left-0 bg-black bg-opacity-90 h-0 transition-all duration-300 ease-in-out ${activeLinkId !== null && activeLinkId === data?.id ? 'h-[440px]' : ''}`} >
                                    <div className={`w-[70%] ${data?.id === 2 ? 'pl-28' : ''} my-[6rem] py-10 mx-auto flex flex-col gap-8 border-t`}>
                                        {
                                            data?.subRoutes?.map((sub_data, sub_i) => (
                                                <span key={sub_data?.id} className={`group w-fit relative flex items-center gap-10`} onMouseEnter={() => sub_i === 0 || sub_i === 1 || sub_i === 2 ? setActiveServiceIndex(sub_i) : null} onMouseLeave={() => setActiveServiceIndex(null)}>
                                                    <Link href={sub_data?.route}><p className={`cursor-pointer text-[14px] font-medium text-gray-500 hover:text-white`} onClick={() => setActiveLinkId(null)}>{sub_data?.title}</p></Link>
                                                    {/* {sub_i < 3 && data?.id === 1 ? <Image src={downPointer} width={8} className='mt-[2px] -rotate-90 opacity-0 group-hover:opacity-100' alt='Main Logo' /> : null}
                                                    <div className={`flex absolute top-0 left-[130%] min-w-[180px] flex-col gap-8 text-white text-[12px] ${activeServiceIndex === sub_i ? 'flex' : 'hidden'}`}>
                                                        {
                                                            sub_data?.services?.map((serviceData, service_i) => (
                                                                <p key={service_i}>{serviceData?.title}</p>
                                                            ))
                                                        }
                                                    </div> */}
                                                </span>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='min-w-44'>
                    <PrimaryButton title={`Let's connect`} />
                </div>

            </div>
        </div>
    )
}

export default Navbar