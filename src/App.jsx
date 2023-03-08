import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './components/Header'
import { Profile } from './components/Profile'

function App() {

   return (
      <div className="App">
         <Header />
         <Profile />
      </div>
   )
}

export default App
