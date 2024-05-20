import Image, { StaticImageData } from 'next/image'
import React from 'react'

const ImageHeader = ({ image, title, content }: { image: string | StaticImageData, title: string, content: string }) => {
    return (
        <div className='flex flex-col lg:flex-row items-center gap-20'>
            <div>
                <Image src={image} width={220} height={220} alt='proServicesAboutImg' />
            </div>
            <div className='flex flex-col gap-2 text-white'>
                <h1 className='text-3xl'>{title}</h1>
                <p className='text-md max-w-[600px]'>{content}</p>
            </div>
        </div>
    )
}

export default ImageHeader