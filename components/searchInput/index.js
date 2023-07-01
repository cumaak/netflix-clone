"use client"
import { useState } from 'react'
import React from 'react'
import { BiSearch } from 'react-icons/bi'
import cn from "classnames";
import Link from 'next/link';

function SearchInput() {
    const [isOpen, setIsOpen] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    return (
        <div className={cn('flex items-center relative transition-width' , isOpen ? "bg-black lg:w-64 w-32" : "bg-transparent w-[25px]")}>
            <Link href={searchValue.length > 0 ? `/search/${searchValue}` : `#`} onClick={() => searchValue.length > 0 ? setSearchValue("") & setIsOpen(!isOpen) : setIsOpen(!isOpen)} className={cn('left-1' , isOpen ? "absolute" : "")}>
                <BiSearch size={25} className='' />
            </Link>
            <input className={cn('w-full h-full bg-transparent border px-3 py-2 pl-10 text-sm' , isOpen ? "" : "hidden")} type='text' placeholder='İçerik, kişi, tür' value={searchValue} onChange={e => setSearchValue(e.target.value)}></input>
        </div>
    )
}

export default SearchInput