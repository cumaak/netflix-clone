"use client"
import Link from 'next/link';
import { useState } from 'react';
import { IoCaretDown } from "react-icons/io5";
import cn from "classnames";
import { usePathname } from 'next/navigation';

function GenreSelector(props) {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
  return (
    <div className='lg:flex hidden'>
        <div className='flex text-white mt-24 ml-8'>
            <h2 className='text-4xl font-bold'>{props.section}</h2>
            <div className='relative flex flex-col mx-8'>
                <button onClick={()=>setIsOpen(!isOpen)} className='flex font-semibold bg-black border py-0.5 px-3 gap-5 hover:bg-opacity-30'>Türler
                    <IoCaretDown size={20} className='pt-1'/>
                </button>
                <div className={cn('absolute top-[30px] bg-black grid-cols-3 w-max gap-2 p-2.5', isOpen === true ? 'grid' : 'hidden')}>
                    {props.genres.map((item)=>{
                        return <div key={item.id}>
                            <Link href={`${pathname}/genre/${item.id}`}><h4 className='text-sm hover:underline'>{item.name}</h4></Link>
                        </div>
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default GenreSelector