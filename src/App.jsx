import { useState } from 'react'

import './App.css'
import Hero from "./assets/Components/Hero"
import Pics from "./assets/Components/Pics"
import Images from './assets/Components/Images'
import Faq from "./assets/Components/Faq"
import Footer from "./assets/Components/Footer"
import FooterInput from './assets/Components/FooterInput'


function App() {
 

  return (
    <>
    <Hero/>
    <Pics/>
    <Images/>
    <Faq/>
    <FooterInput/>
    <Footer/>
    </>
  )
}

export default App
