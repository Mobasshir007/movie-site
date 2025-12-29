import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/Images/hero_banner.jpg'
import hero_title from '../../assets/Images/hero_title.png'
import play_icon from '../../assets/Images/play_icon.png'
import Info from '../../assets/Images/info_icon.png'
import Title from '../../components/TitleCards/Title'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='Home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner}alt="" className='banner'/>
        <div className='caption'>
          <img src={hero_title} alt="" className='cap-title' />
          <p>Discovering his ties to a secret ancient order , a young
            man living in modern Istanbul embarks on a quest to save 
            the city from a immortal enemy.
          </p>
          <div className="hero-btns">
            <button className='btn' > <img src={play_icon} alt="" /> Play</button>
            <button className='btn dark-btn'> <img src={Info} alt="" />More Info</button>
          </div>
          <Title title={'Popular on Notflix'}/>
        </div>
      </div>
      <div className="more-cards">
        <Title title={"Blockbuster Movies "} category={"top_rated"}/>
        <Title title={'Romance'} category={"popular"}/>
        <Title title={"Horror"} category={"upcoming"}/>
        <Title title={"Top Picks For You"} category={"now_playing"}/>
        
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  )
}

export default Home