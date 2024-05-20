import React from 'react'
import Image from 'next/image';
import TextHeading from '@/app/components/global/TextHeading';

interface CollaborationsProps {
    title: string;
    clientsData: any[];
}

const ClientCollaborations: React.FC<CollaborationsProps> = ({ title, clientsData }) => {

  return (
    <div className='w-full'>
        <TextHeading headingText={title} styles='pl-4' />
        <div className='w-fit grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3'>
            {
                clientsData?.map((data) => (
                    <div className='w-full flex justify-start items-center' key={data?.id}>
                        <Image src={data?.image?.src} width={400} height={400} alt='Company Logo' className='' />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ClientCollaborations