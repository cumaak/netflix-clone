import React from 'react'
import cn from "classnames"
import { IMAGE_URL } from '@/constant'
import Link from 'next/link'

function FeaturedMovie({ data }) {
    return (
        <div className='lg:flex hidden flex-col pt-[--height-header]'>
            <div className={cn(" text-white w-1/2 pl-8 flex flex-col gap-5 my-24")}>
                <h1 className='text-7xl font-bold tracking-tight mb-3'>{data.length > 0 ? data[0].title || data[0].name : ""}</h1>
                <p>{data.length > 0 ? data[0].overview : ""}</p>
                <div className='flex mt-4 gap-4'>
                    <button className=' bg-white text-black text-lg font-bold px-5 py-2 rounded hover:bg-opacity-70'>Oynat</button>
                    <Link href={data[0]?.media_type == "tv" ? `series/${data[0]?.id}` : data[0]?.media_type == "movie" ? `movies/${data[0]?.id}` : `/${data[0]?.id}`} className=' bg-[rgba(109,109,110,0.7)] text-white text-lg font-bold px-5 py-2 rounded hover:bg-[rgba(109,109,110,0.4)]'>Daha Fazla Bilgi</Link>
                </div>
            </div>
            <div className='absolute top-0 right-0 bottom-0 left-0 -z-10 h-screen'>
                <img src={data.length > 0 ? IMAGE_URL + data[0].backdrop_path : ""} className='!h-full -z-20 max-h-screen object-cover w-full'></img>
            </div>
        </div>
    )
}

export default FeaturedMovie