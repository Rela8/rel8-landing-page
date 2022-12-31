import React, { useEffect } from 'react'
import NavBar from '../components/NavBar/NavBar'
import Pricing from '../components/Pricing/Pricing'
import { Administrator } from '../PricingData'

const PricingAdministrator = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const name = "Office Administration"
  return (
    <>
        <NavBar />
        <Pricing data={Administrator} name={name}/>
    </>
  )
}

export default PricingAdministrator