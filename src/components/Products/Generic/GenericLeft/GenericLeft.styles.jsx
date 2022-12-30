import styled from "styled-components";
import { rel8LightPink } from "../../../../globals";
import { mobile ,tablet, Laptop, K4} from "../../../../responsive";

export const GenericLeftContainer = styled.div`
    padding: 30px 60px 30px 60px;
    display: flex;
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
export const GenericLeftLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
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
export const GenericLeftRight = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`
export const GenericLeftHeader = styled.p`
    font-weight: 700;
    font-size: 20px;
`
export const GenericLeftSubHeader = styled.p`
    margin-top: 20px;
    margin-bottom: 10px;
`
export const GenericLeftSubHeader1 = styled.p`
    margin-top: 20px;
    margin-bottom: 10px;
`
export const GenericLeftSubHeader2 = styled.p`
    margin-top: 20px;
    margin-bottom: 10px;
`
export const GenericLeftSubHeader3 = styled.p`
    margin-top: 20px;
    margin-bottom: 10px;
`
export const GenericLeftList = styled.div`
    display: flex;
    flex-direction: column;
`
export const GenericLeftImage = styled.img`
    object-fit: contain;
    width: 80%;
    margin-left: -60px;
`
export const ChatHead = styled.span``
export const ChatBody = styled.span``