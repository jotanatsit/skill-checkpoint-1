import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './components/Header'
import { Profile } from './components/Profile'
import { Portfolio } from './components/Portfolio'

function App() {

   return (
      <div className="App">
         <Header />
         <Profile />
         <Portfolio />
      </div>
   )
}

export default App
