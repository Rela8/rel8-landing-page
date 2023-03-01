import styled from "styled-components";
import { rel8LightPink } from "../../globals";
import { K4, mobile } from "../../responsive";

export const BenefitsContainer = styled.div`
    padding: 30px 60px 30px 60px;
    display: flex;
    justify-content: space-between;
    background-color: ${rel8LightPink};

    ${
        mobile({
            flexDirection: "column",
            padding: "30px 20px 30px 20px",
            alignItems: "center"
        })
    }
    ${
        K4({
            padding: "30px 20%",
        })
    }
`
export const BenefitsLeft = styled.div`
    width: 40%;
    ${
        mobile({
            width: "100%",
        })
    }
`
export const BenefitsHeader = styled.p`
    font-size: 25px;
`

export const BenefitsRight = styled.div`
    width: 40%;
    ${
        mobile({
            width: "100%",
            marginTop: "20px",
            
        })
    }
`