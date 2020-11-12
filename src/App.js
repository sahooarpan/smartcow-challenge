import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Slider from './components/Slider'
import VideoContainer from './components/VideoContainer'
const App = () => {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <div className="container text-center slider">
        <Slider/>
      </div>
      <VideoContainer/>

    </div>
  )
}

export default App
