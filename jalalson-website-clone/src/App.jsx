import { useState } from 'react'
import Announcment from './components/announcmentSection/Announcment'
import LogoBar from './components/HeaderSection/LogoBar'
import ImageSlider from './components/promoSection/imageSlider'
import NavBar from './components/HeaderSection/NavBar'

function App() {
  

  return (
    <div>
     {/*Announcement section*/}
      <Announcment />
      {/*Logo bar section*/}
      <LogoBar />
      {/*Navigation bar section*/}
      <NavBar />
      {/*Promo section*/}
      <ImageSlider />
    </div>
  )
}

export default App
