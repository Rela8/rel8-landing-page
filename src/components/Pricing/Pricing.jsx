import React, { useState } from 'react'
import { GetStartedButton, PricingButtonHolder, PricingButtons, PricingContainer, PricingDetailsCon,
     PricingDetailsHeader, PricingDetailsSubHeader, PricingDetailsSubHeader1,
      PricingDetailsTextCon, PricingHeader, PricingList, PricingListItems, PricingSubHeader } from './Pricing.styles'

const Pricing = ({data, name}) => {
    const [type, setType] = useState('Monthly')
    
    const FeaturesItemsArr = []

    data.forEach(item => {
        if(item.type === type) {
            item.features.forEach((feat, index) => {
                FeaturesItemsArr.push(<PricingListItems key={index}>{feat}</PricingListItems>)
            })
        }
        else if(item.type === type){
            item.features.forEach((feat, index) => {
                FeaturesItemsArr.push(<PricingListItems key={index}>{feat}</PricingListItems>)
            })
        }
    })
    
  return (
    <PricingContainer>
        <PricingHeader>Our Pricing</PricingHeader>
        <PricingSubHeader>Choose the plan that suits you for Rel8  {name}</PricingSubHeader>

        <PricingButtonHolder>
            <PricingButtons onClick={()=>setType('Monthly')} typex={type==="Monthly" ? "filled" : ""}>Monthly</PricingButtons>
            <PricingButtons onClick={()=>setType('Yearly')} typex={type==="Yearly" ? "filled" : ""}>Yearly</PricingButtons>
        </PricingButtonHolder>

        <PricingDetailsCon>
            <PricingDetailsTextCon>
                <PricingDetailsHeader>{type} Plan</PricingDetailsHeader>
                <PricingDetailsSubHeader>NGN50,000/{type}</PricingDetailsSubHeader>
                <PricingDetailsSubHeader1>Features</PricingDetailsSubHeader1>
            </PricingDetailsTextCon>

            <PricingList>
                {FeaturesItemsArr}
            </PricingList>

            <GetStartedButton>Get Started &gt;</GetStartedButton>
        </PricingDetailsCon>
    </PricingContainer>
  )
}

export default Pricing