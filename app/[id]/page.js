"use client"
import MovieDetails from '@/components/movieDetails'
import React, { useState, useEffect } from 'react'

function SingleMovie({ params }) {

  const [movie, setMovie] = useState()
  const [genres, setGenres] = useState([])
  useEffect(
    () => {
      const fetcData = async function () {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?language=tr&api_key=3e6922e5aba1aa821b670146c1f3876a`)
        const data = await res.json()
        console.log(data)
        setMovie(data)
        setGenres(data.genres)
      }
      fetcData()
    }
    , []
  )

  return (
    <main>
      <MovieDetails data={movie} genres={genres} />
    </main>
  )
}

export default SingleMovie