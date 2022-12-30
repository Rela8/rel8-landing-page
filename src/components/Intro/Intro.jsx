import React from 'react'
import { IntroArticle, IntroButtonsCon, IntroContainer, IntroHeader, IntroImage1,IntroImage2,IntroImage3,IntroImage4, IntroImages, IntroStartButtons, IntroTexts } from './Intro.styles'
import Gallery from '../../assets/Intro/Gallery.png'
import Dashboard from '../../assets/Intro/Dashboard.png'
import Homepage from '../../assets/Intro/Homepage.png'
import Buif from '../../assets/Intro/Buif.png'

const Intro = () => {
  return (
    <IntroContainer>
        <IntroTexts>
            <IntroHeader>Rel 8</IntroHeader>
            <IntroArticle>
                Rel8 aids the day-day administration of associations, professional bodies, alumni associations and companies. 
            </IntroArticle>
            <IntroButtonsCon>
                <IntroStartButtons type='work'>Get started for workplace</IntroStartButtons>
                <IntroStartButtons>Get started for membership</IntroStartButtons>
            </IntroButtonsCon>
        </IntroTexts>
        <IntroImages>
            <IntroImage1 alt="" src={Gallery}/>
            <IntroImage2 alt="" src={Dashboard}/>
            <IntroImage3 alt="" src={Homepage}/>
            <IntroImage4 alt="" src={Buif}/>
        </IntroImages>
    </IntroContainer>
  )
}

export default Intro