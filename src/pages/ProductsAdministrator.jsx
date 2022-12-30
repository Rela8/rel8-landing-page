import React from 'react'
import { AdminChat, AdminEvents, AdminExec, AdminFeatures, AdminResc, AdminEmployee, 
  AdminApp, AdminGallery, AdminAuth, AdminTicket} from '../AdministratorPageData'
import NavBar from '../components/NavBar/NavBar'
import AboutAdmin from '../components/Products/About/AboutAdmin'
import Features from '../components/Products/Features/Features'
import GenericLeft from '../components/Products/Generic/GenericLeft/GenericLeft'
import GenericRight from '../components/Products/Generic/GenericRight/GenericRight'
import App from '../assets/Product/Administrator/App.png'
import AuthImg from '../assets/Product/Administrator/Auth.png'
import Chat from '../assets/Product/Administrator/Chat.png'
import Event from '../assets/Product/Administrator/Event.png'
import Exec from '../assets/Product/Administrator/Exec.png'
import FeaturesImg from '../assets/Product/Administrator/Features.png'
import GalleryImg from '../assets/Product/Administrator/Gallery.png'
import EmployeeImg from '../assets/Product/Administrator/Employee.png'
import ResourceImg from '../assets/Product/Administrator/Resourse.png'
import TicketImg from '../assets/Product/Administrator/Ticket.png'

const ProductsAdministrator = () => {
  return (
    <>
      <NavBar />
      <AboutAdmin />
      <Features data={AdminFeatures} image={FeaturesImg}/>
      <GenericLeft data={AdminEvents} image={Event}/>
      <GenericRight data={AdminChat} image={Chat}/>
      <GenericLeft data={AdminExec} image={Exec}/>
      <GenericRight data={AdminResc} image={ResourceImg}/>
      <GenericLeft data={AdminEmployee} image={EmployeeImg}/>
      <GenericRight data={AdminGallery} image={GalleryImg}/>
      <GenericLeft data={AdminApp} image={App}/>
      <GenericRight data={AdminAuth} image={AuthImg}/>
      <GenericLeft data={AdminTicket} image={TicketImg}/>
    </>
  )
}

export default ProductsAdministrator