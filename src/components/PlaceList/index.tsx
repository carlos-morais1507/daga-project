import React from 'react'
import Card from './components/Card'
import { Strom, Kedet, Necacui, Marash, Thalor, Bai } from './assets'

const PlaceList = () => {
  return (
    <div className='grid grid-cols-1 gap-7 lg:grid-cols-3 my-20'>
      <Card name="Strom" imgSrc={Strom}/>
      <Card name="Kedet" imgSrc={Kedet}/>
      <Card name="Necacui" imgSrc={Necacui}/>
      <Card name="Marash" imgSrc={Marash}/>
      <Card name="Thalor" imgSrc={Thalor}/>
      <Card name="Bai" imgSrc={Bai}/>
    </div>
  )
}

export default PlaceList