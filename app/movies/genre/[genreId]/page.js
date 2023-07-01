"use client"
import React, { useState, useEffect } from 'react'
import Slider from '@/components/slider';
import FeaturedMovie from '@/components/featured-movie';

function SingleGenre({ params }) {
    const [genreData1, setGenreData1] = useState([])
    const [genreData2, setGenreData2] = useState([])
    const [genreData3, setGenreData3] = useState([])
    console.log(params)
    useEffect(
        () => {
            const fetcData = async function () {
                const res = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=tr&page=1&sort_by=popularity.desc&with_genres=${params.genreId}&api_key=3e6922e5aba1aa821b670146c1f3876a`)
                const data = await res.json()
                
                setGenreData1(data.results)
            }
            fetcData()
        }
        , []
    )
    useEffect(
        () => {
            const fetcData = async function () {
                const res = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=tr&page=2&sort_by=popularity.desc&with_genres=${params.id}&api_key=3e6922e5aba1aa821b670146c1f3876a`)
                const data = await res.json()

                setGenreData2(data.results)
            }
            fetcData()
        }
        , []
    )
    useEffect(
        () => {
            const fetcData = async function () {
                const res = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=tr&page=3&sort_by=popularity.desc&with_genres=${params.id}&api_key=3e6922e5aba1aa821b670146c1f3876a`)
                const data = await res.json()

                setGenreData3(data.results)
            }
            fetcData()
        }
        , []
    )

    return (
        <main className='h-screen'>
            <FeaturedMovie data={genreData1} />
            <div className='mt-20'>
                <h4 className='lg:block hidden mb-2 mt-5 mx-8  text-xl font-semibold'>Gündemdekiler</h4>
                <Slider data={genreData1}/>
                <h4 className='lg:block hidden my-2 mx-8  text-xl font-semibold'>Yeni Çıkanlar</h4>
                <Slider data={genreData2} />
                <h4 className='lg:block hidden my-2 mx-8  text-xl font-semibold'>Popüler</h4>
                <Slider data={genreData3} />
            </div>
        </main>
    )
}

export default SingleGenre