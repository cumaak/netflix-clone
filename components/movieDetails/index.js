import React from 'react'
import { IMAGE_URL } from '@/constant'

const MovieDetails = (props) => {
    return (
        <div className='flex flex-col'>
            <div className=" text-white lg:w-1/2 w-full lg:pl-8 lg:px-0 px-4 flex flex-col gap-10 lg:my-24 my-56">
                <h1 className='lg:text-7xl text-4xl font-bold tracking-tight'>{props.data ? props.data.title || props.data.name : ""}</h1>
                <p>{props.data ? props.data.overview : ""}</p>
                <div>
                    <span>Türler:</span>
                    {props.genres.map((genre) =>{
                        return <span key={genre.id} className='ml-2 my-1.5 border rounded p-1.5 inline-block'>{genre.name}</span>
                    })}
                </div>
            </div>
            <div className='absolute top-0 right-0 bottom-0 left-0 -z-10 lg:mt-0 mt-[57px]'>
                <img src={props.data ? IMAGE_URL + props.data.backdrop_path : ""} className='!h-auto -z-20 max-h-screen object-cover w-full'></img>
            </div>
        </div>
    )
}
export default MovieDetails