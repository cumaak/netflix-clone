"use client"
import SearchResults from '@/components/searchResults'
import React, { useState, useEffect } from 'react'

function Search({params}) {
  const [searchData, setSearchData] = useState([])
  const [data1, setData1] = useState([])
  const [data2, setData2] = useState([])
  useEffect(
    () => {
      const fetcData = async function (){
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${params.searchValue}&include_adult=false&language=tr&api_key=3e6922e5aba1aa821b670146c1f3876a`)
        const data = await res.json()
        console.log(data)
        setSearchData(data.results)
      }
      fetcData()
    }
    ,[]
  )

  return (
    <SearchResults data = {searchData}/>
  )
}

export default Search