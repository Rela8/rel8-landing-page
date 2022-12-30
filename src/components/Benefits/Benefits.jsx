import React from 'react'
import { CheckedText } from '../../globals'
import { BenefitsContainer, BenefitsHeader, BenefitsLeft, BenefitsRight } from './Benefits.styles'

//CREATED A ARRAY OF MEMBERSHIP BEBEFITS, COPIED FROM FIGMA DESIGN
const membership = ["RESOURCES & PUBLICATIONS",
"MEMBERSHIP SEARCH",
"APP SUBSCRIPTION MANAGEMENT",
"NEWS TAB",
"GALLERY",
"TICKETS & SUPPORT MANAGEMENT",
"EVENT AND TRAINING MANAGEMENT TAB",
"CHAT MANAGEMENT",
"AUTHENTICATION",
"DUES & OTHER PAYMENT MANAGEMENT",
"EXECUTIVE & COMMITTEE (Exco Activities Management)"
]

//CREATED A ARRAY OF OFFICE ADMINISTRATOR BEBEFITS, COPIED FROM FIGMA DESIGN
const administrator = [
    "RESOURCES & PUBLICATIONS",
"Emlpoyee SEARCH",
"APP SUBSCRIPTION MANAGEMENT",
"NEWS TAB",
"GALLERY",
"SUPPORT MANAGEMENT",
"Meeting MANAGEMENT TAB",
"CHAT MANAGEMENT",
"AUTHENTICATION",
 "PAYMENT MANAGEMENT",
"EXECUTIVE & COMMITTEE (Exco Activities Management)"
]

const Benefits = () => {
  return (
    <BenefitsContainer>
        <BenefitsLeft>
            <BenefitsHeader>Rel8 Membership</BenefitsHeader>
            {
                membership.map(item=>(
                    <CheckedText key={item}>{item}</CheckedText>
                ))
            }
        </BenefitsLeft>

        <BenefitsRight>
            <BenefitsHeader>Rel8  Office Administration</BenefitsHeader>
            {
                administrator.map(item=>(
                    <CheckedText key={item}>{item}</CheckedText>
                ))
            }
        </BenefitsRight>
    </BenefitsContainer>
  )
}

export default Benefits