import React from 'react'
import Card from './components/Card'
import { Strom, Kedet, Necacui, Marash, Thalor, Bai } from './assets'

const PlaceList = () => {
  return (
    <div className='my-20'>
      <h1 className='text-[36px] text-center font-bold mb-5'>Explore Daga</h1>
      <div className='grid grid-cols-1 gap-7 lg:grid-cols-3'>
        <Card name="Strom" imgSrc={Strom}/>
        <Card name="Kedet" imgSrc={Kedet}/>
        <Card name="Necacui" imgSrc={Necacui}/>
        <Card name="Marash" imgSrc={Marash}/>
        <Card name="Thalor" imgSrc={Thalor}/>
        <Card name="Bai" imgSrc={Bai}/>
      </div>
    </div>
  )
}

export default PlaceList