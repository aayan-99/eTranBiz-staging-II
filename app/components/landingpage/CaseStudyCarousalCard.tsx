import React from 'react'
import SecondaryButton from '../global/SecondaryButton'
import PrimaryButton from '../global/PrimaryButton'
import Image, { StaticImageData } from 'next/image'

interface CaseStudyCarousalCardProps {
    title: string;
    sub_title: string;
    content: string;
    image: string | any;
}

const CaseStudyCarousalCard: React.FC<CaseStudyCarousalCardProps> = ({ title, sub_title, content, image }) => {
    return (
        <div className='w-full flex flex-col md:flex-row gap-10 md:gap-0 mx-5'>
            <div className='w-full'>
                <div className='w-fit max-w-[550px] flex flex-col'>
                    <p className='text-[40px] text-white leading-[40px] mt-5 mb-1'>{title}</p>
                    <p className='text-[28px] leading-[30px] mt-5 mb-2.5 text-[color:var(--primary-yellow)]'>{sub_title}</p>
                    <p className='text-[16px] text-white mt-2.5 mb-5 font-[500]'>{content}</p>
                    <div className='flex flex-col gap-5'>
                        <SecondaryButton title='READ MORE' />
                    </div>
                </div>
            </div>
            <div className='w-fit aspect-square overflow-hidden relative h-fit rounded-3xl mr-5'>
                <Image src={image} width={600} height={600} alt='case study' className='rounded-xl' />
            </div>
        </div>
    )
}

export default CaseStudyCarousalCard