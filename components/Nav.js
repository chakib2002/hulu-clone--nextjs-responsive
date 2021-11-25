import React from 'react'
import requests from '../utils/requests'

export default function Nav() {
    return (
        <nav className="relative">
            <div className="flex px-10 py-5 sm:px-20 text-xl whitespace-nowrap space-x-10 sm:space-x-5 overflow-x-scroll scrollbar-hide">
                {Object.entries(requests).map(([key, {title, url}])=>(
                    <h2 key={key} className='opacity-75 cursor-pointer transition duration-300 border border-opacity-50 rounded-full w-auto py-2 px-4 hover:text-white text-xl
                    hover:border-opacity-100 hover:opacity-100 hover:scale-125 hover:shadow-2xl active:ease-out active:scale-105
                    transform active:text-xl '>{title}</h2>
                ))}
            </div>
            <div className="absolute top-4 right-0 bg-gradient-to-l from-[#06202A] h-14 w-1/12"/>
        </nav>
    )
}
