"use client"
import { IMAGE_URL } from '@/constant'
import { useEffect, useState } from 'react'
import cn from "classnames";
import Slider from '@/components/slider';
import FeaturedMovie from '@/components/featured-movie';

export default function Home() {
    const [backdrop, setBackdrop] = useState("")
    const [movieData1, setMovieData1] = useState([])
    const [movieData2, setMovieData2] = useState([])
    const [movieData3, setMovieData3] = useState([])
    
        useEffect(
          () => {
            const fetcData = async function (){
              const res = await fetch("https://api.themoviedb.org/3/trending/all/day?language=tr&api_key=3e6922e5aba1aa821b670146c1f3876a&page=1")
              const data = await res.json()
              
              setBackdrop(IMAGE_URL+data.results[0].backdrop_path)
              setMovieData1(data.results)
            }
            fetcData()
          }
          ,[]
        )
        useEffect(
          () => {
            const fetcData = async function (){
              const res = await fetch("https://api.themoviedb.org/3/trending/all/day?language=tr&api_key=3e6922e5aba1aa821b670146c1f3876a&page=2")
              const data = await res.json()
              
              setMovieData2(data.results)
            }
            fetcData()
          }
          ,[]
        )
        useEffect(
          () => {
            const fetcData = async function (){
              const res = await fetch("https://api.themoviedb.org/3/trending/all/day?language=tr&api_key=3e6922e5aba1aa821b670146c1f3876a&page=3")
              const data = await res.json()
              
              setMovieData3(data.results)
            }
            fetcData()
          }
          ,[]
        )

    useEffect(
      () => {
        console.log(movieData1)
      }, [movieData1]
    )
  
  return (
    <main>
      <FeaturedMovie data={movieData1}/>
      <div className='lg:mt-0 mt-20'>
        <h4 className='mb-2 mt-16 lg:mx-8 mx-5  text-xl font-semibold lg:opacity-100 opacity-60'>Gündemdekiler</h4>
        <Slider data = {movieData1}/>
        <h4 className='my-2 lg:mx-8 mx-5  text-xl font-semibold lg:opacity-100 opacity-60'>Yeni Çıkanlar</h4>
        <Slider data = {movieData2}/>
        <h4 className='my-2 lg:mx-8 mx-5  text-xl font-semibold lg:opacity-100 opacity-60'>Popüler</h4>
        <Slider data = {movieData3}/>
      </div>
    </main>
  )
}

