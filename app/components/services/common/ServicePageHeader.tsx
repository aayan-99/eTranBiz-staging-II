'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

const ServicePageHeader = ({ header, about, extraAbout }: { header: string, about?: string, extraAbout?: string[] }) => {

    const pathname = usePathname();

    return (
        <div className='w-full flex flex-col gap-7 text-white mb-10'>
            {
                pathname.includes('oracleDatabase') || pathname.includes('oracleEbusiness') ? (
                    <>
                    <p className='text-3xl text-[color:var(--text-yellow)]'>{header}</p>
                        {about ? <h1 className='text-6xl font-light leading-snug'>{about}</h1> : null}
                    </>
                ) : (
                    <>
                        <h1 className='text-[56px] font-light leading-tight'>{header}</h1>
                        {about ? <p className='text-[30px] leading-snug text-[color:var(--text-yellow)]'>{about}</p> : null}
                    </>
                )
            }
            {extraAbout ? (
                extraAbout?.map((data) => (
                    <p className='text-md' key={data}>{data}</p>
                ))
            ) : null}
        </div>
    )
}

export default ServicePageHeader