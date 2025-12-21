import { useState } from 'react'
import Announcment from './components/announcmentSection/Announcment'
import LogoBar from './components/HeaderSection/LogoBar'
import ImageSlider from './components/promoSection/imageSlider'

function App() {
  

  return (
    <div>
     {/*Announcement section*/}
      <Announcment />
      {/*Logo bar section*/}
      <LogoBar />
      {/*Promo section*/}
      <ImageSlider />
    </div>
  )
}

export default App
