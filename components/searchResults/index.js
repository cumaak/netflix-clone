"use client"
import React from 'react'
import { IMAGE_URL } from '@/constant'
import Link from 'next/link';

function SearchResults({ data }) {
    return (
        <div className='grid lg:grid-cols-6 sm:grid-cols-3 md:grid-cols-4 grid-cols-2 gap-2 mt-20 lg:mx-10 mx-5'>
            {data?.map((item) => {
                return <div key={item.id} className='lg:my-7 my-5'>
                    <Link href={`/movies/${item.id}`}>
                        <img src={IMAGE_URL + item.poster_path} className='rounded'></img>
                    </Link>
                </div>
            })}
        </div>
    )
}

export default SearchResults