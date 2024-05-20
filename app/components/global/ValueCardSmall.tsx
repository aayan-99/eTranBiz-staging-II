'use client'

import Image from 'next/image'
import React, { useState } from 'react'

interface ValueCardSmallProps {
    id: number;
    title: string;
    content?: string;
    iconWhite?: string | any;
    iconDark?: string | any;
}

const ValueCardSmall: React.FC<ValueCardSmallProps> = ({ id, title, content, iconDark, iconWhite }) => {

    const [activeHoverItemId, setActiveHoverItemId] = useState<number | null>(null);

    return (
        <div onMouseEnter={() => setActiveHoverItemId(id)} onMouseLeave={() => setActiveHoverItemId(null)} className='w-full group h-32 px-8 py-6 bg-[#1F1F1F] hover:bg-[color:var(--neon)] text-white hover:text-black cursor-pointer transition-all duration-200 ease-in-out rounded-md flex flex-col justify-end items-start' key={id}>
            { iconDark || iconWhite ? <Image src={activeHoverItemId === id ? iconDark?.src : iconWhite?.src} className='mb-5' alt='Value Icon' /> : null }
            <p className='text-md lg:text-xl font-semibold mb-2'>{title}</p>
            {/* <div className='w-full pl-1 h-0 group-hover:h-full transition-all duration-200 ease-in-out overflow-hidden'>
                <p className='text-md font-medium'>{content}</p>
            </div> */}
        </div>
    )
}

export default ValueCardSmall