import React from 'react'
import Navbar from './Navbar'
import NavbarDown from './NavbarDown'
import WelcomeMessage from './WelcomeMessage'
import AlcoholItem from './AlcoholItem'

const AppLayout = () => {
  return (
    <>
    <Navbar/>
    <AlcoholItem/>
    <NavbarDown/>
    </>
  )
    
  
}

export default AppLayout;