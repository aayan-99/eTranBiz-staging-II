import React from 'react'
import HeroCarousal from './HeroCarousal'

function Hero() {

    return (
        <div className='w-full h-[60vh] md:h-[80vh] lg:h-screen flex flex-col justify-end items-start px-[20px] sm:px-[50px] mb-12 md:mb-40 relative'>
            <div className='pl-5 md:pl-32 pb md:pb-32 flex flex-col text-white z-10 text-6xl md:text-[8rem] leading-[110px] font-[900] tracking-[-0.06em]'>
                <h1 className=''>People</h1>
                <h1 className=''>Innovation</h1>
                <h1 className=''>Technology</h1>
            </div>
            <div className='absolute bottom-0 top-0 left-0 w-full z-0'>
                <HeroCarousal />
            </div>
        </div>
    )
}

export default Hero