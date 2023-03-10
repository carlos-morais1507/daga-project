import React from 'react'
import Image from 'next/image'
import DagaBg from './assets/daga__bg.png'
import { Amiri } from '@next/font/google'

const amiri_b = Amiri({
  weight: '700',
  variable: '--font-amiri',
  subsets: ['latin'],
})

const amiri = Amiri({
  weight: '400',
  variable: '--font-amiri',
  subsets: ['latin'],
})

const Hero = () => {
  return (
    <div id='hero' className='flex items-center justify-center w-full h-[365px] bg-transparent pt-[50px] shadow-xl'>
      <Image
        src={DagaBg}
        alt="Mapa de Daga _background"
        className='h-[365px] object-cover w-full overflow-hidden'
      />
      <div className='absolute z-10'>
        <h3 className='text-white text-center font-light tracking-[15px] text-sm md:text-[24px]'>O UNIVERSO DE</h3>
        <h1 className={`${amiri_b.className} text-white text-center text-6xl p-3 md:p-4 md:text-[128px]`}>Daga</h1>
        <h2 className={`${amiri.className} text-white text-center text-sm tracking-[15px] md:text-[24px]`}>MUNDO FANTÁSTICO</h2>
      </div>
      
    </div>
  )
}

export default Hero