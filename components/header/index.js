'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { IoNotificationsOutline } from 'react-icons/io5'
import { FcBusinessContact } from "react-icons/fc";
import SearchInput from '../searchInput';
import cn from "classnames";
import { FaBars } from "react-icons/fa";

function Header({genres}) {
  const [isOpen, setIsOpen] = useState(false)
  const navigationLinks = [{
    href: "/",
    label: "Anasayfa"
  },
  {
    href: "/series",
    label: "Diziler"
  },{
    href: "/movies",
    label: "Filmler"
  },
  {
    href: "/popular",
    label: "Yeni ve Popüler"
  },
  {
    href: "#",
    label: "Listem"
  },
  {
    href: "#",
    label: "Dile Göre Göz At"
  },
  ]
  const pathname = usePathname()
  console.log(pathname)
  return (
    <header className='flex h-[--height-header] bg-black bg-opacity-100 lg:bg-opacity-70 px-5 lg:px-14 items-center fixed z-10 w-full'>
      <div className='mr-6 relative lg:hidden'>
        <buton onClick={()=>setIsOpen(!isOpen)}><FaBars size={25}/></buton>
        <div className={cn('absolute h-auto w-40 p-4 bg-black flex flex-col duration-200', isOpen === true ? '-left-5' : '-left-48')}>
          {genres.map((item)=>{
            return <div key={item.id}>
              <Link href={`/movies/genre/${item.id}`}><h3 className='font-bold text-white opacity-50 hover:opacity-100 py-1'>{item.name}</h3></Link>
            </div>
          })}
        </div>
      </div>
      <div>
        <Link href="/" className='text-red-600 text-3xl font-semibold'>NETFLIX</Link>
      </div>
      <nav className='lg:flex hidden gap-5 text-sm font-normal ml-10'>
        {
          navigationLinks.map((item) => {
            return <Link key={item.href} href={item.href} className={cn("hover:opacity-80 transition-opacity" , pathname === item.href ? "font-bold" : "")}>{item.label}</Link>
          })
        }

      </nav>
      <div className='flex gap-4 ml-auto'>
        <SearchInput />
        <button className='lg:block hidden text-sm'>Çocuk</button>
        <IoNotificationsOutline size={25} className='lg:block hidden mt-1' />
        <FcBusinessContact size={35} className='lg:block hidden'/>
      </div>
    </header>
  )
}

export default Header