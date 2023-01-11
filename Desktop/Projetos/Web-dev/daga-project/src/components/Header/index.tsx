import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='shadow-lm bg-slate-800 fixed z-30 w-full h-[50px] flex items-center justify-around'>
      <div>
        <Link href="#hero" className="hover:opacity-75 transition-opacity">Daga</Link>
      </div>
      <div>
        <Link href="#hero" className="hover:opacity-75 transition-opacity px-2">Daga</Link>
        <Link href="#hero" className="hover:opacity-75 transition-opacity px-2">Daga</Link>
        <Link href="#hero" className="hover:opacity-75 transition-opacity px-2">Daga</Link>
      </div>
    </div>
  )
}

export default Header