import { useState } from 'react'
import Announcment from '../components/announcmentSection/Announcment'
import LogoBar from '../components/HeaderSection/LogoBar'
import ImageSlider from '../components/promoSection/imageSlider'
import StarterSection from '../components/startersSection/StarterSection'
import DeliSection1 from '../components/deliSection1/DeliSection1'
import DeliSection2 from '../components/deliSection2/DeliSection2'
import BakedItemsSection from '../components/backedItemsSection/BakedItemsSection'
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
      <BakedItemsSection />
      <DeliSection1 />
      <DeliSection2 />
    </div>
  )
}

export default App
