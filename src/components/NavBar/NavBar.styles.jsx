import styled from "styled-components";
import { rel8LightPink, rel8Purple, rel8White } from "../../globals";
import { mobile, tablet } from "../../responsive";

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 60px 30px 60px;
    background-color: ${rel8LightPink};

    ${
        mobile({
            padding: "30px 20px 30px 20px",
        })
    }
`

export const NavLeft = styled.div``
export const Logo = styled.img`
    cursor: pointer;
`


export const NavMiddle = styled.div`
    ${
        mobile({
            display: "none",
        })
    }
        ${
        tablet({
            display: "none",
        })
    }
`
export const NavMiddleLinks = styled.span`
    margin-left: 30px;
    font-size: 20px;
    cursor: pointer;
`

export const Hamburger = styled.div`
    width: 30px;
    height: 4px;
    background-color: ${rel8Purple};
    cursor: pointer;
    position: relative;
    display: none;

    &::before{
        content: "";
        width: 100%;
        height: 4px;
        display: block;
        background-color: ${rel8Purple};
        position: absolute;
        top: 10px;
    }
    &::after{
        content: "";
        width: 100%;
        height: 4px;
        display: block;
        background-color: ${rel8Purple};
        position: absolute;
        bottom: 10px;
    }
    ${
        mobile({
            display: "block",
        })
    }

    ${
        tablet({
            display: "block",
        })
    }
`
export const NavRight = styled.div`
`
export const NavRightLink = styled.span`
    cursor: pointer;
    ${
        mobile({
            display: "none",
        })
    }
    ${
        tablet({
            display: "none",
        })
    }
`
export const NavRightButton = styled.button`
    background-color: ${rel8Purple};
    margin-left: 20px;
    border: none;
    padding: 10px;
    border-radius: 8px;
    color: ${rel8White};
    cursor: pointer;
    ${
        mobile({
            display: "none",
        })
    }
    ${
        tablet({
            display: "none",
        })
    }
`
export const BackDrop = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
    transition: 0.3s all;
    transform: translateX(${props=>props.open ? "0%" : "-100%"});
    ${
        mobile({
            display: "block",
        })
    }

    ${
        tablet({
            display: "block",
        })
    }
`

export const Slider = styled.div`
    padding: 20px 10px 0 0;
    transition: 0.8s all;
    transform: translateX(${props=>props.open ? "0%" : "-100%"});
    width: 250px;
    height: 100vh;
    overflow-y: auto;
    position: fixed;
    left: 0;
    top: 0;
    background-color: ${rel8White};
`
export const LogoCon = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const CloseSlider = styled.div`
    width: 30px;
    height: 5px;
    background-color: ${rel8Purple};
    transform: rotate(45deg);
    cursor: pointer;

    &::after{
        content: "";
        width: 30px;
        height: 5px;
        display: block;
        background-color: ${rel8Purple};
        transform: rotate(90deg);
    }
`
export const SliderLinksCon = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`
export const SliderLinks = styled.span`
    margin: 10px 0px 10px 10px;
    font-size: 20px;
    color: ${rel8Purple};
    cursor: pointer;

    &::after{
        content: "";
        width: 0%;
        height: 2px;
        background-color: ${rel8Purple};
        display: block;
        transition: all 0.3s;
    }

    &:hover::after{
        width: 100%;
    }
`
export const SliderButtons = styled.p`
    background-color: ${rel8Purple};
    border: none;
    padding: 10px;
    margin-top: 10px;
    color: ${rel8White};
    cursor: pointer;
`