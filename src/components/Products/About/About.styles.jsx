import styled from "styled-components";
import { rel8LightPink, rel8Purple } from "../../../globals";
import { Desktop, K4, Laptop, mobile, tablet } from "../../../responsive";

export const AboutContainer = styled.div`
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

export const AboutMain = styled.div`
    display: flex;
`
export const MainLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const MainRight = styled.div`
    flex: 1;

    ${
        mobile({
            display: "none",
        })
    }
`

export const AboutHeader  = styled.p`
    font-size: 32px;
    font-weight: 700;
`
export const AboutSubheader = styled.p`
    font-size: 14px;
    color: ${rel8Purple};
    margin-top: 10px;
`
export const AboutDetails = styled.p`
    margin-top: 20px;
`

export const AboutImageHolder = styled.div`
    position: relative;
    width: 100%;
    height: 60vh;
    ${
        tablet({
            height: "40vh",
        })
    }
    ${
        Laptop({
            height: "50vh",
        })
    }
`
export const AboutImage1 = styled.img`
    object-fit: contain;
    position: absolute;
    top: 0;
    left: 10%;
    ${
        tablet({
            top: "40%",
            left: "10%"
        })
    }
`
export const AboutImage2 = styled.img`
    object-fit: contain;
    position: absolute;
    top: 10%;
    right: 0;
    ${
        tablet({
            top: "20%",
        })
    }
        ${
        Laptop({
            display: "none",
        })
    }
    
`
export const AboutImage3 = styled.img`
    object-fit: contain;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 35%;
    right: 20%;
    left: 0;
    ${
        tablet({
            display: "none",
        })
    }
    ${
        Laptop({
            display: "none",
        })
    }
`
export const AboutImage4 = styled.img`
    object-fit: contain;
    position: absolute;
    bottom: 0;
    left: 0;
    ${
        tablet({
            display: "none",
        })
    }
        ${
        Laptop({
            display: "none",
        })
    }

`
export const AboutImage5 = styled.img`
    object-fit: contain;
    position: absolute;
    bottom: 0;
    right: 10%;
    ${
        tablet({
            display: "none",
        })
    } 

`
export const MoreAboutDetails = styled.div`
    margin-top: 80px;
    display: grid;
    grid-row-gap: 20px;
    grid-column-gap: 80px;
    grid-template-columns: auto auto;

    ${
        mobile({
           display: "flex",
           flexDirection: "column",
        })
    }
`

export const AdminImageHolder = styled.div`
    position: relative;
    width: 100%;
    height: 60vh;
    ${
        tablet({
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        })
    }
    ${
        Laptop({
            marginLeft: "20px",
        })
    }
    ${
        Desktop({
            marginLeft: "20px",
        })
    }
    ${
        K4({
            marginLeft: "10%",
        })
    }
`
export const AboutAdminImage1 = styled.img`
    object-fit: contain;
    position: absolute;
    ${
        tablet({
            width: "80%",
        })
    }
`
export const AboutAdminImage2 = styled.img`
    object-fit: contain;
    position: absolute;
    bottom: 0;
    right: 20%;
    ${
        tablet({
            display:"none",
        })
    }

    ${
        Laptop({
            bottom: "0",
            right: "0",
        })
    }
`