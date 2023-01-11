import React from 'react'
import Card from './components/Card'
import { Strom } from './assets'

const PlaceList = () => {
  return (
    <div className='grid gap-5 grid-flow-row grid-cols-3 p-32'>
      <Card name="Strom"/>
    </div>
  )
}

export default PlaceList