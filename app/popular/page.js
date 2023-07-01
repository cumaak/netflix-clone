"use client"
import { IMAGE_URL } from '@/constant'
import { useEffect, useState } from 'react'
import Slider from '@/components/slider';
import FeaturedMovie from '@/components/featured-movie';

function Popular() {
    const [backdrop, setBackdrop] = useState("")
    const [movieData1, setMovieData1] = useState([])
    const [movieData2, setMovieData2] = useState([])
    const [movieData3, setMovieData3] = useState([])

    useEffect(
      () => {
        const fetcData = async function (){
          const res = await fetch("https://api.themoviedb.org/3/trending/all/day?language=tr&api_key=3e6922e5aba1aa821b670146c1f3876a&page=4")
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
          const res = await fetch("https://api.themoviedb.org/3/trending/all/day?language=tr&api_key=3e6922e5aba1aa821b670146c1f3876a&page=5")
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
          const res = await fetch("https://api.themoviedb.org/3/trending/all/day?language=tr&api_key=3e6922e5aba1aa821b670146c1f3876a&page=6")
          const data = await res.json()
          
          setMovieData3(data.results)
        }
        fetcData()
      }
      ,[]
    )

  return (
    <main className='h-screen'>
      <FeaturedMovie data={movieData1}/>
      <div>
        <h4 className='mb-2 mt-16 mx-8  text-xl font-semibold'>Gündemdekiler</h4>
        <Slider data = {movieData1}/>
        <h4 className='my-2 mx-8  text-xl font-semibold'>Yeni Çıkanlar</h4>
        <Slider data = {movieData2}/>
        <h4 className='my-2 mx-8  text-xl font-semibold'>Popüler</h4>
        <Slider data = {movieData3}/>
      </div>
    </main>
  )
}

export default Popular