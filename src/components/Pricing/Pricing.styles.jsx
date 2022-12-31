import styled from "styled-components";
import { rel8Pink, rel8Purple, rel8White } from "../../globals";
import { K4, mobile} from "../../responsive";

export const PricingContainer = styled.div`
    padding: 30px 30% 30px 30%;
    display: flex;
    flex-direction: column;
    align-items: center;

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

export const PricingHeader = styled.p`
    font-size: 40px;
`
export const PricingSubHeader = styled.p`
    margin-top: 10px;
    text-align: center;
`

export const PricingButtonHolder = styled.div`
    margin: 30px 0px;
`
export const PricingButtons = styled.button`
    padding: 10px 20px;
    color: ${props=>props.typex === 'filled' ? `${rel8White}`: `${rel8Purple}`};
    background-color: ${props=>props.typex === 'filled' ? `${rel8Purple}`:`${rel8White}`};
    border: ${props=>props.typex === 'filled' ? `1px solid ${rel8Purple}`:`1px solid ${rel8Purple}`};
    margin-left: ${props=>props.typex === 'filled' ? "10px":"10px"};
    cursor: pointer;
`

export const PricingDetailsCon = styled.div`
    background-color: ${rel8Pink};
    padding: 20px 20px 60px 20px;
    width: 500px;
    word-wrap: break-word;

    ${
        mobile({
            width: "250px",
        })
    }
`
export const PricingDetailsTextCon = styled.div`
    text-align: center;
`
export const PricingDetailsHeader = styled.p`
    font-size: 24px;
`
export const PricingDetailsSubHeader = styled.p`
    font-weight: 700;
    font-size: 24px;
    color: ${rel8Purple};
    margin-top: 20px;
`
export const PricingDetailsSubHeader1 = styled.p`
    font-size: 24px;
    color: ${rel8Purple};
    margin-top: 20px;
`

export const PricingList = styled.div`
    margin-top: 70px;
    ${
        mobile({
            textAlign: "center",
        })
    }
`
export const PricingListItems = styled.p`
    margin: 15px 0px;
    align-self: flex-start;
`

export const GetStartedButton = styled.button`
    background-color: ${rel8Purple};
    color:${rel8White};
    border: none;
    padding: 10px 20px;
    margin-top: 50px;
    cursor: pointer;
`