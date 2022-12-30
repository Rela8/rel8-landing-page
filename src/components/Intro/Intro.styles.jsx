import styled from "styled-components";
import { rel8Purple, rel8White, rel8Black, rel8LightPink } from "../../globals";
import { K4, Laptop, mobile, tablet } from "../../responsive";

export const IntroContainer = styled.div`
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
export const IntroTexts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const IntroHeader = styled.p`
    text-align: center;
    font-size: 40px;
    margin-bottom: 20px;
`
export const IntroArticle = styled.p`
    text-align: center;
    font-size: 20px;
    line-height: 32px;
    width: 50%;

    ${
        mobile({
            width: "100%",
        })
    }
`
export const IntroButtonsCon = styled.div`
    margin-top: 20px;
    
    ${
        mobile({
            display: "flex",
            flexDirection: "column"
        })
    }
`
export const IntroStartButtons = styled.button`
    padding: 10px 16px;
    background-color: ${props=>props.type === "work" ? `${rel8Purple}`:`${rel8White}`};
    border:  ${props=>props.type === "work" ? "none":`1px solid ${rel8Purple}`};
    margin-left:  ${props=>props.type === "work" ? "0px":"50px"};
    color: ${props=>props.type === "work" ? `${rel8White}`:`${rel8Black}`};
    border-radius: 8px;
    cursor: pointer;

    ${
        mobile({
            marginLeft: "0px",
            marginTop: "20px"
        })
    }
    ${
        tablet({
            marginLeft: "10px",
            padding: "10px 12px",
        })
    }
`

export const IntroImages = styled.div`
    margin-top: 40px;
    /* display: flex;
    flex-wrap: wrap; */
    position: relative;
    /* padding-bottom: calc(100% - 73vh); */

    ${
        mobile({
            display: "none",
        })
    }
`

export const IntroImage1 = styled.img`
    object-fit: contain;
    top: 50px;
    width: 40%;
`
export const IntroImage2 = styled.img`
    object-fit: contain;
    /* position: absolute;
    z-index: 1px;
    top: 250px;
    left: calc(100% - 58%); */
    width: 20%;
`
export const IntroImage3 = styled.img`
    object-fit: contain;
    /* position: absolute;
    left: 200px;
    left: calc(100% - 33%);
    top: 50px; */
    width: 20%;
  
`
export const IntroImage4 = styled.img`
    object-fit: contain;
    width: 20%;
    /* position: absolute;
    left: calc(100% - 18%);
    

    ${
        Laptop({
            display: "none",
        })
    }
    ${
        tablet({
            display: "none",
        })
    } */
`