'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import link_white from '@/app/assets/icons/link-white.svg'
import SecondaryButton from '../../global/SecondaryButton';
import Link from 'next/link';

const Dropdown = ({ dataArray }: { dataArray: any }) => {

    const [currentId, setCurrentId] = useState<number | null>(null);

    const handleClickDropdown = (id: number) => {
        if (id !== currentId) {
            setCurrentId(id)
        } else {
            setCurrentId(null);
        }
    };

    return (
        <div className='w-full'>
            {
                dataArray?.map((data: any, i: number) => (
                    <div key={data?.id} className='w-full relative'>
                        <div className={`w-full flex justify-between items-center py-6 md:py-8`} onClick={() => handleClickDropdown(data?.id)}>
                            <h1 className='text-white text-[30px] md:text-[40px] font-[400]'>{data?.title}</h1>
                            <Image src={link_white?.src} width={40} height={40} className={`${currentId === data?.id ? 'rotate-180 opacity-60' : ''} transition-all duration-200 ease-in-out`} alt={'Open button'} />
                        </div>
                        <div className={`w-full ${data?.id === currentId && data?.route === null ? 'h-[170px] overflow-y-scroll pb-3' : data?.id === currentId && data?.route !== null ? 'h-[180px] overflow-y-scroll pb-3' : 'h-0'} ${i === dataArray?.length - 1 ? '' : ' border-b border-white'} flex  overflow-hidden transition-all duration-200 ease-in-out`}>
                            <div className='w-full h-full flex flex-col justify-start items-start'>
                                {
                                    data?.content?.map((content_data: any, i: number) => (
                                        <p key={i} className={`text-white font-[400] mb-4 w-[70%] ${i === 0 ? 'text-[18px]' : 'text-[14px]'}`}>{content_data}</p>
                                    ))
                                }
                                {
                                    data?.route ? <Link href={data?.route} className='mt-'><SecondaryButton title='READ MORE' /></Link> : null
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Dropdown