'use client'

import React, { useState } from 'react'
import link_white from '@/app/assets/icons/link-white.svg'
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface ImageDropDownProps {
    title: string;
    image?: string | any;
    contentAbout?: string | null;
    content?: string[] | null;
}

const ImageDropdown: React.FC<ImageDropDownProps> = ({ title, image, content, contentAbout }) => {

    const [isOpen, setIsOpen] = useState(false);

    const pathname = usePathname();

    return (
        <div onClick={() => setIsOpen(!isOpen)} className={`w-full] relative px-20 py-12 rounded-xl transition-all duration-500 ease-in-out ${isOpen ? 'bg-servicebox-gradient' : 'bg-[#1A1A1A]'}`}>
            {/* <div className='w-full absolute  z-0'>
                <Image src={image} width={50} height={50} className='w-full h-full object-cover' alt="" />
            </div> */}
            <div className={`w-full flex gap-10 ${pathname.includes('oracleCloud') ? 'flex-row' : 'flex-col'}`}>
                <div className='pr-5'>
                    <h1 className={`text-2xl md:text-4xl ${isOpen ? 'text-[#CEFF00]' : 'text-white'} transition-all duration-500 ease-in-out md:min-w-[470px]`}>{title}</h1>
                </div>
                <div className={`${isOpen && !contentAbout ? 'h-[250px]' : isOpen ? 'h-[160px]' : 'h-0'} overflow-y-scroll transition-all duration-500 ease-in-out w-full`}>
                    {
                        contentAbout ? (
                            <div className='mb-6 text-white'>
                                <h1 className='md:w-[80%]'>{contentAbout}</h1>
                            </div>
                        ) : null
                    }
                    {
                        content ? (
                            <>
                                {
                                    content?.map((data, i) => (
                                        <p key={i} className='text-md mb-2 text-white md:w-[80%]'><span className='text-xs mr-2'>●</span> {data}</p>
                                    ))
                                }
                            </>
                        ) : null
                    }
                </div>
            </div>
            <span className='absolute top-10 right-5 lg:right-14'>
                <Image src={link_white?.src} width={40} height={40} className={`${isOpen ? 'rotate-180 opacity-60' : ''} transition-all duration-200 ease-in-out`} alt={'Open button'} />
            </span>
        </div>
    )
}

export default ImageDropdown