'use client'

import { Url } from 'next/dist/shared/lib/router/router';
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import PrimaryButton from '../global/PrimaryButton';

interface ServiceCardProps {
    id: number;
    image: string | any;
    title: string;
    content: string;
    route?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, content, image, route }) => {

    const [activeCard, setActiveCard] = useState<number | null>(null)

    return (
        <div onMouseEnter={() => setActiveCard(id)} onMouseLeave={() => setActiveCard(null)} key={id} className='w-full relative overflow-hidden rounded-[20px] group my-2'>
            <div className='w-full h-full relative overflow-hidden'>
                <Image src={image} width={300} height={400} className={`object-contain ${activeCard === id ? 'scale-[300%] blur-sm' : ''} transition-all duration-700 ease-in-out`} alt="" />
            </div>
            <div className={`${activeCard === id ? 'pt-3 md:pt-8 xl:pt-10' : 'translate-y-[16%] md:translate-y-[18%]'} justify-end w-full px-6 pb-8 h-full flex flex-col items-center absolute left-0 bottom-0 overflow-hidden bg-gradient-to-b from-transparent to-black bg-opacity-60 transition-all duration-500 ease-in-out`}>
                <div className='flex flex-col gap-7'>
                    <h1 className={`text-xl md:text-[26px] leading-tight text-white font-[600] transition-all duration-500 ease-in-out text-wrap flex items-end ${activeCard === id ? '' : ''}`}>{title}</h1>
                    {/* <h1 className={`text-white text-sm md:text-xl font-[500] md:min-w-[200px] transition-all duration-500 ease-in-out ${activeCard === id ? 'opacity-100' : 'opacity-0'}`}>{content}</h1> */}
                    {
                        route ? (
                            <Link href={route} className='group-hover:opacity-100 opacity-0 transition-all duration-300 ease-in-out'>
                                <PrimaryButton title='Read more' />
                            </Link>
                        ) : null
                    }
                </div>
            </div>
        </div>
    )
}

export default ServiceCard