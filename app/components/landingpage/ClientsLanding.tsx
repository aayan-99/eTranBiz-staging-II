import React from 'react'
import TextHeading from '@/app/components/global/TextHeading';
import { industriesLandingData } from '@/app/data/landingPageData';
import ValueCardSmall from '../global/ValueCardSmall';

const ClientsLanding = () => {
  return (
    <div className='w-full pb-[180px] px-[2.5rem] md:px-[10rem] xl:px-[18rem]'>
      <TextHeading headingText='INDUSTRIES' />
      <div className='w-full mt-5 grid grid-cols-4 gap-4'>
        {
          industriesLandingData?.map((data) => (
            <ValueCardSmall id={data?.id} title={data?.title} key={data?.id} />
          ))
        }
      </div>
    </div>
  )
}

export default ClientsLanding
