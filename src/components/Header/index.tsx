import Link from 'next/link'
import React from 'react'
import { Link as LinkS } from 'react-scroll'

const Header = () => {
  return (
    <div className='shadow-lm bg-slate-800 fixed z-30 w-full h-[50px] flex items-center justify-around'>
      <div>
        <LinkS to="hero" smooth={true} duration={500} spy={true} className="hover:opacity-75 transition-opacity cursor-pointer">Daga</LinkS>
      </div>
      <div>
        <LinkS to="hero" smooth={true} duration={500} spy={true} className="hover:opacity-75 transition-opacity cursor-pointer p-3">Daga1</LinkS>
        <LinkS to="hero" smooth={true} duration={500} spy={true} className="hover:opacity-75 transition-opacity cursor-pointer p-3">Daga2</LinkS>
        <LinkS to="hero" smooth={true} duration={500} spy={true} className="hover:opacity-75 transition-opacity cursor-pointer p-3">Daga3</LinkS>
      </div>
    </div>
  )
}

export default Header