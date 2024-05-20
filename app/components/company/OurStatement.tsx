import Image from 'next/image';
import React from 'react'
import arrow from '@/app/assets/icons/arrow.svg'

interface OurStatementProps {
  index: number;
  id: string;
  title: string;
  content: string[];
}

const OurStatement: React.FC<OurStatementProps> = ({ index, id, title, content }) => {
  return (
    <div key={id} className={`w-full ${index === 0 ? 'lg:border-r lg:pr-10' : 'lg:ml-2 lg:pl-10'} pt-2`}>
      <p className='text-4xl mb-4 text-[color:var(--primary-teal)]'>{title?.split(' ')[0]}
        <span className='text-[#CEFF00] relative mx-1'>
          {title?.split(' ')[1]}
          <div className='absolute -top-[20px] right-0'>
            <Image src={arrow?.src} width={26} height={26} alt='Arrow' />
          </div>
        </span>
      </p>
      <div className='w-full'>
        {
          content?.map((sub_statement) => (
            <div className='w-full flex items-start gap-2 text-sm' key={sub_statement}>
              <p className='mt-1'>{index === 0 ? '' : '●'} </p>
              <p className='text-lg mb-2'>{sub_statement}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default OurStatement