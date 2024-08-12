import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
      <div className="bg-blue-500 flex flex-1 justify-between px-7 items-center py-2"
      >
          <div className='cursor-default' key={1}>
              <span className='font-bold text-3xl'> MI PORTAFOLIO</span>
          </div>

          <div className='bg-yellow-500 px-5 py-2  rounded-md cursor-pointer hover:bg-white hover:text-yellow-600 font-bold text-lg' key={2}>
               <Link href="/proyects"> Proyectos</Link>
          </div>
      </div>
  )
}
 