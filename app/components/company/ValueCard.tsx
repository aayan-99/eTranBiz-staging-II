'use client'

import Image from 'next/image'
import React, { useState } from 'react'

interface ValueCardProps {
    id: number;
    title: string;
    content?: string;
    iconWhite?: string | any;
    iconDark?: string | any;
}

const ValueCard: React.FC<ValueCardProps> = ({ id, title, content, iconDark, iconWhite }) => {

    const [activeHoverItemId, setActiveHoverItemId] = useState<number | null>(null);

    return (
        <div onMouseEnter={() => setActiveHoverItemId(id)} onMouseLeave={() => setActiveHoverItemId(null)} className='w-full text-white group h-80 border-2 hover:border-none px-8 py-6 hover:bg-[color:var(--neon)] hover:text-black cursor-pointer transition-all duration-500 ease-in-out rounded-2xl flex flex-col justify-end items-start' key={id}>
            { iconDark || iconWhite ? <Image src={activeHoverItemId === id ? iconDark?.src : iconWhite?.src} width={80} height={80} className='mb-5' alt='Value Icon' /> : null }
            <p className='text-3xl font-medium mb-2'>{title}</p>
            <div className='w-full pl-1 h-0 group-hover:h-full transition-all duration-500 ease-in-out overflow-hidden'>
                <p className='text-md font-medium text-black'>{content}</p>
            </div>
        </div>
    )
}

export default ValueCard