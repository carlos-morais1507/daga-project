import React from 'react'
import Card from './components/Card'
import { Strom, Kedet, Necacui, Marash } from './assets'

const PlaceList = () => {
  return (
    <div className='grid gap-5 grid-flow-row'>
      <Card name="Strom" imgSrc={Strom}/>
      <Card name="Kedet" imgSrc={Kedet}/>
      <Card name="Necacui" imgSrc={Necacui}/>
      <Card name="Marash" imgSrc={Marash}/>
      <Card name="Strom" imgSrc={Kedet}/>
      <Card name="Strom" imgSrc={Kedet}/>
    </div>
  )
}

export default PlaceList