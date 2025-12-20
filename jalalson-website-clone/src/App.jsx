import { useState } from 'react'
import Announcment from './components/announcmentSection/Announcment'
import LogoBar from './components/HeaderSection/LogoBar'
import Account from './components/HeaderSection/Account'
function App() {
  

  return (
    <div>
     {/*Announcement section*/}
      <Announcment />
      {/*Logo bar section*/}
      <LogoBar />
    </div>
  )
}

export default App
