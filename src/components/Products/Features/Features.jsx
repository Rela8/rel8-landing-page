import React from 'react'
import { CheckedText } from '../../../globals'
import { FeaturesContainer, FeaturesHeader, FeaturesImage, FeaturesLeft, FeaturesList, FeaturesRight, FeaturesSubHeader } from './Features.styles'

const Features = ({image,data}) => {
  return (
      <FeaturesContainer>
        <FeaturesLeft>
            <FeaturesHeader>{data.header}</FeaturesHeader>
            <FeaturesSubHeader>{data.subheader}</FeaturesSubHeader>

            <FeaturesList>
              {
                    data.checkedtext ?
                    data.checkedtext.map((item,index) => (
                        <CheckedText key={index}>
                            {item}
                        </CheckedText>
                    )): null
                }
            </FeaturesList>
        </FeaturesLeft>

        <FeaturesRight>
            <FeaturesImage alt="" src={image}/>
        </FeaturesRight>

    </FeaturesContainer>
  )
}

export default Features