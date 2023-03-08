import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './components/Header'
import { Profile } from './components/Profile'
import { Portfolio } from './components/Portfolio'
import { ReasonHiring } from './components/ReasonHiring'

function App() {

   return (
      <div className="App">
         <Header />
         <Profile />
         <ReasonHiring />
         <Portfolio />
      </div>
   )
}

export default App
