import React, { useEffect } from 'react'
import NavBar from '../components/NavBar/NavBar'
import About from '../components/Products/About/About'
import Features from '../components/Products/Features/Features'
import Footer from '../components/Products/Footer/Footer'
import GenericLeft from '../components/Products/Generic/GenericLeft/GenericLeft'
import GenericRight from '../components/Products/Generic/GenericRight/GenericRight'
import { AppSub, Auth, ChatManagement, DuesNOther, EventNTraining,
  ExecutiveCom, FeaturesData, Gallery, MembershipOffer, ResourcePub, Ticket } from '../MembershipPageData'
import App from '../assets/Product/Membership/App.png'
import AuthImg from '../assets/Product/Membership/Auth.png'
import Chat from '../assets/Product/Membership/Chat.png'
import Dues from '../assets/Product/Membership/Dues.png'
import Event from '../assets/Product/Membership/Event.png'
import Exec from '../assets/Product/Membership/Exec.png'
import FeaturesImg from '../assets/Product/Membership/Features.png'
import GalleryImg from '../assets/Product/Membership/Gallery.png'
import MemberImg from '../assets/Product/Membership/Member.png'
import ResourceImg from '../assets/Product/Membership/Resourse.png'
import TicketImg from '../assets/Product/Membership/Ticket.png'

const ProductsMembership = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
        <NavBar />
        <About />
        <Features data={FeaturesData} image={FeaturesImg}/>
        <GenericLeft data={EventNTraining} image={Event}/>
        <GenericRight data={ChatManagement} image={Chat}/>
        <GenericLeft data={ExecutiveCom} image={Exec}/>
        <GenericRight data={ResourcePub} image={ResourceImg}/>
        <GenericLeft data={DuesNOther} image={Dues}/>
        <GenericRight data={MembershipOffer} image={MemberImg}/>
        <GenericLeft data={Gallery} image={GalleryImg}/>
        <GenericRight data={AppSub} image={App}/>
        <GenericLeft data={Auth} image={AuthImg}/>
        <GenericRight data={Ticket} image={TicketImg}/>
        <Footer />
    </>
  )
}

export default ProductsMembership