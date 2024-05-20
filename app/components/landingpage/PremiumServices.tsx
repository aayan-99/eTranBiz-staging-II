'use client'

import Image from 'next/image'
import React, { RefObject, useEffect, useRef, useState } from 'react'
import arrow from '@/app/assets/icons/arrow.svg'
import SecondaryButton from '@/app/components/global/SecondaryButton'
import CountUp from 'react-countup'
import ServiceCard from '@/app/components/landingpage/ServiceCard'
import { premiumServicesData } from '@/app/data/landingPageData'
import { servicesList } from '@/app/data/serviceData'

const PremiumServices = () => {

    const [isVisible, setIsVisible] = useState(false);

    // const statsRefs = premiumServicesData.stats.map(() => useRef(null));
    const statsRefs = useRef<RefObject<HTMLDivElement>[]>(premiumServicesData.stats.map(() => React.createRef<HTMLDivElement>()));

    const handleStatRefs = (observer: IntersectionObserver) => {
        statsRefs.current.forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });
    }

    useEffect(() => {
        const options = {
            threshold: 0.5, // Adjust this threshold as needed
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Optionally disconnect the observer once the component is in view
                    observer.disconnect();
                }
            });
        }, options);

        handleStatRefs(observer);

        // Disconnect the observer when the component is unmounted
        return () => {
            observer.disconnect();
        };
    }, [statsRefs, handleStatRefs]);

    return (
        <div className='w-full px-[2.5rem] md:px-[10rem] xl:px-[18rem] pt-[100px] md:pt-[260px] pb-[160px]'>
            <div className='w-full flex flex-col lg:flex-row justify-between items-start gap-5'>
                <div className='w-full'>
                    <h1 className='font-[800] text-[20px] text-[color:var(--primary-teal)] mb-5'>
                        OUR
                        <span className='text-[#CEFF00] relative mx-1'>
                            PREMIUM
                            <div className='absolute -top-[20px] right-0'>
                                <Image src={arrow?.src} width={26} height={26} alt='Arrow' />
                            </div>
                        </span>
                        SERVICES
                    </h1>
                    <h1 className='text-[40px] font-[400] text-white leading-[45px] mb-5'>Your partner for expertise on Oracle Technologies & Digital Transformation</h1>
                    <p className='text-white text-[18px] font-[500] mb-12 lg:mb-5 md:max-w-[90%]'>We offer services based on market-leading IT frameworks to streamline IT strategy, enterprise solutions, cloud transformation, smooth and effective digital transformation, and overall digital customer experience. We have over 11 years of experience in the IT industry and have amassed....</p>
                    <SecondaryButton title='READ MORE' />
                </div>
                <div className='min-w-[400px] grid grid-cols-2 justify-items-center place-items-center mt-10 lg:mt-0'>
                    {premiumServicesData?.stats?.map((data, index) => (
                        <div key={data?.id} className='w-full flex flex-col justify-center items-center'>
                            <h1 className='text-[color:var(--primary-teal)] text-[60px] md:text-[75px] font-[400]'>
                                {isVisible && (
                                    <>
                                        <CountUp
                                            start={0}
                                            end={parseInt(data?.stat, 10)}
                                            duration={3} // Set the duration of the animation in seconds
                                        />
                                        {data?.id === 'stat_1' ? '+' : null}
                                    </>
                                )}
                            </h1>
                            <h1 ref={statsRefs.current[index]} className='text-white text-[25px] font-[400]'>
                                {data.title}
                            </h1>
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-5 xl:gap-4 xl:flex justify-between items-center mt-[100px]'>
                {
                    servicesList?.specializedServices?.map((data) => (
                        <ServiceCard id={data?.id} title={data?.title} route={data?.route} content={data?.content} image={data?.image?.src} key={data?.id} />
                    ))
                }
            </div>Í
        </div>
    )
}

export default PremiumServices