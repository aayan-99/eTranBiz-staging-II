'use client'

import React, { useState } from 'react'
import SecondaryButton from '@/app/components/global/SecondaryButton';
import Image from 'next/image';
import { careerData } from '@/app/data/careerPageData';
import PrimaryButton from '../global/PrimaryButton';

const CareersDropdown = () => {

    const [currentId, setCurrentId] = useState<number | null>(null);

    // const { careerDropdown } = careerData;

    const handleClickDropdown = (id: number) => {
        if (id !== currentId) {
            setCurrentId(id)
        } else {
            setCurrentId(null);
        }
    };

    const careerDropdown = [
        {
            id: 0,
            title: 'Oracle Apps DBA',
            subTitle: '>Hyderabad, 7 years',
            content: [
                {
                    id: 'content-1',
                    title: '> Hyderabad, 3 years',
                    data: [
                        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                    ],
                },
                {
                    id: 'content-2',
                    title: 'Responsibilities',
                    data: [
                        `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
                        `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
                        `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
                    ],
                },
                {
                    id: 'content-3',
                    title: 'Qualifications',
                    data: [
                        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an un.`,
                        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an un.`,
                        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an un.`,
                    ],
                },
            ],
        },
        {
            id: 1,
            title: 'Banking & Finance',
            subTitle: '> Hyderabad, 7 years',
            content: [
                {
                    id: 'content-1',
                    title: '> Hyderabad, 3 years',
                    data: [
                        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                    ],
                },
                {
                    id: 'content-2',
                    title: 'Responsibilities',
                    data: [
                        `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
                        `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
                        `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
                    ],
                },
                {
                    id: 'content-3',
                    title: 'Qualifications',
                    data: [
                        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an un.`,
                        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an un.`,
                        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an un.`,
                    ],
                },
            ],
            // image: clientImage,
        },
        {
            id: 2,
            title: 'Retails',
            subTitle: '> Hyderabad, 7 years',
            content: [
                {
                    id: 'content-1',
                    title: '> Hyderabad, 3 years',
                    data: [
                        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                    ],
                },
                {
                    id: 'content-2',
                    title: 'Responsibilities',
                    data: [
                        `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
                        `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
                        `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
                    ],
                },
                {
                    id: 'content-3',
                    title: 'Qualifications',
                    data: [
                        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an un.`,
                        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an un.`,
                        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an un.`,
                    ],
                },
            ],
            // image: clientImage,
        },
        {
            id: 3,
            title: 'Aviation & Automotive',
            subTitle: '> Hyderabad, 7 years',
            content: [
                {
                    id: 'content-1',
                    title: '> Hyderabad, 3 years',
                    data: [
                        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                    ],
                },
                {
                    id: 'content-2',
                    title: 'Responsibilities',
                    data: [
                        `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
                        `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
                        `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
                    ],
                },
                {
                    id: 'content-3',
                    title: 'Qualifications',
                    data: [
                        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an un.`,
                        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an un.`,
                        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an un.`,
                    ],
                },
            ],
            // image: clientImage,
        },
    ]

    return (
        <div className='w-full'>
            {
                careerDropdown?.map((data) => (
                    <div key={data?.id} className='w-full relative'>
                        <div className={`w-full flex justify-between items-center py-6 md:py-8`} onClick={() => handleClickDropdown(data?.id)}>
                            <h1 className={`text-[30px] md:text-[40px] font-[400] ${currentId === data?.id ? ' text-[color:var(--primary-yellow)]' : 'text-white'}`}>{data?.title}</h1>
                            <SecondaryButton title={currentId === data?.id ? 'READ LESS' : 'READ MORE'} />
                        </div>
                        <div className={`w-full ${data?.id === currentId ? 'h-[600px] overflow-y-scroll pb-3' : 'h-0'} ${data?.id === 3 ? '' : ' border-b border-white'} overflow-hidden transition-all duration-200 ease-in-out`}>
                            <div className='w-full flex flex-col gap-10 justify-start items-center px-3'>
                                {
                                    data?.content?.map((content_data, i) => (
                                        <div key={i} className='text-white text-[18px] font-[400] mb-4'>
                                            <h1 className='text-3xl mb-4'>{content_data?.title}</h1>
                                            <div className=''>
                                                {
                                                    content_data?.data?.map((sub_cintent_data, i) => (
                                                        <div className='' key={i}>
                                                            {sub_cintent_data}
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='my-7'>
                            <PrimaryButton title='Apply for the position' />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CareersDropdown