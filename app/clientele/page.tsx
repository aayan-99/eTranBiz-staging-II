import React from 'react'
import SecondaryHeroSection from '@/app/components/global/SecondaryHeroSection'
import ClientCollaborations from '../components/clientele/ClientCollaborations'
import { clients } from '../data/clientsPageData'

const page = () => {

  const { title, heroContent, heroImage, directClients, otherClients } = clients;

  return (
    <div className='pb-20'>
      <SecondaryHeroSection title={title} content={heroContent} image={heroImage} />
      <div className='py-24 flex flex-col gap-10  px-[2.5rem] md:px-[10rem] xl:px-[18rem]'>
        <ClientCollaborations title='Our direct collaborations' clientsData={directClients} />
        <ClientCollaborations title='Other collaborators' clientsData={otherClients} />
      </div>
      <div className='w-full  px-[2.5rem] md:px-[10rem] xl:px-[18rem] text-white flex flex-col gap-10 py-10 md:py-20'>
        <div className='w-full leading-[4rem] text-[40px] md:text-[56px] font-[400]'>
          <h1 className=''>Tailor-made IT services and</h1>
          <h1 className=''>Solutions for you</h1>
        </div>
        <span className='text-[30px] md:text-[45px] text-[color:var(--primary-yellow)]'>
          <span>{`>`}</span> Work with us and be a part of our success!
        </span>
      </div>
    </div>
  )
}

export default page