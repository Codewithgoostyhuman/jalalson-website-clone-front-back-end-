import { useState } from 'react'
import Announcment from './components/announcmentSection/Announcment'
import LogoBar from './components/HeaderSection/LogoBar'
import ImageSlider from './components/promoSection/imageSlider'
import StarterSection from './components/startersSection/StarterSection'

function App() {
  

  return (
    <div>
     {/*Announcement section*/}
      <Announcment />
      {/*Logo bar section*/}
      <LogoBar />
      {/*Promo section*/}
      <ImageSlider />
      <StarterSection />
    </div>
  )
}

export default App
