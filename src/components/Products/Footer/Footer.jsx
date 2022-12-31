import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { rel8LightPink } from '../../../globals';
import { K4, mobile } from '../../../responsive';

export const FooterContainer = styled.div`
    padding: 30px 60px 30px 60px;
    background-color: ${rel8LightPink};
    ${
        mobile({
            padding: "30px 20px 30px 20px",
        })
    }
    ${
        K4({
            padding: "30px 20%",
        })
    }
`
export const FooterHold = styled.p`
    margin: 20px 0px 20px 0px;
`
export const FooterLinks = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: black;
`
export const FooterHeader = styled.div`
    font-size: 24px;
`

const Footer = () => {
  return (
    <FooterContainer>
        <FooterHeader>Products</FooterHeader>
        <FooterHold>
            <Link style={{textDecoration:"none", color:"black"}} to="/products-member">Product Membership</Link>
        </FooterHold>
        <FooterHold>
            <Link style={{textDecoration:"none", color:"black"}} to="/products-admin">Product Administrator</Link>
        </FooterHold>

        <FooterHeader>Pricing</FooterHeader>
        <FooterHold>
            <Link style={{textDecoration:"none", color:"black"}} to="/pricing-member">Pricing Membership</Link>
        </FooterHold>
        <FooterHold>
            <Link style={{textDecoration:"none", color:"black"}} to="/pricing-admin">Pricing Administrator</Link>
        </FooterHold>

        <FooterHold>
            <FooterLinks href='#'>Contact Us</FooterLinks>
        </FooterHold>
    </FooterContainer>
  )
}

export default Footer