import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
const App = () => {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <iframe title="covid" className="video-container" width="430" height="267" 
      src="https://www.youtube.com/embed/-Fdo_HT3X80?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}

export default App
