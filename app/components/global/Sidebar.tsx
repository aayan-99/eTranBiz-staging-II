'use client'

import { navData } from '@/app/data/navData';
import useSidebarStore from '@/app/store/sidebarStore'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

const Sidebar = () => {
  const { sidebarOpen, toggleSidebar } = useSidebarStore();

  const router = useRouter();

  return (
    <>
      <div className='md:hidden fixed top-12 right-8 w-fit grid justify-items-center gap-1.5 z-[120] h-[20px]' onClick={toggleSidebar}>
        {
          [1, 2, 3]?.map((data) => (
            <div key={data} className={`w-[50px] min-h-[4px] bg-white rounded transition-all duration-200 ease-in-out ${sidebarOpen && data === 1 ? 'rotate-45 translate-y-2.5' : sidebarOpen && data === 2 ? 'scale-0' : sidebarOpen && data === 3 ? '-rotate-45 -translate-y-2.5' : ''}`}></div>
          ))
        }
      </div>
      <div className={`fixed overflow-hidden z-[110] top-3 right-3 bg-[color:var(--secondary-color)] transition-all duration-200 ease-in-out rounded-2xl ${sidebarOpen ? ' w-[85vw] h-[90vh] py-20 px-10' : 'w-0 h-0 overflow-hidden'}`}>
        <div className='flex flex-col gap-6'>
          {
            navData?.map((data) => (
              <Link key={data?.id} href={data?.route} className='text-white' onClick={toggleSidebar}>
                <h1 className='text-4xl'>{data?.title}</h1>
                <div className='flex flex-col gap-2 mt-5'>
                  {
                    data?.subRoutes?.map((sub_data) => (
                      <div key={sub_data?.id} onClick={() => router.push(sub_data?.route)}>
                        <h1>{sub_data?.title}</h1>
                      </div>
                    ))
                  }
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Sidebar