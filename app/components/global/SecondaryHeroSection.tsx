import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface SecondaryHeroSectionProps {
    title: string;
    content: string;
    image: string | StaticImageData | any;
}

const SecondaryHeroSection: React.FC<SecondaryHeroSectionProps> = ({ title, content, image }) => {
    return (
        <div className='w-full h-[40vh] md:h-[60vh] lg:h-[75vh] relative flex justify-center items-center'>
            <div className='w-full h-full absolute inset-0 z-0'>
                <div className='w-[100%] mx-auto h-[40vh] md:h-[60vh] lg:h-[75vh] relative'>
                    <Image src={image?.src} alt='Hero Image' fill={true} className='w-full h-full object-cover' />
                </div>
                <div className='w-full h-[10vh] bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-[color:var(--primary-black)] absolute z-0' />
            </div>
            <div className='static z-10 text-white'>
                <h1 className='text-2xl md:text-3xl text-center lg:text-4xl font-[600] tracking-[0.7em]'>{title}</h1>
                {/* <p className='text-[18px] font-[500] w-[60%]'>{content}</p> */}
            </div>
        </div>
    )
}

export default SecondaryHeroSection