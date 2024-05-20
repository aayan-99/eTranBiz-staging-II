'use client'

import SecondaryHeroSection from '@/app/components/global/SecondaryHeroSection'
import ImageDropdown from '@/app/components/services/common/ImageDropdown';
import ServicePageHeader from '@/app/components/services/common/ServicePageHeader';
import { oracleServices } from '@/app/data/serviceData';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const page = () => {
    const { oracleServiceId } = useParams();

    const [oracleData, setOracleData] = useState({
        id: '',
        pageTitle: '',
        heroImage: '',
        title: '',
        about: '',
        aboutOracle: [],
    });

    useEffect(() => {
        oracleServices?.find((data: any) => {
            if (data?.id === oracleServiceId) {
                setOracleData(data);
            }
        });
    }, [oracleServiceId])

    if (!oracleData) {
        return (
            <div>Data not found!</div>
        )
    }


    return (
        <div>
            {
                oracleData ? (
                    <>
                        <SecondaryHeroSection title={oracleData?.pageTitle} image={oracleData?.heroImage} content='' />
                        <div className='w-full px-[2.5rem] md:px-[10rem] xl:px-[18rem] py-10'>
                            <ServicePageHeader header={oracleData?.title} about={oracleData?.about} />
                            <div className='my-32 flex flex-col gap-5'>
                                {
                                    oracleData?.aboutOracle?.map((data: any) => (
                                        <ImageDropdown key={data?.id} title={data?.title} content={data?.content} contentAbout={data?.contentAbout} />
                                    ))
                                }
                            </div>
                            {
                                oracleServiceId === 'application-integration' ? (
                                    <div className='w-full pt-12 pb-32 text-white flex flex-col gap-4'>
                                        <h1 className='text-4xl font-normal'>Bottom Line</h1>
                                        <p className='text-md'>At eTranBiz, we are committed to helping businesses connect their applications and systems for optimal performance.</p>
                                        <h1 className='text-3xl'>Contact us today to learn more about our application integration solutions and how <span className='text-[#CEFF00]'>we can help your business succeed.</span></h1>
                                    </div>
                                ) : ''
                            }
                        </div>
                    </>
                ): null
            }
        </div>
    )
}

export default page