import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Strom, Necacui, Kedet } from '../../assets'

const Card = ({ name }: any) => {

  return (
    <div>
      <Link
        href="#"
        target="_blank"
      >
      <Image
        src="/../../assets/Kedet_tn.png"
        width={200}
        height={200}
        alt={name}
        className='h-[300px] w-[300px] rounded-lg shadow-md hover:brightness-50 duration-200 hover:backdrop-blur-md'
      />
      <h1>{name}</h1>
      </Link>
    </div>
  )
}

export default Card