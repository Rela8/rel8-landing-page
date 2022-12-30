import React from 'react'
import { Logo, NavMiddleLinks, NavContainer, NavLeft, NavMiddle, 
  NavRight, NavRightLink, NavRightButton, BackDrop, Slider, SliderLinksCon, 
  SliderLinks, CloseSlider, LogoCon, SliderButtons, Hamburger } from './NavBar.styles'
import LogoImage from '../../assets/NavBar/Logo.png'
import { DropDown } from '../../assets/NavBar/svgs'
import { useState } from 'react'

const NavBar = () => {
  const [navisOpen, OpenNav] = useState(false) 
  return (
    <NavContainer>
        <NavLeft>
            <Logo alt='Logo' src={LogoImage}/>
        </NavLeft>

        <NavMiddle>
            <NavMiddleLinks>Rel8</NavMiddleLinks>
            <NavMiddleLinks>Product <DropDown/> </NavMiddleLinks>
            <NavMiddleLinks>Pricing <DropDown/> </NavMiddleLinks>
        </NavMiddle>

        <NavRight>
            <NavRightLink>Sign in</NavRightLink>
            <NavRightButton>Request Demo</NavRightButton>
            <Hamburger onClick={()=> OpenNav(!navisOpen)}/>
        </NavRight>

        <BackDrop open={navisOpen}>
            <Slider open={navisOpen}>
              <LogoCon>
                <Logo alt='Logo' src={LogoImage}/>
                <CloseSlider onClick={()=> OpenNav(!navisOpen)}/>
              </LogoCon>
                <SliderLinksCon>
                    <SliderLinks>Rel8</SliderLinks>
                    <SliderLinks>Product &gt;</SliderLinks>
                    <SliderLinks>Pricing &gt;</SliderLinks>
                    <SliderLinks>Sign In</SliderLinks>
                    <SliderButtons>Request Demo</SliderButtons>
                </SliderLinksCon>
            </Slider>
        </BackDrop>
    </NavContainer>
  )
}

export default NavBar