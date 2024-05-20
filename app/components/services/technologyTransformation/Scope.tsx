import { enterpriseApplicationData } from '@/app/data/serviceData';
import React from 'react'

const Scope = () => {
    
    const { scope } = enterpriseApplicationData;

    return (
        <div className=''>
            <p className='text-2xl font-semibold mb-8 text-[color:var(--primary-teal)]'>{scope?.title?.split(' ')[0]} {scope?.title?.split(' ')[1]}
                <span className='text-[#CEFF00] relative mx-1'>
                    {scope?.title?.split(' ')[2]}
                </span>
            </p>
            <p className='my-5 text-md text-white'>{scope?.about}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-2'>
                {
                    scope?.scopeList?.map((data, i) => (
                        <p key={data?.id} className='text-md text-white'><span className='text-sm mr-1'>●</span>  {data?.content}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default Scope