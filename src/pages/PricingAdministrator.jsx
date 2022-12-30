import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Pricing from '../components/Pricing/Pricing'
import { Administrator } from '../PricingData'

const PricingAdministrator = () => {
  const name = "Office Administration"
  return (
    <>
        <NavBar />
        <Pricing data={Administrator} name={name}/>
    </>
  )
}

export default PricingAdministrator