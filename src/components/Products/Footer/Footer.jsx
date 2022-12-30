import React from 'react'
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
`

const Footer = () => {
  return (
    <FooterContainer>
        <FooterHold>
            <FooterLinks>Product</FooterLinks>
        </FooterHold>
        <FooterHold>
            <FooterLinks>Pricing</FooterLinks>
        </FooterHold>
        <FooterHold>
            <FooterLinks>Contact Us</FooterLinks>
        </FooterHold>
    </FooterContainer>
  )
}

export default Footer