import React from 'react'
import Benefits from '../components/Benefits/Benefits'
import Intro from '../components/Intro/Intro'
import NavBar from '../components/NavBar/NavBar'

const Home = () => {
  return (
    <>
        <NavBar />
        <Intro />
        <Benefits />
    </>
  )
}

export default Home