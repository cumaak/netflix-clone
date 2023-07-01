"use client"
import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [genres, setGenres] = useState([])
  useEffect(
    () => {
      const fetcData = async function (){
        const res = await fetch("https://api.themoviedb.org/3/genre/movie/list?language=tr&api_key=3e6922e5aba1aa821b670146c1f3876a")
        const data = await res.json()
        setGenres(data.genres)
      }
      fetcData()
    }
    ,[]
  )
  return (
    <html lang="en">
      <head>
        <title>Netflix</title>
      </head>
      <body className={inter.className}>
        <Header genres={genres}/>
        <main className='flex-auto'>{children}</main>
        <Footer className="flex-shrink-0"></Footer>
      </body>
    </html>
  )
}
