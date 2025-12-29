import { createContext, useState } from 'react'
import Announcment from './components/announcmentSection/Announcment'
import LogoBar from './components/HeaderSection/LogoBar'
import ImageSlider from './components/promoSection/imageSlider'
import StarterSection from './components/startersSection/StarterSection'
import DeliSection1 from './components/deliSection1/DeliSection1'
import DeliSection2 from './components/deliSection2/DeliSection2'
import BackedItemsSection from './components/backedItemsSection/BackedItemsSection'
import { CartContext } from './components/Contexts';
function App() {
  const [totalItemsInCart, setTotalItemsInCart] = useState(0);
  const [totalPriceInCart, setTotalPriceInCart] = useState(0);

  return (
    <div>
     {/*Announcement section*/}
      <Announcment />
      {/*Logo bar section*/}
      <CartContext.Provider value={{ totalItemsInCart, setTotalItemsInCart, totalPriceInCart, setTotalPriceInCart }}>
        <LogoBar />
      </CartContext.Provider>
      {/*Promo section*/}
      <ImageSlider />
      <StarterSection />
      <BackedItemsSection />
      <DeliSection1 />
      <DeliSection2 />
    </div>
  )
}

export default App
