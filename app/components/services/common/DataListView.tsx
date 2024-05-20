import React from 'react'

const DataListView = ({ title, about, dot, numbering, titleStyle }: { title?: string, about: string[], dot?: boolean, numbering?: boolean, titleStyle?: string }) => {

    return (
        <div className={`w-full gap-10`}>
            {
                title ? (
                    <div className=''>
                        <h1 className={`${titleStyle ? '' : 'text-xl text-[#CEFF00]'} ${titleStyle} mb-8 min-w-[470px]`}>{title}</h1>
                    </div>
                ) : null
            }
            <div className={`overflow-hidden transition-all duration-500 ease-in-out w-full`}>
                {
                    about?.map((data, i) => (
                        <p key={i} className={`text-md mb-2 text-white ${i === 0 ? 'text-md' : 'text-sm'}`}>{dot && i !== 0 ? <span className='text-xs mr-2'>●</span> : numbering && i !== 0  ? <span className='text-xs mr-2'>{i + 1}.</span> : null}{data}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default DataListView