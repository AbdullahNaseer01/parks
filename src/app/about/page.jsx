import React from 'react'
import Team from './Team'
import Achievement from './Achievement'
import Header from './Header'
// import Home from '../page'
import HomePage from '../components/homePage/Home'

function AboutUs() {
  return (
    <div>
        <HomePage/>
        <Header/>
        <Achievement/>
        <Team/>
    </div>
  )
}

export default AboutUs