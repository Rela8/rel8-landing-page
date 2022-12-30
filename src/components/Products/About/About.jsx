import React from 'react'
import { AboutContainer, AboutDetails, AboutHeader, AboutImage1, AboutImage2,
    AboutImage3, AboutImage4, AboutImage5, AboutImageHolder,
    AboutMain, AboutSubheader,MainLeft, MainRight, MoreAboutDetails } from './About.styles'
import Vector1 from '../../../assets/Product/About/Vector1.png'
import Vector2 from '../../../assets/Product/About/Vector2.png'
import Vector3 from '../../../assets/Product/About/Vector3.png'
import Vector4 from '../../../assets/Product/About/Vector4.png'
import Vector5 from '../../../assets/Product/About/Vector5.png'
import { TopCheckedTextMain } from '../../../globals'

const About = () => {
  return (
    <AboutContainer>
        <AboutMain>
            <MainLeft>
                <AboutHeader>Rel8 Membership</AboutHeader>
                <AboutSubheader>About Rel8 Membership</AboutSubheader>
                <AboutDetails>
                Rel8 is a membership organization-based interaction and collaboration app, designed to keep the operations, interactions and collaborative activities of people of common interests in sync remotely within closed defined virtual communities (web base and mobile). 
                </AboutDetails>
            </MainLeft>

            <MainRight>
                <AboutImageHolder>
                    <AboutImage1 alt="" src={Vector1}/>
                    <AboutImage2 alt="" src={Vector2}/>
                    <AboutImage3 alt="" src={Vector3}/>
                    <AboutImage4 alt="" src={Vector4}/>
                    <AboutImage5 alt="" src={Vector5}/>
                </AboutImageHolder>
            </MainRight>

        </AboutMain>
        <MoreAboutDetails>
            
            <TopCheckedTextMain>As stated above, the app was created to aid seamless collaborative interactions and communications within a group of people of similar interests such as membership-based organizations, professional bodies, alumni associations, etc.</TopCheckedTextMain>
            <TopCheckedTextMain>It provides for features like members account management (via its membership portal), events management, news dissemination, one-on-one chats amongst members as well as general or group chats amongst all members.</TopCheckedTextMain>
            <TopCheckedTextMain>Rel8 brings people of common purpose together to aid the achievement of their set goals and objectives.</TopCheckedTextMain>
            <TopCheckedTextMain>It also allows for the operations of excos and committees and meeting management amongst others.</TopCheckedTextMain>

        </MoreAboutDetails>
    </AboutContainer>
  )
}

export default About