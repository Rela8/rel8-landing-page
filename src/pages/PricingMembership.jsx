import React, { useEffect } from 'react'
import NavBar from '../components/NavBar/NavBar'
import Pricing from '../components/Pricing/Pricing'
import { Membership } from '../PricingData'

const PricingMembership = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    const name = "Membership"
  return (
    <>
        <NavBar />
        <Pricing data={Membership} name={name}/>
    </>
  )
}

export default PricingMembership