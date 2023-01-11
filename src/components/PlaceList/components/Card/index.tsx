import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Card = ({ name, imgSrc }: any) => {

  return (
    <div className='w-[300px]'>
      <Link
        href={`/Places/${name}`}
        target="_blank"
      >
      <Image
        src={imgSrc}
        width={200}
        height={200}
        alt={name}
        className='h-[300px] w-[300px] rounded-lg shadow-md'
      />
      <div className='absolute z-10 h-[300px] w-[300px] -mt-[300px] flex items-center justify-center opacity-0 hover:opacity-100 duration-200 backdrop-blur-sm backdrop-brightness-50 rounded-lg'>
        <h1 className='text-2xl text-center font-bold'>{name}</h1>
      </div>
      </Link>
    </div>
  )
}

export default Card