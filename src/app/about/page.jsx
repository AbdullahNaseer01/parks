import React from 'react'
import Team from './Team'
import Achievement from './Achievement'
import Header from './Header'
// import Home from '../page'
import Navbar from '../components/navbar/Navbar'

function AboutUs() {
  return (
    <div>
        <Navbar styleProps={{color:"#389b87"}}/>
        <Header/>
        <Achievement/>
        <Team/>
    </div>
  )
}

export default AboutUs