import styled from "styled-components";
import { rel8Pink } from "../../../../globals";
import { mobile ,tablet, Laptop, K4} from "../../../../responsive";

export const GenericRightContainer = styled.div`
    padding: 30px 60px 30px 60px;
    display: flex;
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
export const GenericRightLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`
export const GenericRightRight = styled.div`
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
export const GenericRightHeader = styled.p`
    font-weight: 700;
    font-size: 20px;
`
export const GenericRightSubHeader = styled.p`
    margin-top: 20px;
    margin-bottom: 10px;
`
export const GenericRightSubHeader1 = styled.p`
    margin-top: 20px;
    margin-bottom: 10px;
`
export const GenericRightSubHeader2 = styled.p`
    margin-top: 20px;
    margin-bottom: 10px;
`
export const GenericLeftSubHeader3 = styled.p`
    margin-top: 20px;
    margin-bottom: 10px;
`
export const GenericRightList = styled.div`
    display: flex;
    flex-direction: column;
`
export const GenericRightImage = styled.img`
    object-fit: contain;
    width: 80%;
    margin-right: -60px;
`
export const ChatHead = styled.span``
export const ChatBody = styled.span``