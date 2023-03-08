import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './components/Header.jsx'
import { Profile } from './components/Profile.jsx'
import { Portfolio } from './components/Portfolio.jsx'
import { ReasonHiring } from './components/ReasonHiring.jsx'
import { Footer } from './components/Footer.jsx'


function App() {

   return (
      <div className="App">
         <Header />
         <Profile />
         <ReasonHiring />
         <Portfolio />
         <Footer />
      </div>
   )
}

export default App
