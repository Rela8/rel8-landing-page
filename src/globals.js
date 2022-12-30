import styled from "styled-components"
import PurpleCheck from './assets/purpleCheck.png'

//GLOBAL COLORS
export const rel8Purple = "#7F02A2"
export const rel8White = "#FFFFFF"
export const rel8Black = "#000000"
export const rel8Pink = "#C892E314"
//THIS #f5f5f5 color doesnt match the figma design
export const rel8LightPink = "#fffff"


//STYLING PURPLE CHECKED TEXT
const CheckedTextContainer = styled.div`
    /* width: 50%; */
    margin: 20px 0px 20px 0px;
    position: relative;
`
const CheckedImage = styled.img`
    width: 20px;
    height: 20px;
    position: absolute;
    left: 0px;
    top: 10px;
`
const Text = styled.div`
    font-size: 18px;
    line-height: 36px;
    margin-left: 25px;
`

export const CheckedText = ({children}) => {
    return (
        <CheckedTextContainer>
            <CheckedImage src={PurpleCheck}/>
            <Text>{children}</Text>
        </CheckedTextContainer>
    )
}


//STYLING THE TOP PURPLE CHECKED TEXT
const TopCheckText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const TopCheckedImage = styled.img`
    margin-bottom: 20px;
`
const TopCheckedTextContainer = styled.div``
const TopCheckedText = styled.p``

export const TopCheckedTextMain = ({children}) => {
    return (

        <TopCheckText>
        <TopCheckedImage alt='' src={PurpleCheck}/>
        <TopCheckedTextContainer>
            <TopCheckedText>
                {children}
            </TopCheckedText>
        </TopCheckedTextContainer>
    </TopCheckText>
    )
}