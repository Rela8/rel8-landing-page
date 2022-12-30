import React from 'react'
import { AboutAdminImage1, AboutAdminImage2, AboutContainer, AboutDetails, AboutHeader,
    AboutMain, AboutSubheader,AdminImageHolder,MainLeft, MainRight, MoreAboutDetails } from './About.styles'
import { TopCheckedTextMain } from '../../../globals'
import RectangleAdmin1 from '../../../assets/Product/About/RectangleAdmin1.png'
import RectangleAdmin2 from '../../../assets/Product/About/RectangleAdmin2.png'

const AboutAdmin = () => {
  return (
    <AboutContainer>
        <AboutMain>
            <MainLeft>
                <AboutHeader>Rel8 Office Administration</AboutHeader>
                <AboutSubheader>About Rel8 Office Administration</AboutSubheader>
                <AboutDetails>Rel8 Admin is team and community-based interaction and collaboration app, designed to keep the operations, interactions and collaborative activities of people of common interests within an organization in sync within remote or highbred environment within closed defined virtual communities (web base and mobile).
                </AboutDetails>
            </MainLeft>

            <MainRight>
                <AdminImageHolder>
                    <AboutAdminImage1 alt='' src={RectangleAdmin1}/>
                    <AboutAdminImage2 alt='' src={RectangleAdmin2}/>
                </AdminImageHolder>
            </MainRight>

        </AboutMain>
        <MoreAboutDetails>
            
            <TopCheckedTextMain>As stated above, the app was created to aid seamless collaborative interactions and communications within a group of people of similar interests such as teams, units, departments, or groups within an organization.</TopCheckedTextMain>
            <TopCheckedTextMain>It provides for features like employees account management (via its membership portal), events management, news/information dissemination (virtual notice board, one-on-one chats amongst employees as well as general or group chats amongst all employees.</TopCheckedTextMain>
            <TopCheckedTextMain>It supports easy flow of information especially with regards to request management.</TopCheckedTextMain>
            <TopCheckedTextMain>Rel8 brings people of common purpose together to aid the achievement of their set goals and objectives.</TopCheckedTextMain>
            <TopCheckedTextMain>It also allows for the operations of excos, management and committee meeting management amongst others.</TopCheckedTextMain>

        </MoreAboutDetails>
    </AboutContainer>
  )
}

export default AboutAdmin