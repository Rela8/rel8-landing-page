import styled from "styled-components";
import { rel8Pink, rel8Purple } from "../../../globals";
import { K4, Laptop, mobile, tablet } from "../../../responsive";

export const FeaturesContainer = styled.div`
    display: flex;
    padding: 30px 60px 30px 60px;
    background-color: ${rel8Pink};

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
export const FeaturesLeft = styled.div`
    flex: 1;
`
export const FeaturesRight = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

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
    ${
        Laptop({
            display: "none",
        })
    }
`
export const FeaturesHeader = styled.p`
    font-size: 32px;
    font-weight: 700;
    color: ${rel8Purple};
`
export const FeaturesSubHeader = styled.p`
    font-weight: 700;
    margin-top: 20px;
`
export const FeaturesList = styled.div`
    display: flex;
    flex-direction: column;
`
export const FeaturesImage = styled.img`
    object-fit: contain;
    width: 80%;
    margin-right: -60px;
`