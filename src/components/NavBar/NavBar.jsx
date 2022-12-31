import React from 'react'
import { Logo, NavMiddleLinks, NavContainer, NavLeft, NavMiddle, 
  NavRight, NavRightLink, NavRightButton, BackDrop, Slider, SliderLinksCon, 
  SliderLinks, CloseSlider, LogoCon, SliderButtons, Hamburger, DropDownSlider, DropDownItem } from './NavBar.styles'
import LogoImage from '../../assets/NavBar/Logo.png'
import { DropDown } from '../../assets/NavBar/svgs'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [navisOpen, OpenNav] = useState(false)

  const [product, setProduct] = useState(true)
  const [pricing, setPricing] = useState(true)
  
  return (
    <NavContainer>
        <NavLeft>
          <Link to={"/"}>
            <Logo alt='Logo' src={LogoImage}/>
          </Link>
        </NavLeft>

        <NavMiddle>
            <Link style={{textDecoration:"none"}} to={"/"}>
              <NavMiddleLinks>Rel8</NavMiddleLinks>
            </Link>
            <NavMiddleLinks onClick={()=>setProduct(!product)}>Product <DropDown/> </NavMiddleLinks>
            <NavMiddleLinks onClick={()=>setPricing(!pricing)}>Pricing <DropDown/> </NavMiddleLinks>

            <DropDownSlider show={product===true ? "yes": "no"}>
              <Link style={{textDecoration:"none"}} to={"/products-member"}><DropDownItem>Product Membership</DropDownItem></Link>
              <Link style={{textDecoration:"none"}} to={"/products-admin"}><DropDownItem>Product Administrator</DropDownItem></Link>
            </DropDownSlider>

            <DropDownSlider typex="product" show={pricing===true ? "yes": "no"}>
              <Link style={{textDecoration:"none"}} to={"/pricing-member"}><DropDownItem>Pricing Membership</DropDownItem></Link>
              <Link style={{textDecoration:"none"}} to={"/pricing-admin"}><DropDownItem>Pricing Administrator</DropDownItem></Link>
            </DropDownSlider>
        </NavMiddle>

        <NavRight>
            <NavRightLink>Sign in</NavRightLink>
            <NavRightButton>Request Demo</NavRightButton>
            <Hamburger onClick={()=> OpenNav(!navisOpen)}/>
        </NavRight>

        <BackDrop open={navisOpen}>
            <Slider open={navisOpen}>
              <LogoCon>
                <Link to={"/"}>
                  <Logo alt='Logo' src={LogoImage}/>
                </Link>
                <CloseSlider onClick={()=> OpenNav(!navisOpen)}/>
              </LogoCon>
                <SliderLinksCon>
                    <Link style={{textDecoration:"none"}} to={"/"}><SliderLinks>Rel8</SliderLinks></Link>
                    <Link style={{textDecoration:"none"}} to={"/products-member"}><SliderLinks>Product Membership</SliderLinks></Link>
                    <Link style={{textDecoration:"none"}} to={"/products-admin"}><SliderLinks>Product Administrator</SliderLinks></Link>
                    <Link style={{textDecoration:"none"}} to={"/pricing-member"}><SliderLinks>Pricing Membership</SliderLinks></Link>
                    <Link style={{textDecoration:"none"}} to={"/pricing-admin"}><SliderLinks>Pricing Administrator</SliderLinks></Link>
                    <SliderLinks>Sign In</SliderLinks>
                    <SliderButtons>Request Demo</SliderButtons>
                </SliderLinksCon>
            </Slider>
        </BackDrop>
    </NavContainer>
  )
}

export default NavBar